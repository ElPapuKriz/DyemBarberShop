import { Outlet } from "react-router"
import CustomHeader from "@/barber/customs/CustomHeader"
import CustomFooter from "@/barber/customs/CustomFooter"

export const LayoutMain = () => {
    return (
        <div className="flex flex-col bg-taupe-900">
            
                <CustomHeader/>

                
                    <Outlet />
                
            
                <CustomFooter/>
            
        </div>
    )
}


