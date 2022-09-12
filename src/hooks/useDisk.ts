import {  useState } from "react"
import { disks } from "../data/disks"
import { v4 as uuidv4 } from 'uuid';

export type Disk = {
    id: number
    name: string
    size: number
    typeDisk: string
}

export function useDisk() {

    const [disk, setDisk] = useState(disks)
    const [typeDisk, setTypeDisk] = useState('')

   // setDisk(localStorage.value)
   const [contigua, setContigua] = useState(disks[0])
   const [encadeada, setEncadeada] = useState(disks[1])
   const [indexada, setIndexada] = useState(disks[2])

   function createDisk(disk: string) {
    setTypeDisk(disk)
    console.log(typeDisk)
   }

    return {
        disk,
        typeDisk,
        createDisk,
        contigua,
        encadeada,
        indexada
    }
}