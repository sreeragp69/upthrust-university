import AboutSection from "../Components/home/AboutSection";
import CentreSection from "../Components/home/CentreSection";
import { HomeCourse } from "../Components/home/HomeCourse";
import SuccessStory from "../Components/home/SuccessStory";
import VideoSection from "../Components/home/VideoSection";
import CollabSection from "../Components/home/CollabSection";
const Home = () => {
  return (
    <div className="px-8">
      <HomeCourse />
      <AboutSection />
      <VideoSection />
      <SuccessStory />
      <CollabSection />
      <CentreSection />
    </div>
  );
};

export default Home;
