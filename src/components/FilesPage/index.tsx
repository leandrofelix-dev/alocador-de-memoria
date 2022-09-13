import { Container } from "./styles";
import diskImg from "../../assets/disk.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDisksProps, useDisks } from "../../hooks/useDisks";
import { v4 as uuid } from 'uuid'

type Props = {
    name: string
}


export function FilesPage({ name }: Props) {
    const { id } = useParams()

    const { disks, setDisks } = useDisks()
    const [disk, setDisk] = useState<IDisksProps>({} as IDisksProps)

    const [percentageDisk, setPercentageDisk] = useState(0)


    useEffect(() => {
        const diskFind = disks.find(disk => disk.id === id) as IDisksProps
        const sum = diskFind.files.reduce((a, b) => (a + b.size), 0)

        setDisk(disks.find(disk => disk.id === id) || {} as IDisksProps)
        setPercentageDisk(Math.trunc((100 / diskFind.size) * sum))

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const handleFile = (e: FileList | null) => {

        const fileSize = e![0].size / 1000000

        const sum = Math.trunc(disk.files.reduce((a, b) => (a + b.size), 0) + fileSize)
        if (sum >= disk.size) return alert('Disco cheio')

        setPercentageDisk(Math.trunc((100 / disk.size) * sum))

        const id = uuid()

        const size = Math.trunc(fileSize)

        setDisk({
            ...disk,
            files: [...disk.files, { size, id, active: true }]
        })

        setDisks(prevState =>
            prevState.map(prev => {
                if (prev.id === disk.id) {
                    return { ...prev, files: [...disk.files, { size, id, active: true }] };
                }
                return prev;
            }),
        );
    };

    const removeFile = (fileId: string) => {
        setDisk({
            ...disk,
            files: disk.files.map(file => {
                if (file.id === fileId) {
                    return {
                        ...file,
                        active: false
                    }
                }

                return file
            })
        })
    }
    const espacoPreenchido = disk.files ? disk.files.map(file => ({
        size:Array(file.size),
        id:file.id,
        active:file.active ? 'storageUnity active' : 'storageUnity' 
    })) : []

    console.log(espacoPreenchido)

    return (
        <Container>
            {/* <button onClick={() => console.log(disks)}>teste</button> */}
            
                    <div className="inputFile">
                        <i className="uil uil-file-upload-alt"></i>
                        <input 
                            type="file"
                            id="uploadFile"
                            placeholder="TESTE"
                            onChange={(e) => handleFile(e.target.files)}
                        />
                    </div>
            
            <div className="filesPage">
                <div className="left">
                    <h1>{disk.name}</h1>
                    Tipo de alocação: <b>{disk.type}</b>
                    <hr />
                    <p>Disco {percentageDisk}% utilizado</p>
                    <img src={diskImg} alt="" />
                </div>
                <div className="right">

                    <ul className="storage">
                        <>
                            {espacoPreenchido && espacoPreenchido.map((file) => (
                                <>
                                    {file.size.map(() => (
                                        <li key={uuid()} className={file.active} onClick={() => removeFile(file.id)} />
                                    ))}
                                </>
                            ))}
                            {Array(!!disk.files ? Math.trunc(disk.size) : 0)
                                .fill(<li className="storageUnity" />)}
                        </>
                    </ul>

                </div>
            </div>
        </Container>
    )
}
