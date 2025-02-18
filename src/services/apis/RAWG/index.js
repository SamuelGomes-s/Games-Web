import axios from "axios";

export const tokenRawg = 'd5403774822a4e22be1b215ce2f7e78e';

export const rawgApi = axios.create({
    baseURL: 'https://api.rawg.io/api'
});