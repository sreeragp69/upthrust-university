import AboutSection from "../Components/home/AboutSection";
import CentreSection from "../Components/home/CentreSection";
import { HomeCourse } from "../Components/home/HomeCourse";
import SuccessStory from "../Components/home/SuccessStory";
import VideoSection from "../Components/home/VideoSection";
import CollabSection from "../Components/home/CollabSection";
import SalarySection from "../Components/home/SalarySection";
import HeroSection from "../Components/home/HeroSection";
import ProgramBenefitsSection from "../Components/home/ProgramBenefitsSection";
const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <HomeCourse />

      <ProgramBenefitsSection />
      <AboutSection />
      <VideoSection />
      
      <SalarySection />
      <SuccessStory />
      <CollabSection />
      <CentreSection />
    </div>
  );
};

export default Home;
