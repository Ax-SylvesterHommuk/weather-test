import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { createMockServer } from './createMockServer';

describe('Weather Application tests', () => {
  let server;
  beforeEach(() => {
    server = createMockServer();
  });
  afterEach(() => {
    server.shutdown();
  });

  it('render weather application title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Weather Application/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('shows city search results details', async () => {
    render(<App />);
    
    const input = screen.getByTestId('search-input')
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button')
    userEvent.click(button)

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5))
    expect(screen.getByText(/Melbourne, -37.8141705, 144.9655616/i)).toBeInTheDocument()
  });

  it('add search results to my weather list', async () => {
    render(<App />);
    
    const input = screen.getByTestId('search-input')
    userEvent.type(input, 'Melbourne');

    const button = screen.getByTestId('search-button')
    userEvent.click(button)

    await waitFor(() => expect(screen.getAllByText(/Melbourne/i).length).toEqual(5))

    const selected = screen.getAllByText(/Melbourne/i)[3]
    act(() => {
      userEvent.click(selected)
    })

    expect(within(screen.getByTestId('my-weather-details')).getByText(/Melbourne/i)).
    toBeInTheDocument()
  });
});
