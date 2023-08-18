import { PropsWithChildren } from 'react';
import { useUniqueId } from '../hooks';
import { FieldContext } from './FieldContext';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';

export interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}

export const Field: React.FC<PropsWithChildren> & FieldComposition = ({
  children,
}) => {
  const id = useUniqueId();

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;
