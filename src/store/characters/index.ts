import { createSlice } from "@reduxjs/toolkit";

import { ICharacters } from "@/contracts/interfaces";

const initialState: ICharacters = {
	characters: [],
};
const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {
		setCharacters: (state, action) => {
			state.characters = action.payload.characters;
		},
		clearCharacters: (state) => {
			state.characters = [];
		},
	},
});

export const { setCharacters, clearCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
