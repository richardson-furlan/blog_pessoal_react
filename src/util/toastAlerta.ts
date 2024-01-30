import { Flip, toast } from 'react-toastify';

export function toastAlerta(mensagem: string, tipo: string) {
  switch (tipo) {
    case 'sucesso':
      toast.success(mensagem, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      break;

    case 'info':
      toast.info(mensagem, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'colored',
        progress: undefined,
        transition: Flip,
      });
      break;

    case 'erro':
      toast.error(mensagem, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'colored',
        progress: undefined,
        transition: Flip,
      });
      break;

    default:
      toast.info(mensagem, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: 'colored',
        progress: undefined,
        transition: Flip,
      });
      break;
  }
}