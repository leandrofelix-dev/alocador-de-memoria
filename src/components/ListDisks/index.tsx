import { useEffect, useState } from "react"
import { Container } from "./styles"
import { InsertDiskForm } from "../InsertDiskForm"
import { useDisk } from "../../hooks/useDisk"
import { disks as dataDisks } from "../../data/disks"
import { Encadeada } from "../Disks/Encadeada"
import { Indexada } from "../Disks/Indexada"
import { Contigua } from "../Disks/Contigua"
interface Props {
    onOpenNewTransactionModal: () => void
    isOpen: boolean
    onRequestClose: () => void
}

export function ListDisks({ onOpenNewTransactionModal, isOpen, onRequestClose }: Props) {

    const hookDisks = useDisk()

  

    return (
        <Container>
            <ul>
                {/*hookDisks.disk.map((disk, index) => (
                    <li key={index}>
                        <Contigua
                            id={disk.id}
                            name={disk.name}
                            index={index}
                            size={disk.size}
                            display={hookDisks.typeDisk}
                        />
                        <Encadeada name={encadeada.name} display={hookDisks.typeDisk} />
                        <Indexada name={indexada.name} display={hookDisks.typeDisk} />
                    </li>
                ))*/}
                <li><Contigua name={hookDisks.contigua.name} display={hookDisks.typeDisk} /></li>
                <li><Encadeada name={hookDisks.encadeada.name} display={hookDisks.typeDisk} /></li>
                <li><Indexada name={hookDisks.indexada.name} display={hookDisks.typeDisk} /></li>


                <li className="insertButtonBox">
                    <button className="insertButton" onClick={onOpenNewTransactionModal}>
                        <i className="uil uil-plus-circle" ></i>
                    </button>
                </li>
            </ul>

            <InsertDiskForm
                isOpen={isOpen}
                onRequestClose={onRequestClose}
            />
        </Container>
    )
}
