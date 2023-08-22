const request = require("request");

interface RequestOptions {
    url: string;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    headers?: { [key: string]: string };
    body?: any;
}

export class HttpRequestUtility {
    static sendRequest(options: RequestOptions): Promise<any> {
      return new Promise((resolve, reject) => {
        request(
          {
            url: options.url,
            method: options.method || "GET",
            headers: options.headers,
            body: options.body,
            json: true, // Automatically parses the response body as JSON
          },
          (error:any, response:any, body:any) => {
            if (error) {
              reject(error);
            } else {
              resolve(body);
            }
          }
        );
      });
    }
}
