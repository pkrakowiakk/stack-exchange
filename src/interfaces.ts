export type TagsOrder = "desc" | "asc";
export type TagsSort = "popular" | "activity" | "name";


export interface TagsParameters {
  page: number;
  pageSize: number;
  order: TagsOrder;
  sort: TagsSort;
}

export interface TagDetails {
  collectives: unknown;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}


