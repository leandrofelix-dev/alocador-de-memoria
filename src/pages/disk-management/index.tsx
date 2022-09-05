import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Dashboard } from "../../components/Dashboard";
import { Header } from "../../components/Header";

export function DiskManagement() {
    const navigate = useNavigate()
    return (
        <>
        <Header information="As unidades de memória em verde estão alocados"/>
        <button><Link to={'/'}>Voltar</Link></button>

        <Dashboard />
        
        </>        
    )
}