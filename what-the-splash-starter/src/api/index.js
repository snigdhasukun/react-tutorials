const URL = 'https://picsum.photos'

async function fetchImages(page) {
    const response = await fetch(`${URL}/v2/list?page=${page}&limit=3`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

async function fetchImageAuthor(id) {
    const response = await fetch(`${URL}/id/${id}/info`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
}

export { fetchImages, fetchImageAuthor };