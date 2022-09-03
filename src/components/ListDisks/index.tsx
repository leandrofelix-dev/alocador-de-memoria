import { useState } from "react";
import { Container } from "./styles";
import { Disk } from "../Disk"


interface Props {
    onOpenNewTransactionModal: () => void;
}

export function ListDisks({onOpenNewTransactionModal}: Props) {
    
    const listDisk = [
        {name: '', size: 0},
        {name: '', size: 0},
    ]

    const [disks, setDisks] = useState(listDisk)
   
    return (
        <Container>
            <ul>
                {disks.map((disk, index) => (
                    <li key={index}><Disk name={disk.name} index={index}  /></li>
                ))}
            </ul>
        
            <button onClick={onOpenNewTransactionModal}>
                <i className="uil uil-plus-circle"></i>
            </button>
        </Container>
    )
}



/*
const defaultList = [
    { name: "ItemOne" },
    { name: "ItemTwo" },
    { name: "ItemThree" }
  ];

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
   const name = e.target.getAttribute("name")
    updateList(list.filter(item => item.name !== name));
  };*/
