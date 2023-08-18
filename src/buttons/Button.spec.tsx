import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('applied default type of button', () => {
    const children = 'button';
    render(<Button>{children}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
  it('applied default type if proviced', () => {
    const children = 'button';
    render(<Button type="submit">{children}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });
  it('applied valid attribute to element', () => {
    const children = 'button';
    render(<Button aria-label="Test">{children}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test');
  });
});
