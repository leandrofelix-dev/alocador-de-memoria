import { useEffect, useState } from "react"
import { Container } from "./styles"
import { InsertDiskForm } from "../InsertDiskForm"
import { useDisk } from "../../hooks/useDisk"
import { disks as dataDisks } from "../../data/disks"
import { Encadeada } from "../Disks/Encadeada"
import { Indexada } from "../Disks/Indexada"
import { Contigua } from "../Disks/Contigua"
import { useDisks } from "../../hooks/useDisks"
interface Props {
    onOpenNewTransactionModal: () => void
    isOpen: boolean
    onRequestClose: () => void
}

export function ListDisks({ onOpenNewTransactionModal, isOpen, onRequestClose }: Props) {
    const hookDisks = useDisk()
    const { disks } = useDisks()
    return (
        <Container>
            <ul>
                {disks.length ? disks.map(disk => <li><Indexada name={hookDisks.indexada.name} display={hookDisks.typeDisk} data={disk} /></li>) : null}

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
