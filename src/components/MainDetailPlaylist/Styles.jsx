import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const ContainerTitle = styled.div`
    display: flex;
    margin: 1vw;
    align-items: center;
    background-color: ${COLORS.darkWhite};
    padding: 1.5vw;
    border-radius: 0.5rem;

    img{
        width: 20vw;
    }

    h1, p{
        font-size: 4vw;
        margin: 1.4vh
    }

    p{
        font-size: 1vw;
    }
`

export const ContainerNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 1vw;
`

export const PlayButton = styled.button`
    /* cursor: pointer;
    width: 2.5rem;
    background-color: ${COLORS.darkYellow};
    border: none;
    border-radius: 100%;
    font-size: 2rem; */
`
