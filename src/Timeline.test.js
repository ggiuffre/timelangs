import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

const mockItemsArray = [
  {
    _id: 123,
    name: 'SomeLibrary',
    type: 'library',
    birth: 1861,
    tags: ['SomeLibrary', 'libraries', 'some other tag']
  },
  {
    _id: 456,
    name: 'Some Language',
    type: 'language',
    birth: 1860,
    tags: ['Some Language', 'languages', 'some other tag']
  },
  {
    _id: 789,
    name: 'something-else',
    type: 'other',
    birth: 1999,
    tags: ['something-else', 'some tag']
  }
];

describe('A Timeline component', () => {
  beforeEach(() => {
    render(<MemoryRouter>
      <Timeline items={mockItemsArray} />
    </MemoryRouter>);
  });

  test('renders a timeline as a list', () => {
    expect(screen.getAllByRole('list')[0]).toHaveClass('Timeline');
  });

  test('renders a list of languages', () => {
    const timeline = screen.getAllByRole('list')[0];
    const languages = timeline.children;
    expect(languages.length).toBe(mockItemsArray.length);
    mockItemsArray.forEach((item, i) => {
      expect(languages[i]).toHaveClass('TimelineItem');
      expect(languages[i].textContent).toContain(item.name);
      expect(languages[i].textContent).toContain(item.birth.toString());
      expect(languages[i]).toHaveClass((i % 2) ? 'left' : 'right');
    });
  });
});
