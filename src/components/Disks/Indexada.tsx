import { Container } from "./styles";
import disk from "../../assets/disk.png"
import { useNavigate } from "react-router-dom";
import { calcSpace } from "../../helpers/functions";
import { IDisksProps, useDisks } from "../../hooks/useDisks";
import { useEffect, useState } from "react";

type Props = {
    id?: number
    name?: string
    index?: number
    size?: number
    display: string
    removeItem?: (id: number) => void
    data: IDisksProps
}

export function Indexada({ name, size, removeItem, data, display }: Props) {
    const { setDisks, disks } = useDisks()
    const [percentageDisk, setPercentageDisk] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        // const sum = data.files.reduce((a, b) => a + b, 0)

        // setPercentageDisk(Math.trunc((100 / data.size) * sum))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const removeDisk = () => {
        setDisks(disks.filter(disk => disk.name !== data.name))
    }

    return (
        <Container display={display}>
            <div className="buttonTrash" onClick={removeDisk}>
                <i className="uil uil-trash-alt" />
            </div>

            <div className="content" onClick={() => navigate(`/disk/${data.id}`)}>
                <h1>{data.name}</h1>
                Tipo de alocação: {data.type}
                <hr />
                <p>Disco {percentageDisk}% ultilizado</p>
                <img src={disk} alt="disk" />
            </div>
        </Container>
    )
}


