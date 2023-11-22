import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getSongById = (songId) => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}song/${songId}`, {
            headers: {
                Authorization: token,
            }
        });   
}

export const getAllSong = () => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}song`, {
            headers: {
                Authorization: token,
            }
        }); 
}