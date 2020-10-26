const BASE_URL = `https://picsum.photos/v2`;

export async function getList(page = 1) {
    const res = await fetch(`${BASE_URL}/list?page=${page}`);

    const data = await res.json();

    return data;
}

export async function formatPhotoUri(id, width, height) {
    return `https://picsum.photos/id/${id}/${Math.floor(width)}/${Math.floor(height)}`
}