import AboutSection from "../Components/home/AboutSection";
import CentreSection from "../Components/home/CentreSection";
import { HomeCourse } from "../Components/home/HomeCourse";
import SuccessStory from "../Components/home/SuccessStory";
import VideoSection from "../Components/home/VideoSection";

const Home = () => {
  return (
    <div className="">
      <HomeCourse />
      <AboutSection />
      <VideoSection />
      <SuccessStory />
      <CentreSection />
    </div>
  );
};

export default Home;
