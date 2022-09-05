import { useEffect, useState } from "react";
import { useDisk } from "../../hooks/useDisk";
import { Container } from "./styles";

export function Dashboard() {

    const disk = useDisk()

    const [selectDisk, setSelectDisk] = useState(disk.disk)

    function filter(id: number) {
        setSelectDisk(selectDisk.filter(item => item.id == id))
    }


    useEffect(()=> {
        filter(2)
    }, [])

    return (
        <Container>
            {}
        </Container>
    )
}