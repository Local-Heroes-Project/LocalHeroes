import { Navigate, Outlet} from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";


function PublicRoute () {

    const token = useAuthStore((state) => state.token)

    if (token) {
        return <Navigate to ="ProfilePage" replace />
    }

    return <Outlet/>

}

export default PublicRoute