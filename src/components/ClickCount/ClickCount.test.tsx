import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import ClickCount from "./ClickCount";


test('ClickCount component', () => {
  render(<Provider store={store}>
    <ClickCount />
  </Provider>)
  const linkButton = screen.getByText(/click me/i)
  expect(linkButton).toBeInTheDocument()
})