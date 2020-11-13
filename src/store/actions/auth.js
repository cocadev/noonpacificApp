import { AUTH_SET_USER, AUTH_REMOVE_USER, AUTH_SET_MODAL, AUTH_REMOVE_MODAL } from "./actionTypes";

export const login = () => {
    return {
        type: AUTH_SET_USER
    };
};

export const logout = () => {
    return {
        type: AUTH_REMOVE_USER
    };
};


export const modalOpen = () => {
    return {
        type: AUTH_SET_MODAL
    };
};

export const modalRemove = () => {
    return {
        type: AUTH_REMOVE_MODAL
    };
};