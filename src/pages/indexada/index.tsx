import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FilesPage } from "../../components/FilesPage";
import { Header } from "../../components/Header";
import { useDisk } from "../../hooks/useDisk";

export function Indexada() {
    const hookDisks = useDisk()

    return (
        <>
        <Header information="As unidades de memória em verde estão alocados"/>
        <button><Link to={'/'}>Voltar</Link></button>

        <FilesPage name={hookDisks.indexada.name} />
        
        </>        
    )
}