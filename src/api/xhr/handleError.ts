import handleToast from '@utils/handleToast';

const handleError = (err: unknown) => {
  console.log(err);
  handleToast({ variant: 'error', message: '클라이언트 에러가 발생했습니다.' });
};

export default handleError;
