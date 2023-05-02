import { ReactNode, useContext } from "react";
import { useRouter } from "next/router";

import AppContext from "@/context";

import Loading from "@/components/common/loading";
import NotAccess from "@/components/common/notAccess";

interface Props {
	children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
	const router = useRouter();
	// authenticating
	const { user, error, isLoading }: any = useContext(AppContext);
	if (isLoading) return <Loading />;
	if (error) return <h1>services has error !</h1>;
	if (user?.isAdmin !== true) {
		router.push("/");
		return <NotAccess />;
	}
	return (
		<>
			<div className="bg-slate-500">{children}</div>
		</>
	);
};

export default AdminLayout;
