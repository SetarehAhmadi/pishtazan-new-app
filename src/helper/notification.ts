import { toast, ToastOptions } from "react-toastify";

export const notificationMaker = (message: string = "", options?: object) => {
	const toastOptions: ToastOptions = {
		...options,
	};
	return toast(message, toastOptions);
};
