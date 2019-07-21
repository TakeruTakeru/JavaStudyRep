class HttpClient {
    static URL = {
        local: 'http://localhost:8080',
        wf: 'http://api.github.com'
    }

    static option = {
        mode: 'cors'
    }
}

class LocalhostClient extends HttpClient {
    static _name = 'Localhost Adapter';

    static async get(endpoint) {
        const result = await fetch(`${this.URL.local}/${endpoint}`).then(res => {
            return res.json()
        });
        return result;
    };
}

class GithubClient extends HttpClient {
    static _name = 'Github Adapter'

    static get(endpoint) {
        const result = fetch(`${this.URL.wf}/${endpoint}`, {mode: 'cors'}).then(res => {
            return res.json()
        });
        return result;
    };
}

export { LocalhostClient as LocalAdapter, GithubClient as GithubAdapter }