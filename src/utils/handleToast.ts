import { toast } from 'react-toastify';

import { ShowToastProps } from '@type/blocks';

const handleToast = (toastProps: ShowToastProps) => {
  toast[toastProps.variant](toastProps.message, { autoClose: 3000 });
};

export default handleToast;
