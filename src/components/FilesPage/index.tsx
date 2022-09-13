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

        /*if(disks.length < 1) {
            setDisk({
                ...disk,
                files: [...disk.files, { size, id, active: true }]
            })
        }*/
/*
        for (let i = 0; i < disks.length; i++) {

            if (disks.find(disk => disk.files[i].active === false)) {

                setDisks(prevState =>
                    prevState.map(prev => {
                        if (prev.id === disk.id) {
                            return { ...prev, files: [...disk.files, { size, id, active: true }] };
                        }
                        return prev;
                    }),
                );
            }
        }
*/

        //console.log(disk.files[0].active)


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
        size: Array(file.size),
        id: file.id,
<<<<<<< HEAD
        active: file.active ? 'storageUnity active' : 'storageUnity'
=======
        active: file.active ? 'storageUnity active' : 'storageUnity' 
>>>>>>> ff7d1ef206e2296a1e0eb29a11dca17eaf51ed45
    })) : []
    const buzySpaces = espacoPreenchido.reduce((acc, espaco) => acc + espaco.size.length, 0)
    const espacoEmBranco = disk.files ? new Array(Math.trunc(disk.size - buzySpaces)) : []

    return (
        <Container>
<<<<<<< HEAD
            <div className="inputFile">
                <i className="uil uil-file-upload-alt"></i>
                <input
                    type="file"
                    id="uploadFile"
                    placeholder="TESTE"
                    onChange={(e) => handleFile(e.target.files)}
                />
            </div>

=======
                <div className="inputFile">
                    <i className="uil uil-file-upload-alt"></i>
                    <input 
                        type="file"
                        id="uploadFile"
                        placeholder="TESTE"
                        onChange={(e) => handleFile(e.target.files)}
                    />
                </div>
            
>>>>>>> ff7d1ef206e2296a1e0eb29a11dca17eaf51ed45
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
                            {espacoPreenchido.map((file) => (
                                <>
                                    {[...file.size].map(() => (
                                        <li key={uuid()} className={file.active} onClick={() => removeFile(file.id)}>&nbsp;</li>
                                    ))}
                                </>
                            ))}
                            {[...espacoEmBranco].map((_, index) => (
<<<<<<< HEAD
                                <li className="storageUnity" key={uuid()}>&nbsp;</li>
                            )
=======
                                    <li className="storageUnity" key={uuid()}>&nbsp;</li>
                                )
>>>>>>> ff7d1ef206e2296a1e0eb29a11dca17eaf51ed45
                            )}
                        </>
                    </ul>

                </div>
            </div>
        </Container>
    )
}
// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cerejas', quantity: 5}
// ];


