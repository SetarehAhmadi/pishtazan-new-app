import callApi from "@/service";

export const getCharacters = async (pageNum = 1) => {
	return await callApi()
		.post("/", {
			query: `
      {
        characters(page: ${pageNum} ) {
          info {
            count
            pages
          }
          results {
            name
            image
            status
            id
            species
            type
            gender
          }
        }
      }
        `,
		})
		.then((res) => res?.data?.data)
		.catch((error) => error);
};

export const getCharacterByName = async (pageNum = 1, name = "rick") => {
	return await callApi()
		.post("/", {
			query: `
      {
        characters(page: ${pageNum} , filter: { name : "${name}" } ) {
          info {
            count
            pages
          }
          results {
            name
            image
            status
            id
            species
            type
            gender
          }
        }
      }
        `,
		})
		.then((res) => res?.data?.data?.characters)
		.catch((error) => error);
};
