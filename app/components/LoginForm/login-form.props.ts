export interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  submitButtonText: string;
}
