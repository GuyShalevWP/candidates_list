export type FormDataType = {
  formData: FormData;
  newErrors: Record<string, string>;
};
export type ValidateInputsType = {
  regex?: RegExp;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  experience: string;
  newErrors: Record<string, string>;
};