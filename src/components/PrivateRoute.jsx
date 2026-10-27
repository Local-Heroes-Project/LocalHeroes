import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

function PrivateRoute () {

    const token = useAuthStore((state) => state.token)
    console.log(token)

    if(!token) {
        return <Navigate to="/login" replace />

    }

    return <Outlet/>

}

export default PrivateRoute