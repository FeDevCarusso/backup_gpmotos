import { GET_ALL_REPUESTOS } from "./actions"

const initialState = {
    repuestos: [],

}

export default function rootReducer(state=initialState, {type,payload}) {
    switch (type) {
        case GET_ALL_REPUESTOS:
        return {
            ...state,
            repuestos: typeof payload === "string"? [payload]:payload
        }
        default:
            return state
    }
}