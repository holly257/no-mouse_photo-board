import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders Photo Finder title', () => {
    const { getByText } = render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    const linkElement = getByText(/Photo Finder/i);
    expect(linkElement).toBeInTheDocument();
});
