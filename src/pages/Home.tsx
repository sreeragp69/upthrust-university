import AboutSection from "../Components/home/AboutSection";
import CentreSection from "../Components/home/CentreSection";
import { HomeCourse } from "../Components/home/HomeCourse";
import SuccessStory from "../Components/home/SuccessStory";
import VideoSection from "../Components/home/VideoSection";
import CollabSection from "../Components/home/CollabSection";
import SalarySection from "../Components/home/SalarySection";
import HeroSection from "../Components/home/HeroSection";
import ProgramBenefitsSection from "../Components/home/ProgramBenefitsSection";
import CampusSection from "../Components/home/CampusSection";
import HowItWorks from "../Components/home/HowItWorks";
import BreackPointWrapper from "../Components/common/BreackPointWrapper";
const Home = () => {
  return (
    <div className="">
      {/* <HeroSection /> */}

      <BreackPointWrapper>
        <HomeCourse />
      </BreackPointWrapper>
      <BreackPointWrapper>
        <AboutSection />
      </BreackPointWrapper>
      <BreackPointWrapper>
        <ProgramBenefitsSection />
      </BreackPointWrapper>

      <VideoSection />

      <SalarySection />

      <BreackPointWrapper>
        <SuccessStory />
      </BreackPointWrapper>

      <BreackPointWrapper>
        <HowItWorks />
      </BreackPointWrapper>

      <CampusSection />

      <BreackPointWrapper>
        <CollabSection />
      </BreackPointWrapper>

      <CentreSection />
    </div>
  );
};

export default Home;
