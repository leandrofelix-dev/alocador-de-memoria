import { useEffect, useState } from "react"
import { Container } from "./styles"
import Modal from 'react-modal'
import disk from "../../assets/disk.png"
import { Disk, useDisk } from "../../hooks/useDisk"
import { useDisks } from "../../hooks/useDisks"

import { v4 as uuid } from 'uuid'

interface Props {
    isOpen: boolean
    onRequestClose: () => void
    newDisk?: (item: Disk) => void
}

export function InsertDiskForm({ isOpen, onRequestClose, newDisk }: Props) {
    const { setDisks, disks } = useDisks()
    const [name, setName] = useState('')
    const [size, setSize] = useState(0)
    const [typeDisk, setTypeDisk] = useState<'contigua' | 'encadeada' | 'indexada'>('contigua')

    const handleCreateDisk = () => {
        onRequestClose()

        setDisks([...disks, {
            id: uuid(),
            files: [],
            name,
            size,
            type: typeDisk
        }])
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => !isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <div className="formPopUp">
                    <div className="formPopUp__box">
                        <div className="left">
                            <h1>Disco 01</h1>
                            <img src={disk} alt="IMAGEM" />
                        </div>

                        <div className="separator" />

                        <div className="right">
                            <div className="right__leftLine" />
                            <h1>Criar disco</h1>

                            <input
                                type="text"
                                name="nameStorage"
                                id="nameStorage"
                                placeholder="Inserir nome"
                                className="inputText"

                                onChange={e => setName(e.target.value)}
                            />

                            <br />
                            <input
                                type="number"
                                name="sizeStorage"
                                id="sizeStorage"
                                placeholder="Inserir tamanho"
                                className="inputText"

                                onChange={e => setSize(parseInt(e.target.value))}
                            />

                            {/* CheckBox */}

                            <div className="checkbox">
                                <div className="contigua">
                                    <form action="">
                                        <div className="contigua">
                                            <input type="radio"
                                                id="contigua"
                                                name="storageType"
                                                value={typeDisk}
                                                onChange={() => setTypeDisk('contigua')}
                                            />
                                            <label
                                                htmlFor="contigua">
                                                Alocação <b>Contígua</b>
                                            </ label>
                                        </div>
                                        <div className="indexada">
                                            <input
                                                type="radio"
                                                id="indexada"
                                                name="storageType"
                                                value={typeDisk}
                                                onChange={() => setTypeDisk('indexada')}
                                            />
                                            <label
                                                htmlFor="indexada">
                                                Alocação <b>Indexada</b>
                                            </ label>
                                        </div>
                                        <div className="encadeada">
                                            <input
                                                type="radio"
                                                id="encadeada"
                                                name="storageType"
                                                value={typeDisk}
                                                onChange={() => setTypeDisk('encadeada')}
                                            />
                                            <label
                                                htmlFor="encadeada">
                                                Alocação <b>Encadeada</b>
                                            </ label>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            {/*  */}
                            <div className="sendButton" onClick={handleCreateDisk}>
                                <i className="uil uil-save"></i>
                                Criar
                            </div>
                        </div>
                    </div>
                    <div className="formPopUp__closeButton">
                        <i className="uil uil-times" onClick={onRequestClose}></i>
                    </div>
                </div>
            </Container >
        </Modal>
    )
}