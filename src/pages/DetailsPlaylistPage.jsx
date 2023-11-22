
import { useParams } from "react-router-dom"
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { MainDetailPlaylist } from '../components/MainDetailPlaylist/MainDetailPlaylist'
 
export const DetailsPlaylistPage = () => {

    const pathParams = useParams()
    console.log(pathParams)

    return(
        <>
            <Header/>
            <MainDetailPlaylist
                playlistId={pathParams}
            />
        </>
    )
}