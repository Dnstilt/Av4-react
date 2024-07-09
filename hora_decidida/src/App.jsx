
import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import ProdutosPage from './pages/ProdutosPage'
import PartnersPage from './pages/PartnersPage'
import PoliticaPage from './pages/PoliticaPage'
import TermosPage from './pages/TermosPage'
import ClientesPage from './pages/ClientesPages/ClientesPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from "./layouts/MainLayout";
import EmpresasPage from "./pages/EmpresasPages/Empresaspage";
import FuncionariosPage from "./pages/FuncionariosPages/FuncionariosPage";
import CreateFuncionarioPage from "./pages/FuncionariosPages/CreateFuncionarioPage";
import UpdateFuncionarioPage from "./pages/FuncionariosPages/UpdadeFuncionarioPage";
import CreateClientePage  from "./pages/ClientesPages/CreateClientePage";
import UpdateClientePage from "./pages/ClientesPages/UpdateClientePage";
import CreateEmpresasPage from "./pages/EmpresasPages/CreateEmpresasPage";
import UpdateEmpresasPage from "./pages/EmpresasPages/UpdateEmpresasPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={ <HomePage /> }/>
      <Route path="/produtos" element={ <ProdutosPage/> }/>
      <Route path="/parceiros" element={ <PartnersPage/> }/>
      <Route path="/politica" element={ <PoliticaPage/> }/>
      <Route path="/termos" element={ <TermosPage/> }/>
      <Route path="/clientes" element={ <ClientesPage /> }/>
      <Route path="/createcliente" element={ <CreateClientePage /> }/>
      <Route path="/updatecliente/:id" element={ <UpdateClientePage /> }/>
      <Route path="/empresas" element={ <EmpresasPage /> }/>
      <Route path="/createempresas" element={ < CreateEmpresasPage/> }/>
      <Route path="/updadeempresas/:id" element={ < UpdateEmpresasPage /> }/>
      <Route path="/funcionarios" element={ <FuncionariosPage /> }/>
      <Route path="/createfuncionario" element={ < CreateFuncionarioPage/> }/>
      <Route path="/updatefuncionario/:id" element={ <UpdateFuncionarioPage/> }/>
      <Route path="*" element={ <NotFoundPage/> }/> 
    </Route>  
)
);
const App = () => {
 return <RouterProvider router ={router}/>
};
export default App;