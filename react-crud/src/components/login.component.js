import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button  class="btn btn-outline-secondary btn-sm text-right"  onClick={() => loginWithRedirect()}>
      Iniciar sesion
      </button>;
};
export default LoginButton;

