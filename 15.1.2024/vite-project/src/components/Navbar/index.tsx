import {Link} from 'react-router-dom'
import {routes} from '../../helpers/index'
function Navbar(){
    return (
        <nav>
            <ul>
                {routes.map((route) => (
                        <li key={route.path}>
                            <Link to={route.path}>{route.label}</Link>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Navbar;