import axios from "axios";

export const token = 'd5403774822a4e22be1b215ce2f7e78e';

export const rawg = axios.create({
    baseURL: 'https://api.rawg.io/api'
});