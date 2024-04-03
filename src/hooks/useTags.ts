import { create } from "zustand"

import { TagDetails } from "../interfaces";
import { TagsStore } from "./interfaces";


const useTags = create<TagsStore>((set) => ({
  tags: [],
  setTags: (tags: Array<TagDetails>) => set(() => ({tags: tags}))
}));

export default useTags;