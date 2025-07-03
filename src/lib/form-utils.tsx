import { FormFieldContext } from "./form-context";
import { Controller, type ControllerProps, type FieldPath, type FieldValues } from "react-hook-form";

export function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>(
  props: ControllerProps<TFieldValues, TName>
) {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}
