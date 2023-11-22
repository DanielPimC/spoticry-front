import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getAllPlaylists } from "../../services/playlist"
import { CardPlaylist } from "../CardPlaylist/CardPlaylist";
import { ContainerList, ContainerMain } from './Styles'
import { SectionCreateNew } from "../SectionCreateNew/SectionCreateNew";
import { goToCreatePlaylistPage } from '../../routes/Coordinator'
import { Loading } from "../Loading/Loading";

export const MainPlaylists = () => {
    const [playlists, setPlaylists] = useState([]);
    const [isLoading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
      fetchPlaylists();
    }, []);
  
    const fetchPlaylists = async () => {
      try {
        const response = await getAllPlaylists();
        console.log(response.data.playlists)
        setPlaylists(response.data.playlists);
        setLoading(false)
      } catch (error) {
        console.error("Erro ao buscar playlists:", error);
      }
    };  

    const goCreateNewPlaylist = () => {
        goToCreatePlaylistPage(navigate)
        
    }

    return(
        <ContainerMain>
            {!isLoading ? 
                <>
                    <SectionCreateNew
                        title="Playlists"
                        functionCreate={goCreateNewPlaylist}
                    />
                    <ContainerList>
                        {Array.isArray(playlists) &&
                            playlists.map((playlist) => (
                                <CardPlaylist
                                    key={playlist._name}
                                    infoPlaylist={playlist}
                                />
                            ))
                        }
                    </ContainerList>
                </>
             : <Loading/>}
        </ContainerMain>

    )
}