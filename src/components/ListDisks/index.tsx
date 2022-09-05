import { useState } from "react";
import { Container } from "./styles";
import { Disk } from "../Disk"
import { InsertDiskForm } from "../InsertDiskForm";
import { useDisk } from "../../hooks/useDisk";

interface Props {
    onOpenNewTransactionModal: () => void
    isOpen: boolean
    onRequestClose: () => void
}

export function ListDisks({ onOpenNewTransactionModal, isOpen, onRequestClose }: Props) {

    const disks = useDisk()

    return (
        <Container>
            <ul>
                {disks.disk.map((disk, index) => (
                    <li key={index}>
                        <Disk
                            id={disk.id}
                            name={disk.name}
                            index={index}
                            size={disk.size}

                            removeItem={disks.removeItem}
                        />
                    </li>
                ))}
            </ul>

            <button onClick={onOpenNewTransactionModal}>
                <i className="uil uil-plus-circle" ></i>
            </button>

            <InsertDiskForm
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                newDisk={disks.createNewDisk}
            />
        </Container>
    )
}
