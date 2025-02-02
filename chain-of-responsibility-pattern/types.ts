export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  headers: Record<string, string>;
  ip: string;
  body?: string;
};

export type HttpResponse = {
  status: number;
  body: string;
};

// Handler Interface
export interface MiddlewareHandler {
  process(req: HttpRequest, res: HttpResponse, next: () => void): void;
}
