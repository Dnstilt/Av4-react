import "../../App.css"
import filaDePessoas from '/src/assets/img/fila_de_pessoas.jpg'
import filaEmFrenteALoja from '/src/assets/img/fila_em_frente_a_loja.jpg'

const Produtos = () => {
    return (
        <div>
            <div className="tituloShadow d-flex flex-column fs-1 text-center mt-5 mb-5 text-primary fw-bold">
                Nosso diferencial é o foco no seu cliente.
            </div>
            <div className="w-25 d-grid mx-auto mb-5">
                <a className="btn btn-sm btn-warning rounded-pill mb-5 fs-4" id="sejaNossoCliente"
                   data-bs-toggle="modal"
                   data-bs-target="#sejaNosso">
                    Seja nosso cliente!!!
                </a>
            </div>
            {/* Modal form seja nosso cliente */}
            <div className="modal fade" id="sejaNosso" tabIndex="-1" aria-labelledby="clienteModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title fs-5 text-center text-dark" id="exampleModalLabel">Coloque seu
                                e-mail e telefone para entrarmos em contato com você!</p>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">E-mail:</label>
                                    <input type="text" className="form-control" id="recipient-email"/>
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Telefone:</label>
                                    <input type="text" className="form-control" id="recipient-telefone"/>
                                </div>
                                <div className="mb-3">
                                    <label for="recipient-name" className="col-form-label">Nome:</label>
                                    <input type="text" className="form-control" id="recipient-nome"/>
                                </div>
                            </form>
                        </div>