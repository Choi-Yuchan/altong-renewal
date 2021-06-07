<<<<<<< HEAD

let temp;
describe("simple test", () => {
  beforeEach(() => {
    temp = 1;
  });
  
  afterEach(() => {
    temp = 0;
  });
  
  test('1 is 1', () => {
    expect(1).toBe(1);
  });
  
})
=======
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
>>>>>>> origin/release
