import { Container } from "./styles";
import disk from "../../assets/disk.png"
import { useNavigate } from "react-router-dom";
import { calcSpace } from "../../helpers/functions";

type Props = {
    id?: number
    name?: string
    index?: number
    size?: number
    display: string
    removeItem?: (id: number) => void
}

export function Contigua({ name, size, removeItem, id, display }: Props) {

    const navigate = useNavigate()

    return (
        <Container display={display}>
                <div className="buttonTrash">
                    <i className="uil uil-trash-alt" />
                </div>

                <div className="content" onClick={()=> navigate('/contigua')}>
                    <h1>{name}</h1>
                    <hr />
                    <p>Disco {}% ultilizado</p>
                    <img src={disk} alt="disk" />
                </div>
        </Container>
    )
}


