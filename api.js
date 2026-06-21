let API_KEY = null;

export function setApiKey(key) {
    API_KEY = key;
}

export async function torn(endpoint) {
    const url = `https://api.torn.com/${endpoint}&key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) throw new Error(data.error.error);

    return data;
}
