import { Card, CardImage } from './Styles'
import { useNavigate } from "react-router-dom";
import { goToDetailsPlaylistPage } from '../../routes/Coordinator';
import { urlImage } from '../../constants/urls'

export const CardPlaylist = (props) => {
    
    const navigate = useNavigate()

    const goPlaylistDetails = () => {
        goToDetailsPlaylistPage(navigate, props.infoPlaylist._id)
    }
    
    return(
        <Card onClick={goPlaylistDetails}>
            <CardImage>
                <img src={urlImage} alt="Icon" />
            </CardImage>
            <h2><b>{props.infoPlaylist._name}</b></h2>
            <h3>{props.infoPlaylist._description}</h3>
        </Card>
    )
}