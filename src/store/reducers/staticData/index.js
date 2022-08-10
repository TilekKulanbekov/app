import {staticDataFuncs} from "../../../api";

const initialState = {
    name: '',
};

const staticData = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_NAME": {
            return {
                ...state,
                name: action.data,
            };
        }
        default:
            return state
    }
};

export const setSaveName = (data) => ({type: "SAVE_NAME", data});

export const saveName = (data) => (dispatch) => {
    // staticDataFuncs.saveName(data)
    // .then((response) => {
    //     dispatch(setSaveName({data: response.data}))
    // })
    dispatch(setSaveName(data))
};

export default staticData