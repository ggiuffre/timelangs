import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

const mockItemsArray = [{
    _id: 123,
    name: 'SomeLibrary',
    birth: 1861,
    tags: ['SomeLibrary', 'libraries', 'some other tag']
  }, {
    _id: 456,
    name: 'Some Language',
    birth: 1860,
    tags: ['Some Language', 'languages', 'some other tag']
  }, {
    _id: 789,
    name: 'something-else',
    birth: 1999,
    tags: ['something-else', 'some tag']
}];

beforeAll(() => {
  jest.mock('./languages.json', () =>
    mockItemsArray
  );
});



describe('An App component', () => {
  beforeEach(() => {
    render(<MemoryRouter><App /></MemoryRouter>);
  });

  it('contains a form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('does not show a timeline, if not requested', () => {
    screen.queryAllByRole('list').forEach(renderedList => {
      expect(renderedList).not.toHaveClass('Timeline');
    });
  });

  it('shows a timeline of items, upon request', async () => {
    fireEvent.click(screen.getByText('Update'));
    await screen.getAllByRole('list');

    expect(screen.getAllByRole('list')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('list')[0]).toHaveClass('Timeline');
  });
});
