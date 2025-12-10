/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { Controller, useFormContext } from "react-hook-form";

// UI Lib Components
import { Checkbox, Label } from "../ui";

/* -------------------------------------------------------------------------- */
/*                                RHF CHECKBOX                                */
/* -------------------------------------------------------------------------- */
type RHFCheckboxProps = {
  name: string;
  className?: string;
  checked?: boolean;
};

function RHFCheckbox({name, className}: RHFCheckboxProps) {
/* ---------------------------------- HOOKS --------------------------------- */
  const { control } = useFormContext();

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState: { error } }) => (
        <div className={`${className} flex items-center gap-2 cursor-pointer`} 
        onClick={() => field.onChange(!field.value)}>
          <Checkbox 
            id={name} 
            className="cursor-pointer data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
            checked={!!field.value}
            onCheckedChange={field.onChange}
            onClick={e => e.stopPropagation()}
          />
          <Label className="text-sm font-normal"
          htmlFor={name} 
          onClick={e => e.stopPropagation()}>
            {name}
          </Label>
          {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
        </div>
      )}
    />
  )
};

export default RHFCheckbox;