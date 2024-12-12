import { useEffect, useState } from "react";
import Api from "../Api"

function Cliente() {

    const [cliente, setCliente] = useState();

    const [id, setId] = useState();
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [status, setStatus] = useState(true)

    const [msgAviso, setMsgAviso] = useState("");
    const [msgSucesso, setMsgSucesso] = useState("");


    useEffect(() => {
        carregarDados()
    }, []);

    function carregarDados() {
        Api.get("cliente").then((response) => {
            setCliente(response.data);
            // console.log(response.data)
        });
    }

    function salvar() {

        if (id) {
            Api.put("cliente", { id, nome, telefone, status }).then((response) => {
                if (response.status == 200) {
                    carregarDados();
                    //Limpo as variaveis
                    setId();
                    setNome("");
                    setTelefone("");
                    setStatus(true)

                    dispararMsgSucesso(response.data.msg);
                }
            });
        } else {
            Api.post('cliente', { nome, telefone }).then((response) => {

                if (response.status == 200) {
                    carregarDados();
                    setNome("");
                    setTelefone("");

                    dispararMsgSucesso(response.data.msg);

                } else if (response.status == 309) {
                    dispararMsgAviso(response.data.msg);
                }
            });
        }

    }

    function deletar(id) {
        Api.delete(`cliente/${id}`).then((response) => {
            if (response.status == 200) {
                carregarDados();
                dispararMsgSucesso(response.data.msg);
            }
        });
    }

    function editar(item) {
        setId(item.id)
        setNome(item.nome);
        setTelefone(item.telefone);
        setStatus(item.status);
    }

    function dispararMsgSucesso(msg) {
        setMsgSucesso(msg);
        setTimeout(() => {
            setMsgSucesso("")
        }, "5000")
    }

    function dispararMsgAviso(msg) {
        setMsgAviso(msg);
        setTimeout(() => {
            setMsgAviso("")
        }, "5000");
    }

    return (
        <div className="container">

            {msgAviso == ""
                ? ""
                : <div className="alert alert-warning" role="alert">
                    {msgAviso}
                </div>
            }

            {msgSucesso == ""
                ? ""
                : <div className="alert alert-success" role="alert">
                    {msgSucesso}
                </div>
            }

            <h1 className="text-uppercase display-6">Cliente</h1>
            {id}- {nome} - {telefone} - {status}
            <form action="#">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Nome"
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}
                        value={nome}
                    />
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input type="number" className="form-control" placeholder="Telefone"
                        onChange={(e) => {
                            setTelefone(e.target.value)
                        }}
                        value={telefone}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg btn-block"
                        onClick={() => {
                            salvar()
                        }}
                    >Salvar</button>
                </div>
            </form >

            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">NOME</th>
                        <th scope="col">TELEFONE</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">AÇÃO</th>
                    </tr>
                </thead>
                <tbody>

                    {cliente?.map((item, index) => (
                        <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.status}</td>
                            <td>
                                <button type="button" className="btn btn-danger"
                                    onClick={() => {
                                        deletar(item.id)
                                    }}
                                >
                                    Excluir
                                </button>
                                <button type="button" className="btn btn-warning"
                                    onClick={() => {
                                        editar(item);
                                    }}
                                >
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}

                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                </tbody>
            </table>
        </div >
    )
}

export default Cliente