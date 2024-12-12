import { useEffect, useState } from "react"
import Api from "../Api"
// usestate torna variavel reagitiva (para alterar)
// useEffect primeira a executar do componente
function Produto() {
    const [produto, setProduto] = useState();

    const [id, setId] = useState();
    const [nome, setNome] = useState ("");
    const [preco, setPreco] = useState ();
    const [status, setSatus] = usestate (true);

    useEffect (() => {
        carregarDados()
    }, []);

function carregarDados () {
    //pegar os produtos
    Api.get("produto").then ((response) =>{
        setProduto(response.data);
    })
};

 function salvar(){
    if (id){
        Api.put("produto", {id, nome, preco, status}).then ((response) =>{
            if (response.status == 200){
                carregarDados();
                //limpar as variaveis
                setId();
                setNome("");
                setPreco();
                setStatus(true);

                dispararMsgAviso(msg);

            }
        })
    }
 }  




    const [ativo, setAtivo] = useState(false);

    return (
        <>
            <h1>Produto</h1>
            <button className="btn btn-dark"
                onClick={()=>{
                    setAtivo(!ativo)
                }}
            >
                Exibe
            </button>

            {ativo ? <h3>olá mundo</h3> : ""}
        </>

    )
}

export default Produto