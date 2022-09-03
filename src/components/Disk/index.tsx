import { Container } from "./styles";
import disk from "../../assets/disk.png"
import { Link } from "react-router-dom";


type Props = {
    name: string
    index: number
}

export function Disk({name, index}: Props) {

    return (
        <Container>
            <div><i className="uil uil-trash-alt"></i></div>

            <div className="content">
                <h1>{name + ' ' + (index+1)}</h1>
                <hr />
                <p>Disco 48% utilizado</p>
                <img src={disk} alt="disk" />
            </div>

        </Container>
    )
}


