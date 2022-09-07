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
                                <input
                                    type = "checkbox"
                                    id = "inputContigua"
                                    name = "contigua"
                                    value = "c"
                                />
                                <label 
                                    htmlFor="contigua"> 
                                    Alocação <b>Contígua</b>
                                </ label>
                            </div>

                            <div className="indexada">
                                <input
                                    type = "checkbox"
                                    id = "inputIndexada"
                                    name = "indexada"
                                    value = "i"
                                />
                                <label 
                                    htmlFor="indexada"> 
                                    Alocação <b>Indexada</b>
                                </ label>
                            </div>

                            <div className="encadeada">
                                <input
                                    type = "checkbox"
                                    id = "inputEncadeada"
                                    name = "encadeada"
                                    value = "e"
                                />
                                <label 
                                    htmlFor="encadeada"> 
                                    Alocação <b>Encadeada</b>
                                </ label>
                            </div>
                            </div>


                            {/*  */}
                            <div className="sendButton" onClick={() => newDisk({ id: 3, name, size, archives: []})}>
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