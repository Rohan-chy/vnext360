import ArticlesSection from '../custom-components/ArticlesSection';
import PackageGrid from '../custom-components/PackageGrid';
import ServiceProviderSlider from '../custom-components/ServiceProviderSlider';
import ShopByCategory from '../custom-components/ShopByCategory';
import SpecialitySection from '../custom-components/Speciality';
import HeroSection from './HeroSection';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServiceProviderSlider />
      <SpecialitySection />
      <PackageGrid />
      <ShopByCategory />
      <ArticlesSection />
    </main>
  );
};

export default LandingPage;
