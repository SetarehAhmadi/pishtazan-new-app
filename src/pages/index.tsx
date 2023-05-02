import Head from "next/head";
import useSWR from "swr";
import { getCharacters } from "@/service/main";

import MainPage from "@/components/main";
import MainLayout from "@/layouts/main";
import { NextPageWithLayout } from "@/contracts/types";

interface IData {
	characters: object;
}

const HomePage: NextPageWithLayout = () => {
	const { data, isLoading, error } = useSWR("characters", () => getCharacters(1));
	return (
		<>
			<Head>
				<title>Rick and Morty</title>
				<meta name="description" content="Rick and Morty" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="assets/images/favicon.ico" />
			</Head>
			<main>
				<MainPage characters={data} isLoading={isLoading} error={error} />
			</main>
		</>
	);
};

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage;
