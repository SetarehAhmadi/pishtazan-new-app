import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import { Auth } from "@/contracts/types";
import useAuth from "@/hooks/useAuth";
import AppContext from "./index";

type Props = {
	children: ReactNode;
};

const ApplicationContext = ({ children }: Props) => {
	const { user ,error, isLoading }: Auth = useAuth();
	return (
		<AppContext.Provider value={{ user ,error, isLoading  }}>
			{children}
			<ToastContainer
				{...{
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnFocusLoss: true,
					draggable: true,
					pauseOnHover: true,
					position: "top-center",
					rtl: false,
				}}
			/>
		</AppContext.Provider>
	);
};

export default ApplicationContext;
