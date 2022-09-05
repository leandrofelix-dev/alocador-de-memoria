import { useState } from "react"
import { disks } from "../data/disks"

export type Disk = {
    id: number
    name: string
    size: number
}

export function useDisk() {

    const [disk, setDisk] = useState(disks)

    function createNewDisk(item: Disk) {
        let newDisk = [...disk]
        newDisk.push(item)
        setDisk(newDisk)
        console.log(newDisk)
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