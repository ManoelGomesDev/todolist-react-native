import {Container, Number} from './styles'


type Props = {
    amountTask: number
}

export function CountNumber({amountTask}: Props){
    return (
        <Container>
            <Number>{amountTask}</Number>
        </Container>
    )
}