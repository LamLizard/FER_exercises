import { useContext } from 'react'
import { ThemeContext } from './components/ThemeContext'

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)

    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: theme.backgroundColor }}>
                <a className="navbar-brand" href="#" style={{ color: theme.color }}>Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: theme.color }}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#products" style={{ color: theme.color }}>Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" style={{ color: theme.color }}>About</a>
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