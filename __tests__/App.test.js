import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
//import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';

import App from '../client/App';

// test('renders the landing page', async () => {
//   await render(<App />);
  
  // expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  // expect(screen.getByRole("img")).toBeInTheDocument();
//});

describe("Landing page", () => {
  it("should render landing page", () => {
    <Router>
    render(<App />);
    </Router>
  })
})

