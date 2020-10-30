import ShopActionsTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
}); 

export const fetchCollectionsSucces = collectionsMap => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCES,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});


