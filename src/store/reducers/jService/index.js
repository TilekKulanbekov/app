import {jService} from "../../../api";

const initialState = {
    questions: [],
};

const jsServices = (state = initialState, action) => {
    switch (action.type) {
        case "GET_QUESTIONS": {
            return {
                ...state,
                questions: action.data,
            };
        }
        default:
            return state
    }
};

export const setGetQuestions = (data) => ({type: "GET_QUESTIONS", data});

export const getQuestions = () => (dispatch) => {
    jService.getQuestions().then((response) => {
        dispatch(setGetQuestions(response.data))
    })
};

export default jsServices