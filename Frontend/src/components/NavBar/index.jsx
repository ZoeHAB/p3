import { NavLink } from "react-router-dom";
import HomeButton from "../HomeButton";
import useAuth from "../../hooks/useAuth";
import Avatar from "../Avatar";
import "./style.css";

function NavBar() {
  const { isAuthenticated } = useAuth();

  const user = useAuth();

  return (
    <div className="navbar">
      <nav>
        <HomeButton />
        <NavLink to="/about">Conócenos</NavLink>
        <NavLink to="/services">Servicios</NavLink>
        {!isAuthenticated && <NavLink to="/signup">Regístrate</NavLink>}
        {!isAuthenticated}
        {isAuthenticated && <NavLink to="/users">Usuarios</NavLink>}
        {isAuthenticated}
        {!isAuthenticated && <NavLink to="/login">Inicia sesión</NavLink>}
        {!isAuthenticated}
        {isAuthenticated && <NavLink to="/logout">Cerrar sesión</NavLink>}
        {isAuthenticated}
        {isAuthenticated && (
          <NavLink
            to={{ pathname: `/profile/${user.user.user.nickname}` }}
            state={{ from: `${user.user.user.nickname}` }}
          >
            Perfil
          </NavLink>
        )}
        {isAuthenticated}
        {isAuthenticated && <Avatar user={`${user.user.user.nickname}`} />}
      </nav>
    </div>
  );
}

export default NavBar;
