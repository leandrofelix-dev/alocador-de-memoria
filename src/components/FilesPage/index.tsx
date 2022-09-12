import { Container } from "./styles";
import disk from "../../assets/disk.png";
import { useState } from "react";

type Props = {
    name: string
}


export function FilesPage({ name }: Props){
    
    return (
        <Container>
            <div className="filesPage">
                <div className="left">
                    <h1>{name}</h1>
                    <hr />
                    <p>Disco 48% utilizado</p>
                    <img src={disk} alt="" />
                </div>
                <div className="right">

                     <ul className="storage">
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                        <li className="storageUnity"></li>
                    </ul> 
                </div>
            </div>
                <button>cria</button>
                <button>excloi</button>
        </Container>
    )
}