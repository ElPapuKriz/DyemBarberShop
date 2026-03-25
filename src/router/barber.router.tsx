import { LayoutMain } from "@/barber/components/LayoutMain";
import PageMain from "@/barber/pages/PageMain";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain />,
        children: [
            {path:"",element:<PageMain/>}
        ]
    },
    {
        path: "*", element: <h1>Esta pagina no existe.</h1>
    }
])