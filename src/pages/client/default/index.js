import FeaturedProducts from "../../../components/featuredProducts";
import FeaturesSection from "../../../components/featureSection";
import HeroHeaderSection from "../../../components/heroHeaderSection";
import TestimonialSection from "../../../components/testimonials";
const ClientDefaultLayout = () => {
  return (
    <>
      <HeroHeaderSection />
      <FeaturesSection />
      {/* <TestimonialSection /> */}
      <FeaturedProducts />
    </>
  );
};

export default ClientDefaultLayout;
