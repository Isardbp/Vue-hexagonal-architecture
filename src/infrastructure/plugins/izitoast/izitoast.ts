import { AxiosError } from "axios";
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

export const showError = (error: AxiosError): any => iziToast.error({
    title: error.code,
    message: error.message,
    position: 'topRight',
});