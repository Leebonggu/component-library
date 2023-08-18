import React from 'react';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useFieldContext } from './FieldContext';
import { StyledInput } from './Fileds.styles';

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useFieldContext();
  return <StyledInput ref={ref} id={id} {...props} />;
});

Input.displayName = 'Field.Input';
