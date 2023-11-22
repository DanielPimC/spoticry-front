import { Section, ButtonCreate } from "./Styles"

export const SectionCreateNew = (props) => {

    return(
        <Section>
            <h1><b>{props.title}</b></h1>
            <ButtonCreate onClick={props.functionCreate}>+</ButtonCreate>
        </Section>
    )  
}