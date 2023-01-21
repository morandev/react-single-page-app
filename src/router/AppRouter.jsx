import { Navigate, Route, Routes } from "react-router-dom"
import { DCPage, MarvelPage } from '../heroes'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'

/**
 * Router principal de la apicacion
 * 
 * @returns 
 */
const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DCPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    </> 
  )
}

export default AppRouter