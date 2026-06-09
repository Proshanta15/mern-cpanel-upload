import { NavLink } from 'react-router-dom';
import '../style/error.css';

export default function Error() {
    return (
        <main className="error-page">
            <section className="error-card">
                <p className="error-code">404</p>
                <h1>Page not found</h1>
                <p className="error-message">
                    The page you are looking for might have been removed, renamed, or is
                    temporarily unavailable.
                </p>

                <div className="error-actions">
                    <NavLink to="/" className="error-button primary">
                        Back to Home
                    </NavLink>
                    <NavLink to="/contact" className="error-button secondary">
                        Contact Support
                    </NavLink>
                </div>
            </section>
        </main>
    )
}