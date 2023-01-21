import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

/**
 * Router principal de la apicacion
 *
 * @returns
 */
const AppRouter = () => {
     return (
          <>
               <Routes>
                    <Route path="login" element={<LoginPage />} /> 
                    <Route path="/*" element={<HeroesRoutes />} />
               </Routes>
          </>
     );
};

export default AppRouter;
