import { RootState } from "../../Store/store";

export const variantsSelector = (state: RootState) => state.variants.value;