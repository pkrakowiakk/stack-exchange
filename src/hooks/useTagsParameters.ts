import { create } from "zustand"

import { TagsOrder, TagsParameters, TagsSort } from "../interfaces";
import { TagsParametersStore } from "./interfaces";

const defaultTagsParameters: TagsParameters = {
  page: 1,
  pageSize: 10,
  order: "desc",
  sort: "popular"
}

const useTagsParameters = create<TagsParametersStore>((set) => ({
  parameters: defaultTagsParameters,
  setPage: (pageNumber: number): void => set((state) => ({
    parameters: { ...state.parameters, page: pageNumber }
  })),
  setPageSize: (pageSize: string): void => set((state) => ({
    parameters: { ...state.parameters, pageSize: Number(pageSize) }
  })),
  setOrder: (order: TagsOrder): void => set((state) => ({
    parameters: { ...state.parameters, order: order } })),
  setSort: (sort: TagsSort): void => set((state) => ({
    parameters: { ...state.parameters, sort: sort }
  }))
}));

export default useTagsParameters;