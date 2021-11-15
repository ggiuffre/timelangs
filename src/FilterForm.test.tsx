import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FilterForm from './FilterForm';

const mockTags = [
    'SomeLanguage',
    'OOP',
    'arrays',
    'assignment operator',
    'some other tag',
    'BNF'
  ];

const renderForm = ({ fullPage }: { fullPage: boolean; }) => render(
  <MemoryRouter>
    <FilterForm
      tags={mockTags}
      topic=''
      updateTopic={() => {}}
      updateTimeline={() => {}}
      fullPage={fullPage}
    />
  </MemoryRouter>
);

describe('A FilterForm component', () => {
  describe('in full-page mode', () => {
    beforeEach(() => renderForm({ fullPage: true }));

    it('renders a form', () => {
      expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('renders a search bar', () => {
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders a button to update the timeline', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('not in full-page mode', () => {
    beforeEach(() => renderForm({ fullPage: false }));

    it('renders a form', () => {
      expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('renders a search bar', () => {
      expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders a button to update the timeline', () => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });
});
