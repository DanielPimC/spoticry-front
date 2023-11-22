import styled from "styled-components";
import { COLORS } from './../../constants/colors'

export const Section = styled.div`
    padding-left: 2.5rem;

    h1{
        margin: 1.5rem 0rem 0.5rem 0rem;
    }
`

export const ButtonCreate = styled.button`
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${COLORS.darkYellow};
    border: 0rem;
    border-radius: 100%;
    font-size: 2rem;
`