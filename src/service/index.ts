import axios from "axios";

const callApi = () => {

	
	const axiosInstance = axios.create({
		baseURL: "https://rickandmortyapi.com/graphql",
	});


	axiosInstance.interceptors.request.use(
		(config) => {
			return config;
		},
		(err) => Promise.reject(err),
	);


	axiosInstance.interceptors.response.use(
		(res) => {
			return res;
		},
		(err) => {
			const res = err?.response;
			if (res) {
				throw res;
			}
			Promise.reject(err);
		},
	);

	return axiosInstance;
};

export default callApi;
