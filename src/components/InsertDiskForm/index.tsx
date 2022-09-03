import { useState } from "react"
import { Container } from "./styles"
import Modal from 'react-modal'
import disk from "../../assets/disk.png"

interface Props {
    isOpen: boolean
    onRequestClose: () => void
}

export function InsertDiskForm({ isOpen, onRequestClose }: Props) {

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
                    <div className="separator"></div>
                    <div className="right">
                        <div className="right__leftLine"></div>
                        <h1>Criar disco</h1>
                        <label htmlFor="nameStorage">Nome</label>
                        <input type="text" name="nameStorage" id="nameStorage" placeholder="Inserir nome" className="inputText"/>

                        <br />

                        <label htmlFor="sizeStorage">Tamanho</label>
                        <input type="text" name="sizeStorage" id="sizeStorage" placeholder="Inserir tamanho" className="inputText"/>

                        <div className="sendButton" onClick={onRequestClose}>
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