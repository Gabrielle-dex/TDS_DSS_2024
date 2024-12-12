import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cliente from "./pages/cliente"
import Produto from "./pages/produto"
import Pedido from "./pages/pedido"


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cliente" element={<Cliente />}></Route>
                <Route path="/produto" element={<Produto />}></Route>
                <Route path="/pedido" element={<Pedido />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes