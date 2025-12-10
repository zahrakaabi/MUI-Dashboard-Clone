/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { FormProvider as Form } from 'react-hook-form';
import type { UseFormReturn } from "react-hook-form";

/* -------------------------------------------------------------------------- */
/*                           FORM PROVIDER COMPONENT                          */
/* -------------------------------------------------------------------------- */
type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: (data: any) => void;
};

function FormProvider({ children, methods, onSubmit }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormProvider;