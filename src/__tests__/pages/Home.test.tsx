import { render, screen } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

test('renders dashboard heading', () => {
  render(<Dashboard />);
  expect(screen.getByText(/Private aviation, ground handling/i)).toBeInTheDocument();
});