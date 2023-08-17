import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  isFullWidth?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'secondary',
      size = 'md',
      isFullWidth = false,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        disabled={disabled}
        type="button"
        {...props}
      >
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
