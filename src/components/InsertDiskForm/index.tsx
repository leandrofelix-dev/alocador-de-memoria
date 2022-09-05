import { useEffect, useState } from "react"
import { Container } from "./styles"
import Modal from 'react-modal'
import disk from "../../assets/disk.png"
import { Disk, useDisk } from "../../hooks/useDisk"

interface Props {
    isOpen: boolean
    onRequestClose: () => void
    newDisk: (item: Disk) => void
}

export function InsertDiskForm({ isOpen, onRequestClose, newDisk }: Props) {

    const [name, setName] = useState('')
    const [size, setSize] = useState(0)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <div className="formPopUp">
                    <div className="left">
                        <h1>Disco 01</h1>
                        <img src={disk} alt="IMAGEM" />
                    </div>

                    <div className="separator" />

                    <div className="right">
                        <div className="right__leftLine" />
                        <h1>Criar disco</h1>
                        <label htmlFor="nameStorage">Nome</label>
                        <input
                            type="text"
                            name="nameStorage"
                            id="nameStorage"
                            placeholder="Inserir nome"
                            className="inputText"

                            onChange={e => setName(e.target.value)}
                        />

                        <br />

                        <label htmlFor="sizeStorage">Tamanho</label>
                        <input
                            type="text"
                            name="sizeStorage"
                            id="sizeStorage"
                            placeholder="Inserir tamanho"
                            className="inputText"

                            onChange={e => setSize(parseInt(e.target.value))}
                        />

                        <div className="sendButton" onClick={() => newDisk({ id: 3, name, size })}>
                            <i className="uil uil-save"></i>
                            Criar
                        </div>
                    </div>
                    <i className="uil uil-times" onClick={onRequestClose}></i>
                </div>
            </Container >
        </Modal>
    )
}