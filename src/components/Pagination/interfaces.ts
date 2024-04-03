import { TagsOrder, TagsSort } from "../../interfaces";

export interface TagsConfigurationOptions {
  label: string
  value: TagsOrder | TagsSort | number;
}
