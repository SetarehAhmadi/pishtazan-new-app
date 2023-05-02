import Cookies from "universal-cookie";

export const login = (token: string) => {
	let cookie = new Cookies();
	cookie.set("token", token, {
		path: "/",
		maxAge: 24 * 24 * 3600,
	});
};

export const logout = () => {
	let cookie = new Cookies();
	cookie.remove("token");
};
