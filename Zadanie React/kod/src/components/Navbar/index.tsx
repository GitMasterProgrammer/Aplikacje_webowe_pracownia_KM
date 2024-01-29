import './navbar.scss'
import {Link} from "react-router-dom";
import {routes} from '../../helpers/index'
export default function Navbar() {
  return (
    <div id="app-nav">
      <div className="navbar-brand">
        App name
      </div>
        <nav>
            <ul>
                {routes.map((route) => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}