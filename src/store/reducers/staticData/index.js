import {staticDataFuncs} from "../../../api";

const initialState = {
    name: '',
    totalValue: '',
    allPlays: []
};

const staticData = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_NAME": {
            return {
                ...state,
                name: action.data,
            };
        }
        case "SAVE_TOTAL_VALUE": {
            return {
                ...state,
                totalValue: action.data,
            };
        }
        case "SAVE_ALL_PLAYS": {
            return {
                ...state,
                allPlays: [...state.allPlays, action.data],
            };
        }
        default:
            return state
    }
};

export const setSaveName = (data) => ({type: "SAVE_NAME", data});
export const setSaveTotalValue = (data) => ({type: "SAVE_TOTAL_VALUE", data});
export const setSaveAllPlays = (data) => ({type: "SAVE_ALL_PLAYS", data});

export const saveName = (data) => (dispatch) => {
    // staticDataFuncs.saveName(data)
    // .then((response) => {
    //     dispatch(setSaveName({data: response.data}))
    // })
    dispatch(setSaveName(data))
};
export const saveTotalValue = (data) => (dispatch) => {
    // staticDataFuncs.saveName(data)
    // .then((response) => {
    //     dispatch(setSaveName({data: response.data}))
    // })
    dispatch(setSaveTotalValue(data))
};
export const saveAllPlays = (data) => (dispatch) => {
    // staticDataFuncs.saveName(data)
    // .then((response) => {
    //     dispatch(setSaveName({data: response.data}))
    // })
    dispatch(setSaveAllPlays(data))
};

export default staticData