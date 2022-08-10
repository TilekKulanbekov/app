import axios from "axios";

// export const instance = axios.create({
//     baseURL: `http://jservice.io/api/clues/`,
//     headers: {
//         Authorization: `Token ${localStorage?.token}`,
//     },
// });

export const instanceNotAuthorized = axios.create({
    baseURL: `http://jservice.io/`,
});

export const jService = {
    getQuestions() {
        return instanceNotAuthorized
            .get(`api/clues`)
            .then((response) => {
                return response;
            })
    },
};

export const staticDataFuncs = {
    saveName(data) {
        return console.log(data)
    }
};