import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Typed from "typed.js";
import { FaLinkedin, FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import Footer from "./Footer";
import Projects from "./Projects";

const Container = () => {
  const location = useLocation();

  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // typed js
    const options = {
      strings: [
        "Let's connect on Linkedin.",
        "Let's connect on Github.",
        "Take a look at my resume below, contact details included.",
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, [location]);

  return (
    <section className="mx-auto flex w-11/12 flex-col lg:w-2/3 lg:flex-row lg:justify-between  lg:space-x-20">
      <aside className="w-full py-8 lg:w-2/6">
        <div>
          <h2 className="whitespace-nowrap text-5xl font-bold text-white">
            Erick Mucira
          </h2>
          <p className="my-3 text-lg text-white">Frontend Developer</p>
          <p className=" leading-6 tracking-wide opacity-80">
            I build user friendly websites amd turn the design mockups to
            maximize the user experience
            <br />
            <span ref={el} />
          </p>
        </div>

        <div className="mt-5 flex gap-1 text-2xl">
          <Link
            to="https://www.github.com/rickie-ui"
            className="rounded-md border-2 border-transparent p-1 transition-all hover:border-white/50"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/muciraerick"
            className="rounded-md border-2 border-transparent p-1 transition-all hover:border-white/50"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </div>

        <Link
          to="/files/ErickMuciraResume.pdf"
          className="mt-5 flex items-center gap-2 text-white transition-all hover:text-white/50 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          <span>View resume</span> <FaLongArrowAltRight />
        </Link>
      </aside>

      <main className="custom-scrollbar w-full overflow-y-auto scroll-smooth text-sm opacity-80 lg:max-h-[calc(100vh-3.5rem)] lg:w-2/4 lg:px-4 lg:py-8 lg:text-base">
        <span id="about"></span>
        <p>
          As a software developer with two years of experience, I possess a
          strong command of a diverse range of languages and frameworks
          including HTML, CSS, Tailwind CSS, Styled-Components, JavaScript,
          jQuery React.js, and Laravel. With expertise in front-end development,
          I am skilled in creating visually appealing and responsive web
          designs. Additionally, my proficiency extends to back-end development
          utilizing Laravel, enabling me to build robust and scalable
          applications.
          <br />
          <br />
          When I’m not at the computer, I usually listen to music, I'm a F1 fun
          supporting Mercedes AMG F1 Team.
        </p>

        <ol
          className="relative ml-2 mt-20 border-l border-white/50 font-medium lg:ml-0"
          id="experience"
        >
          <h3 className="my-2 ml-6 text-sm uppercase tracking-tight text-white md:hidden">
            Experience
          </h3>
          <li className="ml-4 rounded-md p-2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25314d] hover:shadow-lg  lg:mb-8">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>
            <time className="mb-2 text-sm leading-none  text-white/60">
              October 2021 - November 2022
            </time>
            <h3 className="text-md text-white">
              Software Developer - Freelance
            </h3>
            <p className="my-3 text-sm text-white/60">
              Revamped website flows and navigation menus, reducing the
              frequency of misdirected customer service queries by 30% and
              increasing traffic to previously neglected pages. Developed a job
              application site that the company adopted, fully improving the
              process of talent acquisition by 75%. Analyze, develop, and
              recommend engineering design approaches and develop project plans
              and estimates.
            </p>
          </li>

          <li className="ml-4 rounded-md p-2 transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#25314d] hover:text-red-500 hover:shadow-lg lg:mb-8">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 "></div>
            <time className="mb-2 text-sm leading-none  text-white/60">
              June 2022 - September 2022
            </time>
            <h3 className="text-md text-white">
              Junior Software Developer - Brance Technologies
            </h3>
            <p className="my-3 text-sm text-white/60">
              Implemented over 50 design mockups into functional code for user
              interfaces that improved user experience and performance.
              Collaborated with the engineering team to implement the data model
              on a property management system, optimized query speed by 75% and
              reduced manual data entry by 60%.
            </p>
          </li>
        </ol>

        <section className="mt-14 space-y-5" id="projects">
          <h3 className="my-2 text-sm uppercase tracking-tight text-white md:hidden">
            Projects
          </h3>
          <Projects />
        </section>
        <Footer />
      </main>
    </section>
  );
};

export default Container;
