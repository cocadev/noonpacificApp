import { AUTH_SET_USER, AUTH_REMOVE_USER, AUTH_SET_MODAL, AUTH_REMOVE_MODAL } from "../actions/actionTypes";

const initialState = {
    logged: false,
    modal: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SET_USER:
            return {
                ...state,
                logged: true,
            };
        case AUTH_REMOVE_USER:
            return {
                ...state,
                logged: false,
            };
        case AUTH_SET_MODAL:
            return {
                ...state,
                modal: true,
            };
        case AUTH_REMOVE_MODAL:
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
};

export default reducer;
