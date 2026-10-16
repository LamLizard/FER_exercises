import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from './components/ThemeContext'

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)

    // Helper để đổi màu nav-link theo theme và trạng thái active
    const linkStyle = ({ isActive }) => ({
        color: theme.color,
        fontWeight: isActive ? 'bold' : 'normal',
        textDecoration: isActive ? 'underline' : 'none'
    })

    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: theme.backgroundColor }}>
                <NavLink className="navbar-brand" to="/" style={{ color: theme.color }}>Navbar</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" end style={linkStyle}>
                                Home <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" style={linkStyle}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <button
                    type="button"
                    onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        border: `1px solid ${theme.color}`,
                        padding: '6px 12px',
                        cursor: 'pointer'
                    }}
                >
                    Switch Nav to {dark ? 'Light' : 'Dark'}
                </button>
            </nav>
        </div>
    );
}