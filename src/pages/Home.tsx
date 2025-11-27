import AboutSection from "../Components/home/AboutSection";
import CentreSection from "../Components/home/CentreSection";
import HeroSection from "../Components/home/HeroSection";
import ProgramBenefitsSection from "../Components/home/ProgramBenefitsSection";

const Home = () => {
  return (
    <div className="">
      {/* <HomeCourse /> */}
      <HeroSection />
      <ProgramBenefitsSection />
      <AboutSection />
      <CentreSection />
    </div>
  );
};

export default Home;
