import Head from "next/head";
import { NextPageWithLayout } from "@/contracts/types";
import AdminLayout from "@/layouts/admin";

const Admin: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Admin Dashboard</title>
				<meta name="description" content="Admin Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="assets/images/favicon.ico" />
			</Head>
			<main></main>
		</>
	);
};

Admin.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Admin;
