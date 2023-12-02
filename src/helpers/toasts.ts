
import { toast } from 'react-toastify';

export const successToast = () => {
  toast.success('Usuário encontrado com sucesso.', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

  export const errorToast = () => {
    toast.error('Usuário não encontrado, tente novamente.', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
}

