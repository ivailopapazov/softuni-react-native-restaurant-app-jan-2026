import api from "./api";

export function getAll() {
    return api.get('/meals');
}

export function getOne(mealId) {
    if (!mealId) {
        throw new Error('No ID provided!');
    }

    return api.get(`/meals/${mealId}`);
}

export function getAllByCategoryId(categoryId) {
    if (!categoryId) {
        throw new Error('No Category provided!');
    }

    return api.get(`/meals?categoryId=${categoryId}`);
}

export function getFeatured() {
    return api.get('/meals?featured=true');
}

