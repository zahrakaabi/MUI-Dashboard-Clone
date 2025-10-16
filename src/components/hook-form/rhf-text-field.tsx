/* -------------------------------------------------------------------------- */
/*                                DEPENDNECIES                                */
/* -------------------------------------------------------------------------- */
// Packages

// UI Lib Components
import { Input, Label, Textarea } from "../ui";

/* -------------------------------------------------------------------------- */
/*                          RHF YEXY FIELD COMPOENNT                          */
/* -------------------------------------------------------------------------- */
type TextFieldProps = {
  type: string;
  name: string;
  placeholder?: string;
};

function RHFTextField({type, name, placeholder}: TextFieldProps) {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="form-group grid w-full items-center gap-3">
      <Label htmlFor={name}>{name}</Label>
      <Input className="w-full" type={type} id={name} placeholder={placeholder} />
    </div>
  )
};

/* -------------------------------------------------------------------------- */
/*                           RHF TEXT AREA COMPONENT                          */
/* -------------------------------------------------------------------------- */
type TextAreaProps = {
  name?: string;
  placeholder?: string;
};

function RHFTextArea({name, placeholder}: TextAreaProps) {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="group-form  grid w-full gap-3">
      <Label htmlFor={name}>{name}</Label>
      <Textarea id={name} placeholder={placeholder} />
    </div>
  )
};

export {RHFTextField, RHFTextArea};