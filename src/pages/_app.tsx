import { Provider } from "react-redux";
import "@/assets/styles/ReactToastify.min.css";
import "@/assets/styles/globals.css";
import { AppPropsWithLayout } from "@/contracts/types";
import { store } from "@/store";
import ApplicationContext from "@/context/AppContext";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	// getLayout
	const getLayout = Component.getLayout ?? ((page) => page);
	// return
	return (
		<Provider store={store}>
			<ApplicationContext>{getLayout(<Component {...pageProps} />)}</ApplicationContext>
		</Provider>
	);
};

export default App;
