import { TagsParameters, TagsOrder, TagsSort, TagDetails } from "../interfaces";

export interface TagsParametersStore {
  parameters: TagsParameters;
  setPage: (pageNumber: number) => void;
  setPageSize: (pageSize: string) => void;
  setOrder: (order: TagsOrder) => void;
  setSort: (sort: TagsSort) => void;
}

export interface TagsStore {
  tags: Array<TagDetails>;
  setTags: (tags: Array<TagDetails>) => void;
}