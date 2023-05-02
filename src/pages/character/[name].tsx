import Head from "next/head";
import { getCharacterByName, getCharacters } from "@/service/main";

import MainLayout from "@/layouts/main";
import { NextPageWithLayout } from "@/contracts/types";
import CharacterCard from "@/components/common/characterCard";

interface IData {
	characters: any;
	name: string;
}

const HomePage: NextPageWithLayout<IData> = ({ characters, name }) => {
	return (
		<>
			<Head>
				<title>{name}</title>
				<meta name="description" content="Rick and Morty" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="assets/images/favicon.ico" />
			</Head>
			<main>
				<div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h1 className="text-4xl pb-10 font-bold tracking-tight text-gray-900 sm:text-6xl">
							{name}
						</h1>
						<CharacterCard characters={characters.results} isLoading={false} />
					</div>
				</div>
			</main>
		</>
	);
};

// getServerSideProps
export async function getServerSideProps({ params }: any) {
	const characters = await getCharacterByName(1, params.name);
	return { props: { characters, name: params.name } };
}

HomePage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default HomePage;
