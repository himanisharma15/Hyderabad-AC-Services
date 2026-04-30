
import HomeHero from './HomeHero';
import ServicesDashboardSection from './ServicesDashboardSection';
import ExpertSolutionsSection from './ExpertSolutionsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import HowItWorksSection from './HowItWorksSection';
import TrustedBrandsSection from './TrustedBrandsSection';
import VideoShowcaseSection from './VideoShowcaseSection';
import ServiceCategorySection from './ServiceCategorySection';
import CtaSection from './CtaSection';
import { acServices, exhaustServices } from '../data/serviceCategories';

export default function HomePage({ onBookNow }) {
  return (
    <>
      <HomeHero onBookNow={onBookNow} />

      <main>
        <ServicesDashboardSection onBookNow={onBookNow} />
        <ExpertSolutionsSection />
        <VideoShowcaseSection onBookNow={onBookNow} />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <TrustedBrandsSection />
        
        <CtaSection onBookNow={onBookNow} />
      </main>
    </>
  );
}
