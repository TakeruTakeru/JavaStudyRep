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
    static get(endpoint) {
        fetch(`${this.URL.local}/${endpoint}`).then(res => {
            return res.json()
        });
    };
}

class WeatherForecastClient extends HttpClient {

    static get(endpoint) {
        const result = fetch(`${this.URL.wf}/${endpoint}`, {mode: 'cors'}).then(res => {
            return res.json()
        });
        return result;
    };
}

export { LocalhostClient as LocalAdapter, WeatherForecastClient as WFAdapter }