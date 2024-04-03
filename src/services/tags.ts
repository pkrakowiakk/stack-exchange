import { TagsParameters } from "../interfaces";
import httpClient from "./http-client";

export const getTags = (parameters: TagsParameters): Promise<Response> => {
  const baseApiUrlAddress: string = "https://api.stackexchange.com";
  const apiVersion: number = 2.3;

  const baseUrl: string = `${baseApiUrlAddress}/${apiVersion}/`
  const queryUrl: string = `tags?page=${parameters.page}&pagesize=${parameters.pageSize}&order=${parameters.order}&sort=${parameters.sort}&site=stackoverflow`;

  return httpClient.get(`${baseUrl}${queryUrl}`);
}