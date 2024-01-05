import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../client/components/Cards';

describe('Cards component', () => {
  it('should render the Cards component with the initial state as an empty string', () => {
    render(<Cards />);
    
    // Assuming your cards have specific attributes, you can check for their presence
    const cardElements = screen.getAllByRole('img');

    // Assuming your Card component renders some content based on the state
    cardElements.forEach((cardElement) => {
      expect(cardElement).toHaveTextContent(''); // Check if the content is an empty string
    });
  });
});