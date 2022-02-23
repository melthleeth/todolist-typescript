import { Task } from "../models/task";

export function HTTP_METHOD(method: string, data?: Task) {
  if (method === "POST")
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  else if (method === "PUT")
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    };
  else if (method === "DELETE")
    return {
      method: "DELETE",
    };
}
