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
        <button className="backButton"><Link to={'/'}><i className="uil uil-arrow-left"></i></Link></button>

        <FilesPage name={hookDisks.indexada.name} />
        
        </>        
    )
}