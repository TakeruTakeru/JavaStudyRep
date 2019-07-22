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

  static parse(res) {
    const cmd = res.cmd;
    delete res["cmd"];
    return `command: <${cmd}> result: ${super.parse(res)}`;
  }
}

export { LocalhostClient as LocalAdapter, GithubClient as GithubAdapter };
