import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterForm from './FilterForm';

describe('A FilterForm component', () => {
  const mockTags = [
    'SomeLanguage',
    'OOP',
    'arrays',
    'assignment operator',
    'some other tag',
    'BNF'
  ];

  beforeEach(() => {
    render(<FilterForm
        tags={mockTags}
        topic=''
        updateTopic={() => {}}
        updateTimeline={() => {}}
        fullPage={true}
      />);
  });

  it('renders a form, when in full-page', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders a form, when not in full-page', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
