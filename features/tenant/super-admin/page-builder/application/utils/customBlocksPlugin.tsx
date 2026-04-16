import ArticlesSlider from '../../presentation/components/ArticlesSlider';
import Button from '../../presentation/components/Button';
import DoctorSlider from '../../presentation/components/DoctorSlider';
import FeedbackSlider from '../../presentation/components/FeedbackSlider';
import FooterSection from '../../presentation/components/Footer';
import Footer1 from '../../presentation/components/Footer1';
import Header from '../../presentation/components/Header';
import Header1 from '../../presentation/components/Header1';
import HeroSlider from '../../presentation/components/HeroBanner';
import PackageSlider from '../../presentation/components/PackageGrid';
import TrustedPaymentPartners from '../../presentation/components/PaymentPartners';
import ProductSearch from '../../presentation/components/ProductSearch';
import ServiceProviderSlider from '../../presentation/components/ServiceProvider';
import ServiceSearch from '../../presentation/components/ServiceSearch';
import ShopByCategory from '../../presentation/components/ShopByCategory';
import SpecialitiesSlider from '../../presentation/components/Specialities';
import UploadPrescription from '../../presentation/components/UploadPrescription';
import WhyUs from '../../presentation/components/WhyUs';

// green
import Header1Green from '../../presentation/components/green/Header1Green';
import ServiceProviderGreen from '../../../../../../shared/features/clinicPatient/presentation/components/ServiceProviderGreen';
import ProductSearchGreen from '../../presentation/components/green/ProductSearchGreen';
import ServiceSearchGreen from '../../search/ServiceSearch';
import UploadPrescriptionGreen from '../../presentation/components/green/UploadPrescriptionGreen';
import DoctorSliderGreen from '../../presentation/components/green/DoctorSliderGreen';
import PackageSliderGreen from '../../presentation/components/green/PackageGridGreen';
import ArticlesSliderGreen from '../../presentation/components/green/ArticlesSliderGreen';
import SpecialitiesSliderGreen from '../../doctorCategory/presentation/SpecialitiesGreen';
import ShopByCategoryGreen from '../../presentation/components/green/ShopByCategoryGreen';
import FeedbackSliderGreen from '../../presentation/components/green/FeedbackSliderGreen';
import WhyUsGreen from '../../presentation/components/green/WhyUsGreen';
import TrustedPaymentPartnersGreen from '../../presentation/components/green/PaymentPartnersGreen';
import Footer1Green from '../../presentation/components/green/Footer1Green';

export const customBlocksPlugin = (editor: any) => {
  // editor.Blocks.add('Button', {
  //   label: 'Card',
  //   category: 'Custom',
  //   content: <Button />,
  // });

  // editor.Blocks.add('header', {
  //   label: 'Header',
  //   category: 'Home',
  //   content: <Header />,
  // });

  // editor.Blocks.add('Header1', {
  //   label: 'Header1',
  //   category: 'Home',
  //   content: <Header1 />,
  // });

  // editor.Blocks.add('hero-slider', {
  //   label: 'Hero Section',
  //   category: 'Home',
  //   // media: '🖼️',
  //   content: <HeroSlider />,
  // });

  // editor.Blocks.add('ServiceProvider', {
  //   label: 'Service Provider',
  //   category: 'Home',
  //   // media: '🖼️',
  //   content: <ServiceProviderSlider />,
  // });

  // editor.Blocks.add('ProductSearch', {
  //   label: 'Product Search',
  //   category: 'Home',
  //   content: <ProductSearch />,
  // });

  // editor.Blocks.add('ServiceSearch', {
  //   label: 'Service Search',
  //   category: 'Home',
  //   content: <ServiceSearch />,
  // });

  // editor.Blocks.add('UploadPrescription', {
  //   label: 'Upload Prescription',
  //   category: 'Home',
  //   content: <UploadPrescription />,
  // });

  // editor.Blocks.add('DoctorSlider', {
  //   label: 'Doctors',
  //   category: 'Home',
  //   content: <DoctorSlider />,
  // });

  // editor.Blocks.add('PackageGrid', {
  //   label: 'Package',
  //   category: 'Home',
  //   content: <PackageSlider />,
  // });

  // editor.Blocks.add('ArticlesSlider', {
  //   label: 'Articles',
  //   category: 'Home',
  //   content: <ArticlesSlider />,
  // });

  // editor.Blocks.add('SpecialitiesSlider', {
  //   label: 'Speciality',
  //   category: 'Home',
  //   content: <SpecialitiesSlider />,
  // });

  // editor.Blocks.add('ShopByCategory', {
  //   label: 'ShopByCategory',
  //   category: 'Home',
  //   content: <ShopByCategory />,
  // });

  // editor.Blocks.add('FeedbackSlider', {
  //   label: 'Feedback',
  //   category: 'Home',
  //   content: <FeedbackSlider />,
  // });

  // editor.Blocks.add('WhyUs', {
  //   label: 'Why Us',
  //   category: 'Home',
  //   content: <WhyUs />,
  // });

  // editor.Blocks.add('TrustedPaymentPartners', {
  //   label: 'Payment Partner',
  //   category: 'Home',
  //   content: <TrustedPaymentPartners />,
  // });

  // editor.Blocks.add('FooterSection', {
  //   label: 'Footer',
  //   category: 'Home',
  //   content: <FooterSection />,
  // });

  // editor.Blocks.add('Footer1', {
  //   label: 'Footer1',
  //   category: 'Home',
  //   content: <Footer1 />,
  // });

  editor.Blocks.add('Header1', {
    label: 'Header1',
    category: 'Home',
    content: <Header1Green />,
  });

  editor.Blocks.add('ServiceProvider', {
    label: 'Service Provider',
    category: 'Home',
    // media: '🖼️',
    content: <ServiceProviderGreen />,
  });

  editor.Blocks.add('ProductSearch', {
    label: 'Product Search',
    category: 'Home',
    content: <ProductSearchGreen />,
  });

  editor.Blocks.add('ServiceSearch', {
    label: 'Service Search',
    category: 'Home',
    content: <ServiceSearchGreen />,
  });

  editor.Blocks.add('UploadPrescription', {
    label: 'Upload Prescription',
    category: 'Home',
    content: <UploadPrescriptionGreen />,
  });

  editor.Blocks.add('DoctorSlider', {
    label: 'Doctors',
    category: 'Home',
    content: <DoctorSliderGreen />,
  });

  editor.Blocks.add('PackageGrid', {
    label: 'Package',
    category: 'Home',
    content: <PackageSliderGreen />,
  });

  editor.Blocks.add('ArticlesSlider', {
    label: 'Articles',
    category: 'Home',
    content: <ArticlesSliderGreen />,
  });

  editor.Blocks.add('SpecialitiesSlider', {
    label: 'Speciality',
    category: 'Home',
    content: <SpecialitiesSliderGreen />,
  });

  editor.Blocks.add('ShopByCategory', {
    label: 'ShopByCategory',
    category: 'Home',
    content: <ShopByCategoryGreen />,
  });

  editor.Blocks.add('FeedbackSlider', {
    label: 'Feedback',
    category: 'Home',
    content: <FeedbackSliderGreen />,
  });

  editor.Blocks.add('WhyUs', {
    label: 'Why Us',
    category: 'Home',
    content: <WhyUsGreen />,
  });

  editor.Blocks.add('TrustedPaymentPartners', {
    label: 'Payment Partner',
    category: 'Home',
    content: <TrustedPaymentPartnersGreen />,
  });

  editor.Blocks.add('Footer1', {
    label: 'Footer1',
    category: 'Home',
    content: <Footer1Green />,
  });
};
