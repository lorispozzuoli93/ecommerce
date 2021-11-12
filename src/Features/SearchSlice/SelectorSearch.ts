import { RootState } from "../../Store/store";

export const searchSelector = (state: RootState) => state.search.value;
