import {
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage'
import ProdutosPage from './pages/ProdutosPage'
import ParceirosPage from './pages/ParceirosPage'
import PoliticaPage from './pages/PoliticaPage'
import TermosPage from './pages/TermosPage'
import UsersPage from './pages/UsersPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from "./Layouts/MainLayout";
import EmpresasPage from "./pages/Empresas";
import FuncionariosPage from "./pages/Funcionarios";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={ <HomePage /> }/>
      <Route path="/produtos" element={ <ProdutosPage/> }/>
      <Route path="/parceiros" element={ <ParceirosPage/> }/>
      <Route path="/politica" element={ <PoliticaPage/> }/>
      <Route path="/termos" element={ <TermosPage/> }/>
      <Route path="/users" element={ <UsersPage /> }/>
      <Route path="/Empresas" element={ <EmpresasPage /> }/>
      <Route path="/Funcionarios" element={ <FuncionariosPage /> }/>
      <Route path="*" element={ <NotFoundPage/> }/> 
    </Route>  
)
);
const App = () => {
 return <RouterProvider router ={router}/>
};
export default App;
