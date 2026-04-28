import HomeHero from './HomeHero';
import ServicesDashboardSection from './ServicesDashboardSection';
import ServiceCategorySection from './ServiceCategorySection';
import { acServices, exhaustServices } from '../data/serviceCategories';

export default function HomePage({ onBookNow }) {
  return (
    <>
      <HomeHero onBookNow={onBookNow} />

      <main>
        <ServicesDashboardSection />

        <ServiceCategorySection
          id="air-conditioning"
          title="Advanced Air Conditioning Solutions"
          subtitle="Reliable cooling services for homes and businesses"
          services={acServices}
          onBookNow={onBookNow}
        />

        <ServiceCategorySection
          id="exhaust"
          title="Efficient Exhaust & Ventilation Systems"
          subtitle="Smart airflow solutions for commercial and residential spaces"
          services={exhaustServices}
          onBookNow={onBookNow}
          alt
        />
      </main>
    </>
  );
}
