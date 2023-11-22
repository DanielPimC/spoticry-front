import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import { getTokenData } from "./getTokenData";

export const getPlaylistsFromUser = () => {
    const token = localStorage.getItem("token")
    const userId = getTokenData(token).id
    // .get(`${BASE_URL}user/${userId}/playlists`, {
        return axios.get(`${BASE_URL}playlist`, {
            headers: {
                Authorization: token,
            },
        });
};

export const getAllPlaylists = () => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}playlist`, {
            headers: {
                Authorization: token,
            },
        });   
}

export const getPlaylistById = (playlistId) => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}playlist/${playlistId}`, {
            headers: {
                Authorization: token,
            }
        });   
}

export const createPlaylist = (playlist) => {
    const token = localStorage.getItem("token")
    const userId = getTokenData(token).id
        return axios.post(`${BASE_URL}playlist`, {
            headers: {
                Authorization: token,
            },
            body: {
                userId: userId,
                songs: '',
                description: playlist.description,
                name: playlist.name
            }
        })
}
