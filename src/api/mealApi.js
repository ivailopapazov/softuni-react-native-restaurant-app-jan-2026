import api from "./api";

export function getAll() {
    return api.get('/meals');
}

export function getAllByCategoryId(categoryId) {
    if (!categoryId) {
        throw new Error('No Category provided!');
    }

    return api.get(`/meals?categoryId=${categoryId}`);

}
