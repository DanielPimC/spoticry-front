import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getAllSong } from "../../services/songs"
import { CardSongs } from "../CardSongs/CardSongs";
import { ContainerList, ContainerMain } from './Styles'
import { Loading } from "../Loading/Loading";

export const MainSongs = () => {
    const [songs, setSongs] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
      fetchSongs();
    }, []);
  
    const fetchSongs = async () => {
      try {
        const response = await getAllSong();
        console.log(response.data.songs)
        setSongs(response.data.songs);
        setLoading(false)
      } catch (error) {
        console.error("Erro ao buscar músicas:", error);
      }
    };  

    /*
    const goCreateNewSong = () => {
        goToCreateSongPage(navigate) 
    }*/

    return(
        <ContainerMain>
            {!isLoading ? 
                <>
                    {/*<SectionCreateNew
                        title="Playlists"
                        functionCreate={goCreateNewPlaylist}
                    />*/}
                    <ContainerList>
                        {Array.isArray(songs) &&
                            songs.map((song) => (
                                <CardSongs
                                    key={song._title}
                                    infoSong={song}
                                />
                            ))
                        }
                    </ContainerList>
                </>
             : <Loading/>}
        </ContainerMain>

    )
}