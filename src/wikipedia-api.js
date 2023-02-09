import axios from "axios";

export default async function searchTerm(term) {
    const result = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: term
        }
    });
    return result.data.query.search;
}