import Image from "next/image";
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
                    you&apos;re looking for inspiration, support, or
                    ready-to-use materials, you&apos;re in the right place.
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
                    creativity, and independent thought. Whether it&apos;s
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
                    repetition, and we guide learners to understand the
                    &quot;why&quot; behind the methods. This helps build lasting
                    knowledge and flexible problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <Image
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/mistakes-allow-thinking-to-happen-math-teacher-for-teachers-tom-schiesswald.jpg"
                alt="about Us image"
                width={564}
                height={646}
                priority // Ensures the image is preloaded for consistent rendering
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
