import { Container } from "./styles";
import disk from "../../assets/disk.png"
import { useNavigate } from "react-router-dom";
import { calcSpace } from "../../helpers/functions";

type Props = {
    id: number
    name: string
    index: number
    size: number,
    removeItem: (id: number) => void
}

export function Disk({ name, size, removeItem, id }: Props) {

    const navigate = useNavigate()

    return (
        <Container>
                <div onClick={()=> removeItem(id)}>
                    <i className="uil uil-trash-alt" />
                </div>

                <div className="content" onClick={()=> navigate('/disk-management')}>
                    <h1>{name}</h1>
                    <hr />
                    <p>Disco {calcSpace(size, 0)}% ultilizado</p>
                    <img src={disk} alt="disk" />
                </div>
        </Container>
    )
}


