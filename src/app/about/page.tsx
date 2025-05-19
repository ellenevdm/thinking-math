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
                  About Me
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Helping Teachers Help Children Love and Understand Maths
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    I believe that every child can do maths — and every teacher
                    can help make that happen. My role is to support teachers so
                    they can help children think clearly, solve problems, and
                    enjoy learning.
                  </p>
                </div>
              </div>
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    What I Do
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Through a programme called KILT, I work with schools in the
                    Garden Route area to help teachers:
                    <br />
                    <br />
                    • Discover better ways to teach maths for deeper
                    understanding
                    <br />
                    • Use accurate mathematical language, symbols, and methods
                    <br />• Build a growth mindset in themselves and their
                    learners
                  </p>
                </div>
              </div>{" "}
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    How I Work
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    I support teachers by running workshops, visiting
                    classrooms, working with school leaders, and gathering
                    feedback to keep improving the programme. My experience
                    ranges from early years to exam preparation, and I also
                    consult on university-level maths training and assessments.
                  </p>
                </div>
              </div>{" "}
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    My Approach
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    I draw on research from experts like Jo Boaler and Carol
                    Dweck (growth mindset), Deborah Ball (specialised maths
                    knowledge for teaching), and Craig Pournara (patterns and
                    change in maths). I believe maths is not just about numbers
                    — it’s about thinking. When teachers feel confident, their
                    learners do too.
                  </p>
                </div>
              </div>
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-800 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    The vision
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Let’s build a world where everyone believes they can do
                    maths — and has the tools to prove it.
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
