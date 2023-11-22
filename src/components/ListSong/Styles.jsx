import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const ContainerTable = styled.div`
    margin: 1vw;
`

export const TableListSong = styled.table`
    width: 100%;
    padding: 1vw;
    background-color: ${COLORS.darkWhite};
    border-radius: 0.5rem;
`

export const Title = styled.th`
    width: ${props => props.index ? "2vw" : "30vw"};
    text-align: start;
    
    p{
        font-weight: bold;
    }
`

export const LineTitle = styled.td`
    display: flex;
    align-items: center;

    p{
        margin: 0vw 0.5vw;
    }
`