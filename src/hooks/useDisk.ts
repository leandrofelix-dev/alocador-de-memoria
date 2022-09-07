import { SetStateAction, useState } from "react"
import { disks } from "../data/disks"
import { v4 as uuidv4 } from 'uuid';

export type Disk = {
    id: number
    name: string
    size: number
    archives: []
}

export function useDisk() {

    const [disk, setDisk] = useState(disks)

   // setDisk(localStorage.value)

    function createNewDisk(item: Disk) {
        if(item.size){
            let newDisk = [...disk]
            newDisk.push(item) 
            setDisk(newDisk)
        
        localStorage.setItem(uuidv4(), JSON.stringify(item))

        }
        else{
            alert('erro');
        }
    }
    

    function removeItem(id: number) {
        setDisk(disk.filter(item => item.id !== id))
    }

    return {
        disk,
        createNewDisk,
        removeItem
    }
}