import { HttpRequestUtility } from "./utils"

export interface BinlookupOptions {
    key?: string;
    url?: string;
}

class Binlookup {
    private config: BinlookupOptions = {
        key: '',
        url: 'https://lookup.binlist.net/'
    }

    constructor(opts: string | BinlookupOptions = '') {
        this.setConfig(opts);
    }

    public setConfig(config: string | BinlookupOptions = '') {
        if (typeof config === 'string') {
            this.config.key = config;
        } else {
            this.config.key = config.key;
            this.config.url = config.url;
        }
    }

    public async lookup(bin: string): Promise<any> {
        const headers: { [key: string]: string } = {
            'Accept-Version': '3',
            'Content-Type': 'application/json',
            'X-Client': 'Node.js 2.0.1',
        };

        if (this.config.key) {
            headers['Authorization'] = `Basic ${Buffer.from(`${this.config.key}:`).toString('base64')}`;
        }

        try {
            const response = await HttpRequestUtility.sendRequest({
                url: this.config.url + bin,
                headers: headers
            })
            return response
        } catch (err) {
            throw err;
        }
    }

}

export default Binlookup;
