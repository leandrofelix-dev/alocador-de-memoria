type Disk = {
    id: number
    name: string
    size: number
    typeDisk: string
}

type Storage = [
    {id: number, posInit: number, posEnd: number }
]

export const disks: Disk[] = [
    {id: 0, name: 'Contígua', size: 256, typeDisk: 'c'},
    {id: 1, name: 'Encadeada', size: 256, typeDisk: 'e'},
    {id: 2, name: 'Indexada', size: 256, typeDisk: 'i'}
]

export const storage: Storage = [
    {id: 2, posInit: 0, posEnd: 5 }
]
