import React from 'react';
import { render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';

import App from '../client/App';

test('renders the landing page', async () => {
  await render(<App />);
  
  // expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  // expect(screen.getByRole("img")).toBeInTheDocument();
});

// describe('renders the landing page', () => )

