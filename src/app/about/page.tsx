import { FC } from "react";

const AboutPage: FC = () => {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    The Vision
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    We believe every pupil has the potential to become a
                    confident and curious mathematical thinker. Our aim is to
                    nurture understanding, not just memorisation, so that maths
                    becomes meaningful, relevant, and even enjoyable.
                  </p>
                </div>
              </div>
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Who This Is For
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Teachers, parents, and tutors who want to move beyond rote
                    learning and spark genuine interest in mathematics. Whether
                    you're looking for inspiration, support, or ready-to-use
                    materials, you're in the right place.
                  </p>
                </div>
              </div>{" "}
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    What We Offer
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Our resources are designed to promote discussion,
                    creativity, and independent thought. Whether it's
                    downloadable activities, concept explanations, or classroom
                    tools, everything supports a thinking-first approach to
                    maths.
                  </p>
                </div>
              </div>{" "}
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Why Thinking matters
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    In our approach, pupils are encouraged to ask questions,
                    make connections, and explore ideas. We value reasoning over
                    repetition, and we guide learners to understand the “why”
                    behind the methods. This helps build lasting knowledge and
                    flexible problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full group px-3.5 py-2 bg-gray-800 hover:bg-gray-900 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <svg
                className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                  stroke="white"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/mistakes-allow-thinking-to-happen-math-teacher-for-teachers-tom-schiesswald.jpg"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
