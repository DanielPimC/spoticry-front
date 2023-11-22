import CircularProgress from '@mui/material/CircularProgress';
import { LoadingContainer } from './Styles'

export const Loading = () => {

    return(
        <LoadingContainer>
            <CircularProgress/>            
        </LoadingContainer>
    )
}