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