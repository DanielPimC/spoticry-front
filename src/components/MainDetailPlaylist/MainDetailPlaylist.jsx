import { urlImage } from '../../constants/urls'
import { ContainerTitle, ContainerNavBar, PlayButton } from './Styles'
import { ListSong } from '../ListSong/ListSong'
import React, { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";
import { getPlaylistById } from "../../services/playlist"

export const MainDetailPlaylist = (props) => {
    const [playlist, setPlaylist] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchPlaylistsById()
    }, []);

    const fetchPlaylistsById = async () => {
        try {
            const response = await getPlaylistById(props.playlistId.playlistId)
            setPlaylist(response.data.playlist)
            setIsLoading(false)
        } catch (error) {
            console.error("Erro ao buscar playlists:", error)
        }
    }

    return (
        <>
            {!isLoading ?
                <>
                    <ContainerTitle>
                        <div>
                            <img src={urlImage} alt="icon-playlist" />
                        </div>
                        <div>
                            <p>Playlist</p>
                            {!props.playlistId.playlistId ?
                                <h1>My Playlist</h1>
                                : <h1>{playlist._name}</h1>
                            }
                            {!props.playlistId.playlistId ?
                                <h1></h1>
                                : <p>{playlist._description}</p>
                            }
                        </div>
                    </ContainerTitle>
                    <ContainerNavBar>
                        <div>
                            <PlayButton>Play</PlayButton>
                            <button>Download</button>
                            <button>Mais</button>
                        </div>
                        <div>
                            <input type="text" placeholder="Pesquisa" />
                        </div>
                    </ContainerNavBar>
                    <ListSong 
                        playlistSongs={playlist._songs} 
                    />
                </>
                : <Loading />}
        </>
    )
}