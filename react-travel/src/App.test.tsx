<<<<<<< HEAD
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(<App />)
	const linkElement = screen.getByText(/learn react/i)
	expect(linkElement).toBeInTheDocument()
})
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1
