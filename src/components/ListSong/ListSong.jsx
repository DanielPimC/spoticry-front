import { getSongById } from '../../services/songs'
import { useState, useEffect } from 'react'
import { Loading } from '../Loading/Loading'
import { TableListSong, Title, LineTitle, ContainerTable } from './Styles'
import { urlImage } from '../../constants/urls'

export const ListSong = (props) => {
    const [arraySongs, setArraySongs] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getAllPlaylistSongs()
    },[])

    const getAllPlaylistSongs = async () => {
        const songsPromises = []

        for(const songId of props.playlistSongs){
            songsPromises.push(getSongById(songId))
        }

        const result = await Promise.all(songsPromises)
        const dataFromResult = result.map((res) => res.data)

        setArraySongs(dataFromResult)
        setLoading(false)
    }

    return(
        <ContainerTable>
            {!isLoading? 
                <>
                    <TableListSong>
                        <tr>
                            <Title index="true"><p>#</p></Title>
                            <Title><p>Título</p></Title>
                            <Title><p>Artista</p></Title>
                            <Title><p>URL</p></Title>
                        </tr>
                        {
                            arraySongs.map((positionArraySongs) => (
                                <tr key={positionArraySongs.song.url}>
                                    <td><p>1</p></td>
                                    <LineTitle>
                                        <img src={urlImage} alt="song-icon" width="50vw"/>
                                        <p>{positionArraySongs.song.title}</p>
                                    </LineTitle>
                                    <td><p>{positionArraySongs.song.artist}</p></td>
                                    <td><a href={positionArraySongs.song.url}>{positionArraySongs.song.url}</a></td>
                                </tr>  
                            ))
                        }
                    </TableListSong>
                </>
            : <Loading/>}
        </ContainerTable>
    )
}