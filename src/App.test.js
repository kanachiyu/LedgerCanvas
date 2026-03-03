// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LedgerCanvas title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LedgerCanvas/i);
    expect(titleElement).toBeInTheDocument();
});
