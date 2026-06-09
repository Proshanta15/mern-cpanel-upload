import { useAuth } from '../store/auth.jsx';
import '../style/service.css';
export default function Service() {
  const { services } = useAuth();

  console.log(services);


  return (
    <main className="service-page">
      {services.map((curElm, index) => {
        const { service, description, price, provider } = curElm;
        return (
          <article className="service-card" aria-label="Service card" key={index}>
            <div className="service-media" aria-hidden="true">
              <img
                src={"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VydmljZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"}
                alt="service"
                className="service-image"
              />
              <span className="service-chip">Premium</span>
            </div>

            <div className="service-content">
              <p className="service-provider">{provider}</p>
              <h1 className="service-title">{service}</h1>
              <p className="service-description">{description}</p>

              <div className="service-footer">
                <div>
                  <p className="footer-label">Price Range</p>
                  <p className="service-price">{price}</p>
                </div>
                <button type="button" className="service-cta">
                  Book Now
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
}
