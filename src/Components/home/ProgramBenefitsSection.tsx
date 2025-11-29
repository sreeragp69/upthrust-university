import personWearingHeadset from "../../assets/images/programbenefit/personwearingheadset.png";
import benefitStudent from "../../assets/images/programbenefit/benefitStudent.png";

export default function ProgramBenefitsSection() {
  return (
    <section className="bg-linear-to-b from-purple-50 to-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-2">
            How does our Cutting-Edge Program{" "} <br />
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl 2xl:text-5xl font-bold text-blue-600">
              {" "}
              Benefit Students?
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-8 lg:gap-12  items-center ">
          {/* Left - VR Image */}
          <div className="md:col-span-4 flex justify-center md:justify-end bg-[#cfffd1] relative p-8 md:py-16 xl:py-10 2xl:py-16 rounded-4xl">
            <div className=" ">
              <img
                src={personWearingHeadset}
                alt="Person wearing VR headset"
                className="lg:w-[30vw] lg:h-[55vh] rounded-2xl object-contain absolute hidden xl:block lg:bottom-0 xl:bottom-0 2xl:bottom-0 lg:-left-16 xl:-left-10 2xl:-left-16"
              />
            </div>
            {/* Center - Description Text */}
            <div className=" space-y-6 w-full xl:w-[55%] font-alexandria font-light">
              <p className="text-base md:text-lg xl:text-sm 2xl:text-base text-gray-800 leading-tight">
                Our cutting-edge programs emphasize learning by doing rather
                than merely imparting academic knowledge. Students acquire
                practical skills that prepare them for the workforce right away
                through practical projects, real-world simulations, and
                industry-relevant technologies.
              </p>
              <p className="text-base md:text-lg xl:text-sm 2xl:text-base text-gray-700 leading-tight">
                Our approach, in contrast to traditional programs, places a
                strong emphasis on problem-solving, teamwork, and portfolio
                development, enabling students to boldly take on real issues,
                stand out to employers, and develop into competent professionals
                ready for success in the cutthroat job market of today.
              </p>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="md:col-span-3 space-y-6 font-alexandria">
            <div>
              <h3 className="text-lg md:text-xl lg:text-4xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-wide">
                While Industry Advice <br /> Helps Students
              </h3>
            </div>

            {/* Benefit Items */}
            <div className="space-y-4">
              {/* Benefit 1 */}
              <div className="flex gap-3 md:gap-4">
                <div className="shrink-0 w-4 h-4 md:w-5 xl:w-3 xl:h-3 2xl:w-5 md:h-5 rounded-full bg-blue-500 mt-1.5 md:mt-2"></div>
                <p className="text-base md:text-lg xl:text-xl text-gray-800 leading-relaxed">
                  Close the gap between the classroom and the workplace
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-3 md:gap-4">
                <div className="shrink-0 w-4 h-4 md:w-5 xl:w-3 xl:h-3 2xl:w-5 md:h-5 rounded-full bg-pink-500 mt-1.5 md:mt-2"></div>
                <p className="text-base md:text-lg xl:text-xl text-gray-800 leading-relaxed">
                  Gain effective learning through innovative teaching strategies
                </p>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={benefitStudent}
                alt="Student using VR headset in classroom"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
