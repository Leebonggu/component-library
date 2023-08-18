import { createContext, useContext } from 'react';

const FieldContext = createContext<string | undefined>(undefined);

const useFieldContext = () => {
  const context = useContext(FieldContext);

  if (context === undefined) {
    throw new Error('useFieldContext must be used within a FieldContext');
  }

  return context;
};

export { FieldContext, useFieldContext };
