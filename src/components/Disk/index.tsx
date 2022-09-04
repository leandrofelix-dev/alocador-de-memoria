import { Container } from "./styles";
import disk from "../../assets/disk.png"
import { useNavigate } from "react-router-dom";

type Props = {
    id: number
    name: string
    index: number
    removeItem: (id: number)=> void
}

export function Disk({ name, index, removeItem, id }: Props) {

    const navigate = useNavigate()

    return (
        <Container>
                <div onClick={()=> removeItem(id)}><i className="uil uil-trash-alt"></i></div>

                <div className="content" onClick={()=> navigate('/disk-management')}>
                    <h1>{id + 1/*name + ' ' + (index + 1)*/}</h1>
                    <hr />
                    <p>Disco 48% utilizado</p>
                    <img src={disk} alt="disk" />
                </div>
        </Container>
    )
}


