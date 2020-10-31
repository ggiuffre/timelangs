import React from 'react';
import { render, screen } from '@testing-library/react';
import TimelineItem from './TimelineItem';

const mockItem = {
  _id: 123,
  name: 'SomeLanguage',
  birth: 1861,
  tags: ['SomeLanguage', 'some-tag', 'some other tag']
};

describe('', () => {
  beforeEach(() => {
    render(<TimelineItem
        name={mockItem.name}
        birth={mockItem.birth}
        tags={mockItem.tags}
        side='left'
      />);
  });

  test('renders a TimelineItem', () => {
    const timelineItem = screen.getAllByRole('listitem')[0];
    expect(timelineItem).toHaveClass('TimelineItem');
  });

  test('displays the name of a programming language', () => {
    const timelineItem = screen.getAllByRole('listitem')[0];
    expect(timelineItem.textContent).toMatch(mockItem.name);
  });

  test('displays the year of birth of a programming language', () => {
    const timelineItem = screen.getAllByRole('listitem')[0];
    expect(timelineItem.textContent).toMatch(mockItem.birth.toString());
  });

  test('displays tags related to a programming language', () => {
    const timelineItem = screen.getAllByRole('listitem')[0];
    mockItem.tags.forEach(tag => {
      expect(timelineItem.textContent).toMatch(tag);
    });
  });

  test('contains a list of tags', () => {
    const tags = screen.getByRole('list').children;
    expect(tags.length).toBe(mockItem.tags.length);
    mockItem.tags.forEach((item, i) => {
      expect(tags[i].textContent).toContain(item);
    });
  });
});

// test('has no visible tags until clicked or hovered', () => {
//   render(<TimelineItem
//     name={mockItem.name}
//     birth={mockItem.birth}
//     tags={mockItem.tags}
//     side='left'
//     />);

//   const tagsList = screen.getByRole('list');
//   expect(tagsList).not.toBeVisible();
// });

// test('has visible tags when clicked', async () => {
//   render(<TimelineItem
//     name={mockItem.name}
//     birth={mockItem.birth}
//     tags={mockItem.tags}
//     side='left'
//     />);
//   const TimelineItem = screen.getAllByRole('listitem')[0];

//   fireEvent.click(TimelineItem);
//   await waitFor(() => screen.getByRole('list'));

//   const tagsList = screen.getByRole('list');
//   expect(tagsList).toBeVisible();
// });
