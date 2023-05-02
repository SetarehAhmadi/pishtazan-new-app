import useSWR from "swr";
import { updateUser } from "@/store/auth";
import { useAppDispatch } from "./index";

const useAuth = () => {
	const dispatch = useAppDispatch();
	const { data, error, isLoading }: any = useSWR("user", async () => {
		return { user: { isAdmin: false } };
	});
	dispatch(updateUser(data));
	// return 
	return { user: data, error, isLoading };
};

export default useAuth;
