export type AddCandidateProps = {
  open: boolean;
  onClose: () => void;
};

export type CandidateFormProps = {
  handleClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
};

export type FormBtnsProps = {
  handleClose: () => void;
  loading: boolean;
  success: boolean;
};