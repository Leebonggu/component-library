import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { useFieldContext } from './FieldContext';
import { StyledLabel } from './Fileds.styles';

export const Label = forwardRef<
  HTMLLabelElement,
  ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useFieldContext();
  return <StyledLabel ref={ref} {...props} htmlFor={id} />;
});

Label.displayName = 'Field.Label';
