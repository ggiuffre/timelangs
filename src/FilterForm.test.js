import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
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
  it('renders a form', () => {
    const types = {
      languages: 'yup',
      libraries: 'yup',
      softwares: 'yup'
    };
    const form = render(<FilterForm
        topic=''
        types={types}
        updateTopic={() => {}}
        updateTypes={() => {}}
        updateTimeline={() => {}}
        fullPage={true}
      />);

    expect(form.getByRole('form')).toBeInTheDocument();
    expect(form.getByRole('combobox')).toBeInTheDocument();
    expect(form.getByRole('button')).toBeInTheDocument();
  });
});
