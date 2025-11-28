import ChartsImage from "../../assets/images/home/chartsImage.svg";
import Title from "../common/Title";
import GlassCard from "../GlassCard";

const SalarySection = () => {
  const salaryData = [
    { role: "Junior Programmer", range: "₹3 LPA - ₹5 LPA" },
    { role: "Game Developer (2D/3D)", range: "₹3.3 LPA - ₹6 LPA" },
    { role: "Game Designer", range: "₹3.5 LPA - ₹6.5 LPA" },
    { role: "Digital Artist", range: "₹3 LPA - ₹5.5 LPA" },
    { role: "Junior 3D Modeler and Animator", range: "₹3 LPA - ₹5 LPA" },
    { role: "Multiplayer Integration Specialist", range: "₹3.5 LPA - ₹6 LPA" },
    { role: "AR/VR/XR Developer", range: "₹4 LPA - ₹7 LPA" },
    { role: "Game QA Tester", range: "₹2.5 LPA - ₹4.5 LPA" },
    { role: "Game Monetization Strategist", range: "₹3.5 LPA - ₹6 LPA" },
    { role: "Metaverse Specialist", range: "₹4 LPA - ₹7 LPA" },
  ];

  return (
    <div className="bg-black relative  flex justify-center items-center min-h-screen  overflow-hidden">
      {/* Blurred floating background image */}

      {/* Main content container */}
      <div className="relative  w-full  mx-auto">
        {/* Title */}
        <div className=" w-1/2 mx-auto">
          <Title
            className="text-center text-white  leading-16!"
            title="Graphs of Salaries, Student Achievement, and other"
          />
        </div>

        {/* Three cards layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 pr-7">
          {/* Left Card - Text Content */}
          <div className=" text-white relative flex flex-col gap-6 z-10 min-h-[400px] lg:min-h-[400px] md:min-h-auto md:p-6">
            <p className="text-white text-xs md:text-sm lg:text-base  xl:text-base  2xl:text-2xl font-light     font-alexandria lg:leading-6 xl:leading-6  2xl:leading-9!">
              Our programs are structured to produce quantifiable results, and
              graduates can confidently enter lucrative positions in the gaming
              sector. With competitive offers ranging from{" "}
              <span className=" font-medium uppercase text-[#FABB1E] font-alexandria">
                6 LPA to 22 LPA
              </span>
              , alumni have landed{" "}
              <span className=" font-medium uppercase text-[#FC4AFF] font-alexandria">
                Jobs as VR/AR Game Developers, Unity and Unreal Developers, Game
                Designers, NFT and Web 3.0 Game Developers, and 3D Artists.
              </span>{" "}
            </p>

            <p className="text-white text-xs md:text-sm lg:text-base  xl:text-base  2xl:text-2xl font-light     font-alexandria lg:leading-6 xl:leading-6  2xl:leading-9!">
              The success of our practical, industry-focused approach is
              reflected in these wage trends and student accomplishments, which
              show how hands-on learning leads to fulfilling employment and
              sustained professional development.
            </p>
          </div>

          {/* Middle Card - Jobs Number */}
          <div className="z-20 relative max-h-[93%] w-full! backdrop-blur-xl rounded-4xl bg-linear-to-t from-[#363636]/30 to-[#D9D9D9]/20 border border-white/50 shadow-lg flex flex-col items-center justify-center  p-10">
            <div className="flex flex-col items-center gap-32 px-16 ">
              <h3 className=" text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl leading-9 text-center">
                Experience Level of Gaming Jobs in 2025
              </h3>

              <div>
                <p className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-9 text-center">
                  <span className="bg-[#FABB1E] text-black font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-9 text-center rounded-lg p-0.5">
                    JOBS
                  </span>{" "}
                  Available in this Sector Currently
                </p>

                <p className="stroke-2 text-center text-white text-6xl stroke-black">
                  109,000
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Salary Table */}
          <GlassCard className="relative pt-10 pb-8 px-4 max-h-[93%] h-fit w-full! z-20">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center font-nunito">
              <span className=" font-medium  text-[#FABB1E] font-alexandria">
                {" "}
                Salary{" "}
              </span>
              Packages for Freshers in India
            </h3>

            <div className="flex flex-col border border-white/40 rounded-2xl inset-shadow-xl">
              {salaryData.map((item, index) => {
                const isLast = index === salaryData.length - 1;

                return (
                  <div
                    key={index}
                    className={`flex justify-between px-4 py-3.5 font-bold font-nunito
                    ${!isLast ? (index % 2 === 0 ? "bg-white/5" : "bg-white/[0.09]") : ""}
                  `}
                  >
                    <div className="text-sm font-bold text-white">
                      {item.role}
                    </div>
                    <div className="text-[0.85rem] text-white">
                      {item.range}
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
          <div className="absolute   w-[800px] h-[800px]  xl:w-[1000px] xl:h-[1000px] 2xl:w-[1200px] 2xl:h-[1200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 blur-[40px] animate-salary-float pointer-events-none z-0 md:w-[600px] md:h-[600px]">
            <img
              src={ChartsImage}
              alt="Charts"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalarySection;
