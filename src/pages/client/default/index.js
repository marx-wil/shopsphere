import FeaturedProducts from "../../../components/featuredProducts";
import FeaturesSection from "../../../components/featureSection";
import HeroHeaderSection from "../../../components/heroHeaderSection";
import PopularProducts from "../../../components/popular";
// import TestimonialSection from "../../../components/testimonials";
const ClientDefaultLayout = () => {
  return (
    <>
      <HeroHeaderSection />
      <FeaturesSection />
      {/* <TestimonialSection /> */}
      <PopularProducts />
      <FeaturedProducts />
    </>
  );
};

export default ClientDefaultLayout;
