import { useState } from "react";
import { Header } from "../../components/Header";
import { InsertDiskForm } from "../../components/InsertDiskForm";
import { ListDisks } from "../../components/ListDisks";

export default function Main() {

    const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionsModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionsModalOpen(false);
    }

    return (
        <>
            <Header information="Adicione, remova e visualize os discos instalados" />
            <ListDisks 
                onOpenNewTransactionModal={handleOpenNewTransactionModal}
                isOpen={isNewTransactionsModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
        </>
    )
}