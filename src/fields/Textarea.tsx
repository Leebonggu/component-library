import { ComponentPropsWithoutRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useFieldContext } from './FieldContext';
import { StyledTextarea } from './Fileds.styles';

export interface TextareaProps extends ComponentPropsWithoutRef<'textarea'> {
  isResizable?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable = true, ...props }, ref) => {
    const id = useFieldContext();
    return (
      <StyledTextarea ref={ref} id={id} isResizable={isResizable} {...props} />
    );
  },
);

Textarea.displayName = 'Field.Textarea';
Textarea.propTypes = {
  isResizable: PropTypes.bool,
};
