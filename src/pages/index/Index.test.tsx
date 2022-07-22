import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Index from './Index';
import store from '../../store/store';

test('renders learn react link', () => {
  render(<Provider store={store}><Index /></Provider>)
  const linkElement = screen.getByText(/index page/i)
  expect(linkElement).toBeInTheDocument()
});
