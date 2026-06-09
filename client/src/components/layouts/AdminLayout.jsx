import { NavLink, Outlet } from "react-router-dom"
import "../../style/admin-layout.css"

export const AdminLayout = () => {
    const navLinkClass = ({ isActive }) =>
        isActive ? "admin-nav-link active" : "admin-nav-link"

    return (
        <section className="admin-layout">
            <aside className="admin-sidebar">
                <div className="brand-block">
                    <p className="brand-tag">Admin Space</p>
                    <h2>Control Room</h2>
                </div>

                <nav aria-label="Admin navigation">
                    <ul className="admin-nav-list">
                        <li>
                            <NavLink to="/admin/users" className={navLinkClass}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/contacts" className={navLinkClass}>Contacts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/services" className={navLinkClass}>Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className={navLinkClass}>Back To Site</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-note">
                    <p>Tip: Keep your user and contact data updated every day for clean reporting.</p>
                </div>
            </aside>

            <div className="admin-main">
                <header className="admin-topbar">
                    <div>
                        <p className="topbar-kicker">Dashboard</p>
                        <h1>Admin Console</h1>
                    </div>
                    <div className="status-pill">Live</div>
                </header>

                <div className="admin-content-shell">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
