import styled from  'styled-components'
import { COLORS } from '../../constants/colors'

export const Card = styled.div`
    cursor: pointer;
    background-color: ${COLORS.darkWhite};
    margin: 2.5rem;
    padding: 1.2rem;
    display: flex;
    flex-flow: column;
    border-radius: 0.5rem;
    max-width: 16rem;

    h2{
        margin: 1rem 0rem;
        font-size: 1.5rem;
    }

    h3{
        line-height: 1.45em;
        color: #666;
        font-size: 1rem;
    }
`

export const CardImage = styled.div`
    width: 14rem;
    text-align: center;

    img{
        width: 100%;
        border-radius: 0.2em;
    }
`