import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // gets an element by the text content
  expect(linkElement).toBeInTheDocument(); // checks if element is included in the document ... but if you can get it by text ... it should already be there isn't it? -- check for appearance and disappearance
});
