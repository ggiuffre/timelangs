import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterForm from './FilterForm';

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

beforeEach(() => {
  jest.mock('./languages.json', () =>
    mockItemsArray
  );
});



describe('A FilterForm component', () => {
  const types = {
    languages: 'yup',
    libraries: 'yup',
    softwares: 'yup'
  };

  it('renders a form, when in full-page', () => {
    render(<FilterForm
        topic=''
        types={types}
        updateTopic={() => {}}
        updateTypes={() => {}}
        updateTimeline={() => {}}
        fullPage={true}
      />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders a form, when not in full-page', () => {
    render(<FilterForm
        topic=''
        types={types}
        updateTopic={() => {}}
        updateTypes={() => {}}
        updateTimeline={() => {}}
        fullPage={false}
      />);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
