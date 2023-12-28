import { useContext } from "react";
  import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserAuthContext";

  function RequireAuth({ children }: { children:JSX.Element }) {
    const { currentUser } = useContext(AuthContext)
    let location = useLocation()

    if (!currentUser) {
      return <Navigate to="/" state={ { from: location } } replace />;
    }

    return children;
  }
  
  export default RequireAuth