import { Card, CardImage } from './Styles'
import { useNavigate } from "react-router-dom";
import { goToDetailsPlaylistPage } from '../../routes/Coordinator';
import { urlImage } from '../../constants/urls'

export const CardSongs = (props) => {
    
    const navigate = useNavigate()

    const goPlaylistDetails = () => {
        goToDetailsPlaylistPage(navigate, props.infoPlaylist._id)
    }
    
    return(
        <Card>
            {<CardImage>
                <img src={urlImage} alt="Icon" />
            </CardImage>}
            <h2><b>{props.infoSong.title}</b></h2>
            <h3>{props.infoSong.artist}</h3>
        </Card>
    )
}