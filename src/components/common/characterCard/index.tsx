import Link from "next/link";
import Spin from "../spin";

export default function CharacterCard({ characters = [], isLoading = true }) {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="sr-only">Characters</h2>

				<div className="grid grid-cols-1 text-center gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					{isLoading ? (
						<Spin />
					) : (
						<>
							{characters.map((item: any) => (
								<div key={item.id}>
									<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
										<Link href={`/character/${item.name}`}>
											<img
												src={item.image}
												alt={item.name}
												loading="lazy"
												className="h-full w-full object-cover object-center group-hover:opacity-75"
											/>
										</Link>
									</div>
									<h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
									<p className="mt-1 text-lg font-medium text-gray-900">{item.status}</p>
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
