import './MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <h2 className="map-title">Find Us</h2>
        <p className="map-subtitle">
          Serving Hyderabad with professional AC services
        </p>
        
        <div className="map-wrapper">
          <iframe
            title="Hyderabad AC Services Location"
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1353126436286!2d78.47598!3d17.3850139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91d97fbffff%3A0x1000000000!2sHyderabad%20AC%20Services!5e0!3m2!1sen!2sin!4v1619857261837"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="map-info">
          <div className="map-info-item">
            <h3>📍 Our Service Area</h3>
            <p>We service all areas of Hyderabad including Banjara Hills, Hi-Tech City, HITEC City, Jubilee Hills, and surrounding regions.</p>
          </div>
          <div className="map-info-item">
            <h3>🚚 Fast Delivery</h3>
            <p>We ensure quick response time and reliable service. Our technicians are distributed across the city for prompt assistance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
