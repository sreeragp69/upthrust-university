import personWearingHeadset from "../../assets/images/programbenefit/personwearingheadset.png";

export default function ProgramBenefitsSection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            How does our Cutting-Edge Program
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600">
            Benefit Students?
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left - VR Image */}
          <div className="md:col-span-8 flex justify-center md:justify-start">
            <div className=" ">
              <div className="bg-gradient-to-br from-green-300 to-green-200 rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-sm">
                <img
                  src={personWearingHeadset}
                  alt="Person wearing VR headset"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
            {/* Center - Description Text */}
            <div className="md:col-span-4 space-y-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our cutting-edge programs emphasize learning by doing rather
                than merely imparting academic knowledge. Students acquire
                practical skills that prepare them for the workforce right away
                through practical projects, real-world simulations, and
                industry-relevant technologies.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our approach, in contrast to traditional programs, places a
                strong emphasis on problem-solving, teamwork, and portfolio
                development, enabling students to boldly take on real issues,
                stand out to employers, and develop into competent professionals
                ready for success in the cutthroat job market of today.
              </p>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-wide">
                While Industry Advice Helps Students
              </h3>
            </div>

            {/* Benefit Items */}
            <div className="space-y-4">
              {/* Benefit 1 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-500 mt-1.5 md:mt-2"></div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Close the gap between the classroom and the workplace
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-3 md:gap-4">
                <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-pink-500 mt-1.5 md:mt-2"></div>
                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                  Gain effective learning through innovative teaching strategies
                </p>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={personWearingHeadset}
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
