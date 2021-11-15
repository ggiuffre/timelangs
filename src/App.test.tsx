import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

const mockItemsArray = [{
    _id: 123,
    name: 'SomeLanguage',
    birth: 1861,
    tags: ['SomeLanguage', 'OOP', 'arrays']
  }, {
    _id: 456,
    name: 'Some Language',
    birth: 1860,
    tags: ['Some Language', 'whatever', 'test', 'test 2']
  }, {
    _id: 789,
    name: 'something-else',
    birth: 1999,
    tags: ['something-else', 'some tag']
}];

const mockTags = ['SomeLanguage', 'OOP', 'arrays', 'some tag',
  'Some Language', 'whatever', 'test', 'test 2', 'something-else'];



describe('An App component', () => {
  const windowScroll = global.window.scroll;
  beforeAll(() => {
    global.window.scroll = () => {};
  });

  afterAll(() => {
    global.window.scroll = windowScroll;
  });

  beforeEach(() => {
    render(
      <MemoryRouter>
        <App languages={mockItemsArray} tags={mockTags} />
      </MemoryRouter>
    );
  });

  it('contains a form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('does not show a timeline, if not requested', () => {
    screen.queryAllByRole('list').forEach(renderedList => {
      expect(renderedList).not.toHaveClass('Timeline');
    });
  });

  it('shows a timeline of items, upon request', () => {
    fireEvent.click(screen.getByText('Update'));
    screen.getAllByRole('list');

    expect(screen.getAllByRole('list')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('list')[0]).toHaveClass('Timeline');
  });
});
