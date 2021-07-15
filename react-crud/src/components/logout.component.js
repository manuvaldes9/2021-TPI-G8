import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button  class="btn btn-outline-secondary btn-sm" onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesion
    </button>
  );
};

export default LogoutButton;