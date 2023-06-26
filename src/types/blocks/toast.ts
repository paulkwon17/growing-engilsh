import { ToastVariant } from '@type/atoms';

export interface ShowToastProps {
  variant: ToastVariant;
  message?: string;
  description?: string;
  closeButtonText?: string;
}
