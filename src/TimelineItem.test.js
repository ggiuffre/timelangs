import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import TimelineItem from './TimelineItem';

const mockItem = {
  _id: 123,
  name: 'SomeLanguage',
  birth: 1861,
  tags: ['SomeLanguage', 'some-tag', 'some other tag']
};

describe('', () => {
  const { getAllByRole, getByRole } = render(<TimelineItem
    name={mockItem.name}
    birth={mockItem.birth}
    tags={mockItem.tags}
    side="left"
    />);
  const timelineItem = getAllByRole('listitem')[0];

  test('renders a TimelineItem', () => {
    expect(timelineItem).toHaveClass('TimelineItem');
  });

  test('has known content', () => {
    expect(timelineItem.textContent).toMatch(mockItem.name);
    expect(timelineItem.textContent).toMatch(mockItem.birth.toString());
    mockItem.tags.forEach(tag => {
      expect(timelineItem.textContent).toMatch(tag);
    });
  });
});

test('contains a list of tags', () => {
  const { getAllByRole, getByRole } = render(<TimelineItem
    name={mockItem.name}
    birth={mockItem.birth}
    tags={mockItem.tags}
    side="left"
    />);

  const tagsList = getByRole('list');
  expect(tagsList).toHaveClass('tagsList');
  const tags = tagsList.children;
  expect(tags.length).toBe(mockItem.tags.length);
  mockItem.tags.forEach((item, i) => {
    expect(tags[i].textContent).toContain(item);
  });
});

// test('has no visible tags until clicked or hovered', () => {
//   const { getAllByRole, getByRole } = render(<TimelineItem
//     name={mockItem.name}
//     birth={mockItem.birth}
//     tags={mockItem.tags}
//     side="left"
//     />);

//   const tagsList = getByRole('list');
//   expect(tagsList).not.toBeVisible();
// });

// test('has visible tags when clicked', async () => {
//   const { getAllByRole, getByRole } = render(<TimelineItem
//     name={mockItem.name}
//     birth={mockItem.birth}
//     tags={mockItem.tags}
//     side="left"
//     />);
//   const TimelineItem = getAllByRole('listitem')[0];

//   fireEvent.click(TimelineItem);
//   await waitFor(() => getByRole('list'));

//   const tagsList = getByRole('list');
//   expect(tagsList).toBeVisible();
// });
