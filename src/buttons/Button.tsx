import React from 'react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
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

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isFullWidth: PropTypes.bool,
};

Button.displayName = 'Button';
