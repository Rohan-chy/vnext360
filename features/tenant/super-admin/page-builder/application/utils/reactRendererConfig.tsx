import AppBadge from '../../presentation/components/AppBadge';
import ArticlesSlider from '../../presentation/components/ArticlesSlider';
import Button from '../../presentation/components/Button';
import DoctorSlider from '../../presentation/components/DoctorSlider';
import Feature from '../../presentation/components/Feature';
import FeedbackSlider from '../../presentation/components/FeedbackSlider';
import FooterSection from '../../presentation/components/Footer';
import Footer1 from '../../presentation/components/Footer1';
import Header from '../../presentation/components/Header';
import Header1 from '../../presentation/components/Header1';
import HeroSlider from '../../presentation/components/HeroBanner';
import PackageSlider from '../../presentation/components/PackageGrid';
import TrustedPaymentPartners from '../../presentation/components/PaymentPartners';
import ProductSearch from '../../presentation/components/ProductSearch';
import Section from '../../presentation/components/Section';
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

export const reactRendererConfig = {
  // components: {
  //   Section: {
  //     component: Section,
  //     allowChildren: true,
  //     allowPropId: true,
  //     allowPropClassName: true,
  //     model: {
  //       defaults: {
  //         unstylable: ['background-color', 'padding', 'margin'],
  //       },
  //     },
  //   },

  //   Button: {
  //     component: Button,
  //     wrapperStyle: { display: 'inline-block' },
  //     props: () => [
  //       { name: 'label', type: 'text', value: 'Button' },
  //       { name: 'href', type: 'href' },
  //     ],
  //   },

  //   Header: {
  //     component: Header,
  //   },

  //   Header1: {
  //     component: Header1,
  //   },
  //   ServiceProviderSlider: {
  //     component: ServiceProviderSlider,
  //     wrapperStyle: { display: 'inline-block' },
  //   },
  //   HeroSlider: {
  //     component: HeroSlider,
  //     model: {
  //       defaults: {
  //         copyable: true,
  //         draggable: true,
  //         removable: true,
  //         resizable: false,
  //       },
  //     },
  //   },
  //   ProductSearch: {
  //     component: ProductSearch,
  //   },
  //   ServiceSearch: {
  //     component: ServiceSearch,
  //   },
  //   UploadPrescription: {
  //     component: UploadPrescription,
  //   },
  //   DoctorSlider: {
  //     component: DoctorSlider,
  //     // @ts-ignore
  //     // editorRender: ({ connectDom, props }) => {
  //     //   return (
  //     //     <div ref={connectDom}>
  //     //       <DoctorSlider {...props} />
  //     //     </div>
  //     //   );
  //     // },
  //   },
  //   PackageGrid: {
  //     component: PackageSlider,
  //   },
  //   ArticlesSlider: {
  //     component: ArticlesSlider,
  //   },
  //   SpecialitiesSlider: {
  //     component: SpecialitiesSlider,
  //   },
  //   ShopByCategory: {
  //     component: ShopByCategory,
  //   },
  //   FeedbackSlider: {
  //     component: FeedbackSlider,
  //   },
  //   WhyUs: {
  //     component: WhyUs,
  //   },
  //   TrustedPaymentPartners: {
  //     component: TrustedPaymentPartners,
  //   },
  //   FooterSection: {
  //     component: FooterSection,
  //   },
  //   Footer1: {
  //     component: Footer1,
  //   },
  // },

  // bodyAfter: () => <AppBadge />,

  components: {
    Header1: {
      component: Header1Green,
    },
    ServiceProviderSlider: {
      component: ServiceProviderGreen,
      wrapperStyle: { display: 'inline-block' },
    },
    HeroSlider: {
      component: HeroSlider,
      model: {
        defaults: {
          copyable: true,
          draggable: true,
          removable: true,
          resizable: false,
        },
      },
    },
    ProductSearch: {
      component: ProductSearchGreen,
    },
    ServiceSearch: {
      component: ServiceSearchGreen,
    },
    UploadPrescription: {
      component: UploadPrescriptionGreen,
    },
    DoctorSlider: {
      component: DoctorSliderGreen,
      // @ts-ignore
      // editorRender: ({ connectDom, props }) => {
      //   return (
      //     <div ref={connectDom}>
      //       <DoctorSlider {...props} />
      //     </div>
      //   );
      // },
    },
    PackageGrid: {
      component: PackageSliderGreen,
    },
    ArticlesSlider: {
      component: ArticlesSliderGreen,
    },
    SpecialitiesSlider: {
      component: SpecialitiesSliderGreen,
    },
    ShopByCategory: {
      component: ShopByCategoryGreen,
    },
    FeedbackSlider: {
      component: FeedbackSliderGreen,
    },
    WhyUs: {
      component: WhyUsGreen,
    },
    TrustedPaymentPartners: {
      component: TrustedPaymentPartnersGreen,
    },
    Footer1: {
      component: Footer1Green,
    },
  },

  styles: `
    html, body, #root {
      height: 100vh;
      margin: 0;
    }
  `,
};
