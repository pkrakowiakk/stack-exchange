import axios, { AxiosInstance } from "axios";

class HttpClient {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create(); 
  }

  get(url: string): Promise<Response> {
    return this.client.get(url)
  }
}

const httpClient = new HttpClient()
export default httpClient;