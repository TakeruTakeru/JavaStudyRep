import { Exception } from "handlebars";

class HttpClient {
  static _name;
  static URL = {
    local: "http://localhost:8080",
    wf: "http://api.github.com"
  };

  static option = {
    mode: "cors"
  };

  static parse(res) {
    return JSON.stringify(res);
  }
}

class LocalhostClient extends HttpClient {
  static _name = "Localhost Adapter";

  static async get(endpoint) {
    const result = await fetch(`${this.URL.local}/${endpoint}`).then(res => {
      return res.json();
    });
    return result;
  }
}

class GithubClient extends HttpClient {
  static _name = "Github Adapter";

  static async get(endpoint) {
    const result = await fetch(`${this.URL.wf}/${endpoint}`, {
      mode: "cors"
    }).then(res => {
      return res.json();
    });
    return result;
  }

  static parse(res, idx) {
    try {
      return `${idx} > command: <${res.cmd}> result: ${super.parse(
        res.response
      )}`;
    } catch (error) {
      return "Internal ServerError";
    }
  }
}

export { LocalhostClient as LocalAdapter, GithubClient as GithubAdapter };
