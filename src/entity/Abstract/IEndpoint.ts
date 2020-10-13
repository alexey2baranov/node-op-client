export interface IEndpoint {
  href: string,
  method?: "GET" | "POST" | "PATCH" | "DELETE",
  title?: string,
  type?: string,
  templated?: boolean,
}
