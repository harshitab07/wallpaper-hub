import axios from "axios";
import vars from "../data/vars";

export const getImagesUsingKeyword = async (value) => {
    try {
        const url = vars.USING_KEYWORD;
        const perPage = vars.IMAGE_PER_PAGE;
        const clientId = vars.API_KEY;
        const result = await axios.get(`${url}?query=${value}&page=1&per_page=${perPage}&client_id=${clientId}`);

        return result.data;
    } catch (err) {
        console.log(err);
    }
};

export const getRandomImages = async () => {
    try {
        const url = vars.RANDOM;
        const clientId = vars.API_KEY;
        const perPage = vars.IMAGE_PER_PAGE;
        const result = await axios.get(`${url}?page=1&per_page=${perPage}&client_id=${clientId}`);

        return result.data;
    } catch (err) {
        console.log(err);
    }
};