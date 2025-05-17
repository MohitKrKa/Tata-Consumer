import React from "react";
import Page from "../Page";
import FBC4 from "/Sustainability/FBC/FBC4.png";
import FBC5 from "/Sustainability/FBC/FBC5.png";
import FBC6 from "/Sustainability/FBC/FBC6.png";
import FBC7 from "/Sustainability/FBC/FBC7.png";
import FBC8 from "/Sustainability/FBC/FBC8.png";
import FBC9 from "/Sustainability/FBC/FBC9.png";
import FBC10 from "/Sustainability/FBC/FBC10.png";
import FBC11 from "/Sustainability/FBC/FBC11.png";
import FBC12 from "/Sustainability/FBC/FBC12.png";
import FBC13 from "/Sustainability/FBC/FBC13.png";
import FBC14 from "/Sustainability/FBC/FBC14.png";
import FBC15 from "/Sustainability/FBC/FBC15.png";
import FBC16 from "/Sustainability/FBC/FBC16.png";
import FBC17 from "/Sustainability/FBC/FBC17.png";
import FBC18 from "/Sustainability/FBC/FBC18.png";
import FBC19 from "/Sustainability/FBC/FBC19.png";
import FBC20 from "/Sustainability/FBC/FBC20.png";
import FBC21 from "/Sustainability/FBC/FBC21.png";
import FBC22 from "/Sustainability/FBC/FBC22.png";
import FBC23 from "/Sustainability/FBC/FBC23.png";
import FBC24 from "/Sustainability/FBC/FBC24.png";
import FBC25 from "/Sustainability/FBC/FBC25.png";
import FBC26 from "/Sustainability/FBC/FBC26.png";
import FBC27 from "/Sustainability/FBC/FBC27.png";
import FBC28 from "/Sustainability/FBC/FBC28.png";
import FBC29 from "/Sustainability/FBC/FBC29.png";
import FBC30 from "/Sustainability/FBC/FBC30.png";
import FBC31 from "/Sustainability/FBC/FBC31.png";
import FBC32 from "/Sustainability/FBC/FBC32.png";
import FBC33 from "/Sustainability/FBC/FBC33.png";
import FBC34 from "/Sustainability/FBC/FBC34.png";
import FBC35 from "/Sustainability/FBC/FBC35.png";
import { motion } from "framer-motion";

const para =
  "The 'For Better Communities' pillarhighlights our unwavering commitment to prioritizing our people and communities as key stakeholders in all our initiatives. We strive to implement innovative, systemic solutions that enhance the quality of human life. This pillar also emphasizes our dedication to fostering diversity, equity, and inclusion within the workplace.";

const img1 = "/Sustainability/FBC/FBC1.png";
const img2 = "/Sustainability/FBC/FBC2.png";
const img3 = "/Sustainability/FBC/FBC3.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const imageCommonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 25, delay: 0.4 },
  },
};

const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // auto one-by-one
    },
  },
};

const ForBetterCommunities = () => {
  return (
    <>
      <div className="mt-10 ml-10 mr-10 text-[#969798] text-base">
        <Page
          text="Communities"
          head1="Thriving Together"
          text2={para}
          img1={img1}
          img2={img2}
          img3={img3}
        />

        {/* Page 1 */}

        <motion.div
          className="mt-10 flex   flex-col sm:flex-row gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // 60% in view triggers
          variants={parentVariants}
        >
          {/* Images Section */}
          <motion.div
            className="mt-10  flex flex-col sm:flex-row gap-10"
            variants={parentVariants}
          >
            <motion.img
              src={FBC4}
              alt=""
              className="w-[70vh] sm:w-[60vh]"
              variants={imageVariants}
            />
            <motion.div
              className="flex flex-col gap-10 sm:w-1/3 "
              variants={textVariants}
            >
              <div>
                <h1 className=" text-[#176ab4] text-2xl sm:text-3xl font-[500]">
                  VISION
                </h1>
                <p className="bg-gradient-to-r from-[#0db14e] to-[#10b0ef] bg-clip-text text-transparent font-[400] mt-7 text-xl sm:text-3xl">
                  Our vision is to enhance the quality of life, creating shared
                  value for our communities and foster an equitable, inclusive,
                  and safe culture for our employees.
                </p>
              </div>

              <img src={FBC6} alt="" className="w-[70vh] sm:w-[50vh]" />
            </motion.div>
            <motion.img
              src={FBC5}
              alt=""
              className="w-[70vh] sm:w-[50vh]"
              variants={imageVariants}
            />
          </motion.div>

          {/* Text Section */}
        </motion.div>

        {/* Page 2 */}
        <div className="flex flex-col lg:flex-row mt-10 bg-[#e8f7fd] p-4 gap-6">
          <div className="w-full lg:w-1/3">
            <img
              src={FBC7}
              alt="Fostering Workforce"
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col w-full lg:w-2/3 gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#1d6db5] text-2xl sm:text-3xl font-semibold">
                FOSTERING A DYNAMIC WORKFORCE
              </h2>
              <p className="">
                At Tata Group, our success is driven by the dedication,
                commitment, and talent of our people. We are committed to
                fostering an environment where every individual can thrive, grow
                and contribute to our collective success. We recognize that the
                foundation of our success lies in effective workforce
                management. By focusing on hiring and retaining top quality,
                diverse talent, reducing workforce turnover, and fostering an
                inclusive environment, we drive innovation and maintain a
                competitive edge.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <motion.img
                src={FBC8}
                alt=""
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageCommonVariants}
              />
              <p className="">
                # DJSI requirement: Breakdown of the new employee hires and/or
                internal hires data based on the following categories: Age
                group, Gender, and Management level, gender diversity target
                across each level, breakdown based on nationalities
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#e8f7fd]  p-4">
          <h2 className="text-[#26b7ef] text-2xl sm:text-3xl font-semibold">
            RECRUITING TALENT
          </h2>
          <p className="">
            Embracing the Tata Group's legacy of leadership and innovation, we
            are dedicated to cultivating recruitment strategies that magnetize
            top-tier talent. Our hiring practices ensure that every addition to
            our team not only thrives in their professional pursuits but also
            resonates with the core values of TCPL's ethos. In FY 2024-25, we
            welcomed 650+ new employees to the TCPL team, further strengthening
            our diverse and skilled workforce. Our organization embraces the
            natural progression of workforce dynamics, viewing changes not
            merely as departures but as valuable openings for new talent and
            opportunities for current employees' growth, ensuring the continual
            evolution and dynamism of our organization. We place a significant
            value on internal mobility, fostering a culture where employees are
            encouraged to broaden their horizons through upskilling and
            cross-departmental transitions. This approach has proven effective,
            with 20% of vacant roles successfully filled through internal
            transfers, reflecting the adaptability and preparedness of our
            employees to embrace new challenges and opportunities. In FY
            2024-25, voluntary attrition stood at 26%, with 26% women and 25%
            men leaving the organization. Additionally, at TCPL, we ensure
            business continuity, and we minimize impact of any necessary
            reductions through our Leadership Pipeline Process for fortifying a
            future ready organization. Vulnerability due to unforeseen events
            such as sudden resignations, illnesses, or other emergencies that
            could leave critical positions vacant are mitigated through
            successor identification. It helps in minimizing disruption by
            preparing for multitude of scenarios. This initiative showcases our
            commitment to inclusion as well as leadership and culture. It
            ensures a continuous flow of talent, ready to adapt to changes
            within newly acquired legal entities and evolving team structures.
            Also, our investment in young talent program is a mitigation
            strategy for ensuring that we build leaders within to ensure
            business continuity. Currently the % of Total Business Critical
            positions with at least 1 candidate in the timelines of Ready Now or
            Ready in 12-24 Months is 73%.{" "}
            <span className="text-4xl text-[#33b76e] font-[600]">38%</span> 38%
            of employees in our leadership pipeline have experienced internal
            movements within the past year.
          </p>
        </div>

        {/* Page 3 */}

        <div className="mt-10  gap-6 flex flex-col">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3 flex flex-col gap-4">
              <h2 className="bg-gradient-to-r from-[#16b252] to-[#04adc9] bg-clip-text text-transparent text-2xl font-semibold">
                We revolutionized our entry-level hiring practices by reaching
                over 3,200 students across more than 100 campuses within 48
                hours of launching our prestigious 'Emerging Leader Plus'
                program on LinkedIn.
              </h2>

              <p>
                We have introduced{" "}
                <span className="bg-gradient-to-r from-[#f8ea17] to-[#09a5cb] bg-clip-text text-transparent font-bold">
                  'Trailblazer Tracks'
                </span>{" "}
                to spotlight the career progression of our Leadership Pipeline
                Candidates internally and on social media platforms as they
                navigate through various roles within the organization. This
                initiative embodies{" "}
                <span className="font-bold">Tata Consumer Products'</span>{" "}
                ambition towards shaping a{" "}
                <span className="font-bold">'future-ready organization'</span>{" "}
                in line with our journey of{" "}
                <span className="font-bold">growth</span> and{" "}
                <span className="font-bold">transformation</span> towards a
                <span className="font-bold"> premier FMCG organization.</span>{" "}
                It displays our commitment to{" "}
                <span className="font-bold">nurture internal talent</span> and{" "}
                <span className="font-bold">embed Growth Mindset</span> and{" "}
                <span className="font-bold">Behaviors</span> in our
                organization's DNA.
              </p>

              {/* Highlight Box */}
              <div className="bg-[#f5f2ee] p-4 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">
                  <span className="bg-gradient-to-r from-[#09b04c] to-[#04adef] text-white inline-block p-2">
                    Employer of Choice for the Future through the Grow Beyond
                    Better 4.0 Challenge
                  </span>
                </h2>
                <h2 className="text-[#26b7ef] text-2xl sm:text-3xl font-semibold">
                  OBJECTIVE:
                </h2>
                <p>
                  To position TCPL as a top employer among emerging talent, the
                  'Grow Beyond Better 4.0' challenge aimed to boost our brand
                  presence in business schools and attract high-caliber students
                  by engaging them in a real-world business problem-solving
                  experience.
                </p>

                <h2 className="text-[#26b7ef] text-2xl sm:text-3xl font-semibold">
                  APPROACH:
                </h2>
                <p>
                  We launched the 'Grow Beyond Better 4.0' case study challenge,
                  targeting first-year business school students. The challenge
                  was designed to be intellectually stimulating and reflective
                  of real-world business scenarios, providing a platform for
                  students to demonstrate their strategic thinking and
                  problem-solving skills. A comprehensive outreach campaign was
                  executed, leveraging social media, campus engagements, and
                  alumni networks to maximize participation and visibility
                  across prestigious institutions.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <motion.img
                src={FBC9}
                alt=""
                className="w-full h-[60vh] max-h-[55vh] object-cover"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageCommonVariants}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 bg-[#f5f2ee]">
            <h2 className="text-[#26b7ef] text-2xl sm:text-3xl font-semibold">
              OUTCOME
            </h2>
            <p>
              The initiative was a resounding success, with a record-breaking
              13,400 registrations, marking a 335% increase from the previous
              year. The challenge resonated across 472 campuses, significantly
              enhancing TCPL's reputation as an employer of choice. The surge in
              engagement not only positioned TCPL as a thought leader in the
              FMCG sector but also created a robust pipeline of potential
              candidates eager to contribute to the company's growth and
              innovation-driven ethos. We have also received recognition in the
              Unstop Talent Meet 2025 in the following categories -
            </p>
            <img src="jhv" alt="Image will be here" className="w-full h-auto" />
          </div>
        </div>

        {/* Page 4 */}

        <div className="mt-10 p-4 gap-6 bg-[#eff9fc] flex flex-col">
          <div>
            <h2 className="text-[#1d6db5] text-2xl sm:text-3xl font-semibold">
              CULTIVATING DIVERSITY, EQUITY, AND INCLUSION (DEI)
            </h2>
            <br />
            <p>
              At TCPL, we are committed to fostering an inclusive workplace that
              celebrates diversity, promotes equity, and ensures that all
              employees feel valued and respected. By embracing diverse
              perspectives and creating equitable opportunities, we strive to
              build a more innovative, collaborative, and empathetic
              organization. Our dedication to DEI is reflected in our policies,
              practices, and everyday interactions, driving us to continuously
              improve and evolve. Our goal is to have 50% representation of
              women in our workforce across all locations by 2030, which
              currently stands at 45%. Maintaining our competitive advantage
              involves strategically placing the right talent in key positions
              and fostering a highly engaged workforce. To support this, we
              conducted an Inclusive Hiring workshop to equip our HR business
              associates and Talent Acquisition team with essential skills.
            </p>

            <motion.div
              className="flex flex-col lg:flex-row gap-6 mt-6 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }} // 60% in view trigger
            >
              <motion.img
                src={FBC10}
                alt=""
                className="w-full lg:w-1/2 h-auto object-cover rounded"
                variants={itemVariants}
              />

              <motion.h2
                className="bg-gradient-to-r from-[#16b252] to-[#04adc9] bg-clip-text text-transparent text-2xl font-semibold"
                variants={itemVariants}
              >
                We measure employee sentiments on the aspects of DEIB -
                Diversity commitment, Belonging, Inclusive Culture, Respect and
                Dignity, and Speak Up Culture, through our annual employee
                engagement survey - InterActions. In FY 2024-25, our DEIB score
                was at 78%.
              </motion.h2>
            </motion.div>
          </div>
        </div>

        <div className="p-4 gap-6 bg-[#eff9fc] flex flex-col">
          <div>
            <h2 className="text-[#1d6db5] text-2xl sm:text-3xl font-semibold">
              EMPOWERING OUR WORKFORCE
            </h2>
            <br />
            <h2 className="text-[#26b7ef] text-2xl sm:text-3xl font-semibold">
              BUILDING A CULTURE OF LEARNING AND DEVELOPMENT
            </h2>
            <br />
            <p>
              As we strive to become a distinguished global leader in our
              sector, we recognize that a future-ready workforce is key to
              achieving our vision. Our commitment to leadership excellence,
              continuous upskilling, and digital & functional expertise ensures
              that our employees are equipped to navigate the evolving business
              landscape. <br />
              Our learning strategy is designed to align with both employee
              aspirations and organizational priorities. It is structured as per
              the below mentioned focus areas:
            </p>

            <motion.div
              className="flex flex-col items-center justify-center mt-6 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }} // ← Triggers when 60% in view
            >
              <motion.img
                src={FBC11}
                alt=""
                className="w-full max-w-4xl h-auto object-contain"
                variants={itemVariants}
              />

              <motion.div className="w-full" variants={itemVariants}>
                <motion.h2
                  className="text-[#26b7ef] text-2xl sm:text-3xl font-semibold"
                  variants={itemVariants}
                >
                  Investing in Capability Building
                </motion.h2>

                <motion.p className="mt-2" variants={itemVariants}>
                  Our investment in training and development yields significant
                  business benefits, including:
                </motion.p>

                <motion.div
                  className="flex justify-center mt-4"
                  variants={itemVariants}
                >
                  <img
                    src={FBC12}
                    alt=""
                    className="w-full max-w-4xl h-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Page 5 */}
        <div className="mt-10 p-4 bg-[#ebeef0]">
          <div>
            <p className="font-semibold text-lg sm:text-xl md:text-2xl">
              Outlined below are our key training programs, strategically
              crafted to foster professional growth and enhance the skill set of
              our workforce.
            </p>
            <br />
            <h2 className="text-[#26b7ef] text-xl sm:text-2xl md:text-3xl font-semibold">
              LEADERSHIP INTERVENTIONS: STRENGTHENING OUR LEADERSHIP PIPELINE
            </h2>
            <br />
            <p className="text-base sm:text-lg">
              To build a future-ready workforce, we have developed a
              comprehensive leadership development strategy that empowers
              leaders at every level. Our programs, designed in partnership with
              TMTC (Tata Management Training Centre) and global institutions,
              focus on strategic thinking, decision-making, and people
              leadership.
            </p>
            <br />
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold inline-block border-b-2 border-[#16b252] bg-gradient-to-r from-[#16b252] to-[#04adc9] bg-clip-text text-transparent">
              a
            </h2>
            <br />
            <br />
            <h2 className="text-[#26b7ef] text-xl sm:text-2xl md:text-3xl font-semibold">
              Leadership Voyages: Preparing Mid-Senior Leaders for the Future
            </h2>
            <br />
            <p className="text-base sm:text-lg">
              A flagship General Management and Leadership Development Program,
              designed by SDA Bocconi School of Management, Italy, in
              partnership with TMTC. This program is tailored to Tata Consumer
              Products' growth ambitions and the evolving FMCG landscape.
            </p>
          </div>
          <br />

          {/* First Image & List Block */}
          <div className="flex flex-col items-center lg:flex-row text-base sm:text-lg lg:text-xl gap-6 justify-between">
            <div className="flex-1">
              <h2 className="font-bold">
                Built around six core pillars, Leadership Voyages develops
                leaders to:
              </h2>
              <br />
              <ul className="space-y-4">
                {[
                  "Strengthen & accelerate core business growth",
                  "Drive digital transformation & innovation",
                  "Unlock synergies across business functions",
                  "Create a future-ready organization",
                  "Explore new market opportunities",
                  "Embed sustainability in leadership practices",
                ].map((goal, index) => (
                  <li key={index} className="flex">
                    <span className="w-5 h-0.5 mt-2 mr-3 bg-[#5a93c6] rounded-sm shrink-0"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
              <br />
              <h2 className="font-bold">
                The learning journey is structured into three modules:
              </h2>
              <br />
              <ul className="space-y-4">
                {[
                  "Change: Digital transformation & market expansion",
                  "Strategy: Business growth & sustainability",
                  "People: Cross-functional collaboration & organizational readiness",
                ].map((goal, index) => (
                  <li key={index} className="flex">
                    <span className="w-5 h-0.5 mt-2 mr-3 bg-[#5a93c6] rounded-sm shrink-0"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.img
              src={FBC13}
              alt=""
              className="w-full lg:w-[50%] h-auto object-contain"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
            />
          </div>

          <br />
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold inline-block border-b-2 border-[#16b252] bg-gradient-to-r from-[#16b252] to-[#04adc9] bg-clip-text text-transparent">
            b
          </h2>
          <br />
          <br />
          <h2 className="text-[#26b7ef] text-xl sm:text-2xl md:text-3xl font-semibold">
            Leadership Horizons: Elevating Senior Leadership Capabilities
          </h2>
          <br />
          <p className="text-base sm:text-lg">
            Designed for senior leaders, this high-impact program, developed in
            partnership with TMTC & SHL, focuses on strategic leadership,
            business transformation, and decision-making.
          </p>
          <br />

          {/* Second Image & List Block */}
          <div className="flex flex-col items-center lg:flex-row text-base sm:text-lg lg:text-xl gap-6">
            <motion.img
              src={FBC14}
              alt=""
              className="w-full lg:w-[50%] h-auto object-contain"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
            />
            <div className="flex-1">
              <h2 className="font-bold">Key Objectives:</h2>
              <br />
              <ul className="space-y-4">
                {[
                  "Strengthen leadership confidence, skills, and mindset for higher responsibilities",
                  "Enhance self-awareness through behavioral assessments & leadership reflections",
                  "Guide leaders in developing personalized growth roadmaps aligned with business needs",
                  "Provide targeted group coaching to translate insights into real-world leadership impact",
                ].map((goal, index) => (
                  <li key={index} className="flex">
                    <span className="w-5 h-0.5 mt-2 mr-3 bg-[#5a93c6] rounded-sm shrink-0"></span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
              <br />
              <p>
                This initiative is pivotal in shaping a leadership team that
                drives transformation and long-term business success.
              </p>
            </div>
          </div>
        </div>

        {/* Page 6 */}
        <div className="bg-[#ebeef0] p-4">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold inline-block border-b-2 border-[#16b252] bg-gradient-to-r from-[#16b252] to-[#04adc9] bg-clip-text text-transparent">
              c
            </h2>
            <br />
            <br />
            <h2 className="text-[#5fc8d3] text-xl sm:text-2xl md:text-3xl font-semibold">
              TMTC-Led Programs
            </h2>
            <br />
            <p className="text-base sm:text-lg">
              We also leverage the Group's Learning and Development arm—Tata
              Management Training Centre (TMTC)— to strengthen leadership
              development across all levels. This includes flagship programs
              such as Blue Mint, TGeLS for early-career professionals, TGELS and
              TGSLS for mid-to-senior-level leaders, and the WAVE Series for
              women leaders. <br />
              Through these leadership development initiatives, over 40% of our
              leadership pipeline has participated in at least one structured
              program, reinforcing our commitment to building future-ready
              leaders.
            </p>
            <br />
            <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
              FUNCTIONAL SKILLS - SKILL UP! DRIVING FUNCTIONAL EXPERTISE
            </h2>
            <p className="text-base sm:text-lg">
              In an increasingly dynamic business landscape, functional
              expertise is key to sustained performance. Under Skill Up!, we
              have launched targeted learning interventions across Sales,
              Operations, Finance, Marketing, and Digital, ensuring that our
              workforce is equipped with cutting-edge capabilities.
            </p>
            <br />
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1">
                <h2 className="text-[#5fc8d3] text-xl sm:text-2xl md:text-3xl font-semibold">
                  Building Digital & Functional Capabilities
                </h2>
                <br />
                <ul className="space-y-4">
                  {[
                    {
                      highlight: "Sales & Digital Transformation:",
                      rest: " Investments in Cloud Computing, AI, Data Analytics, Agile Project Management, and SAP S/4HANA.",
                    },
                    {
                      highlight: "AI-Powered Innovation:",
                      rest: " Leveraging AI/ML applications such as Recommendation Engines, Trade Promotion Optimization, and Recipe Optimization to enhance decision-making.",
                    },
                    {
                      highlight: "Next-Gen Software Development:",
                      rest: " Strengthening Enterprise Architecture, Mobile Development, Salesforce, and Database Management.",
                    },
                  ].map((goal, index) => (
                    <li key={index} className="flex">
                      <span className="w-5 h-0.5 mt-2 mr-3 bg-[#5a93c6] rounded-sm shrink-0"></span>
                      <span>
                        <strong>{goal.highlight}</strong>
                        {goal.rest}
                      </span>
                    </li>
                  ))}
                </ul>
                <br />
                <h2 className="text-[#5fc8d3] text-xl sm:text-2xl md:text-3xl font-semibold">
                  Function-Specific Upskilling
                </h2>
                <br />
                <ul className="space-y-4">
                  {[
                    {
                      highlight: "Operations:",
                      rest: " Over 6,000 learning hours in Manufacturing Excellence, Strategic Negotiation, and Supply Chain Analytics.",
                    },
                    {
                      highlight: "Finance:",
                      rest: " Upskilling in AI-powered financial analytics, P&L management, and strategic negotiations.",
                    },
                    {
                      highlight: "Marketing:",
                      rest: " Enhancing expertise in consumer insights, digital marketing, and data-driven brand building.",
                    },
                  ].map((goal, index) => (
                    <li key={index} className="flex">
                      <span className="w-5 h-0.5 mt-2 mr-3 bg-[#5a93c6] rounded-sm shrink-0"></span>
                      <span>
                        <strong>{goal.highlight}</strong>
                        {goal.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <motion.img
                  src={FBC15}
                  alt=""
                  className="w-full max-w-[80vh] h-auto mx-auto lg:mx-0"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={imageCommonVariants}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Page 7 */}
        <div className="bg-[#ebeef0] p-4">
          <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
            PROFESSIONAL SKILLS
          </h2>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold inline-block border-b-2 border-[#16b252] bg-gradient-to-r from-[#16b252] to-[#04adc9] bg-clip-text text-transparent">
            a
          </h2>

          <br />
          <br />

          <p className="text-base sm:text-lg">
            In FY 2024-25, 25 high-potential management trainees, part of our
            Emerging Leaders Program, embarked on a 4 day transformative
            learning journey designed to accelerate their transition from
            “campus to corporate” in addition to their year long functional and
            cross functional stints. To equip them with the right mindset and
            skills for success, we curated two structured interventions focused
            on critical behaviors and competencies essential for early-career
            talent. These interventions were thoughtfully aligned with our
            Growth Mindset behaviors and delivered through an engaging four- day
            experiential format. Leveraging immersive methodologies such as
            theatre-based learning, role plays, and interactive treasure hunts,
            the program provided a dynamic learning experience that enhanced
            their communication, decision making, problem-solving,
            collaboration, and self leadership capabilities. This initiative
            reflects our commitment to developing future-ready professionals who
            will drive innovation and excellence at TCP.
          </p>

          <br />

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold inline-block border-b-2 border-[#16b252] bg-gradient-to-r from-[#16b252] to-[#04adc9] bg-clip-text text-transparent">
            b
          </h2>

          <br />
          <br />

          <p className="text-base sm:text-lg">
            Recognizing the pivotal role of frontline managers in driving
            business success, we launched Aarohan—a transformative, immersive
            learning journey designed to elevate managerial capabilities at the
            frontline. Spanning eight weeks with 16 hours of structured
            learning, Aarohan blends a multi-faceted approach, integrating:
          </p>

          <br />

          <ul className="space-y-4 text-base sm:text-lg">
            {[
              "Cutting-edge psychometric assessments for deep self-reflection and developmental insights",
              "Curated pre-reads and post-reads to reinforce learning and encourage application",
              "Real-world assignments and case-based exercises for experiential learning",
              "Engaging virtual classroom sessions to foster peer learning, knowledge exchange, and real-time problem-solving",
            ].map((goal, index) => (
              <li key={index} className="flex">
                <span className="w-5 h-0.5 mt-2 mr-3 bg-[#5a93c6] rounded-sm shrink-0"></span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>

          <br />

          <p className="text-base sm:text-lg">
            Grounded in three strategic capability pillars, the program equips
            managers with the tools to:
          </p>

          <br />

          <ul className="space-y-4 text-base sm:text-lg">
            {[
              "Lead Self - Build self-awareness, personal effectiveness, and resilience",
              "Lead Teams - Strengthen people management, coaching, and collaboration skills",
              "Drive Change & Results - Enhance execution excellence, agility, and business impact",
            ].map((goal, index) => (
              <li key={index} className="flex">
                <span className="w-5 h-0.5 mt-2 mr-3 bg-[#5a93c6] rounded-sm shrink-0"></span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>

          <br />

          <p className="text-base sm:text-lg">
            Since its launch, Aarohan has equipped 100 frontline managers across
            India Sales & RTD functions with essential people managerial
            capabilities. We plan to scale the program to 400+ managers across
            business functions in FY 2025-26— further reinforcing our commitment
            to developing high-performing, equipped managers who drive
            organizational success from the ground up.
          </p>

          <br />

          <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
            ORGANIZATION-WIDE LEARNING
          </h2>

          <br />

          <h2 className="text-[#5fc8d3] text-xl sm:text-2xl md:text-3xl font-semibold">
            LinkedIn Learning with AI-Powered Content
          </h2>

          <br />

          <div className="flex flex-col lg:flex-row gap-4">
            <p className="w-full lg:w-2/3 text-base sm:text-lg">
              To complement structured learning interventions, all global graded
              full-time employees have access to LinkedIn Learning—an AI-driven,
              personalized platform that tailors content recommendations based
              on individual roles and career aspirations. Designed for
              efficiency, LinkedIn Learning minimizes search time and maximizes
              skill-building across leadership, digital, and functional
              expertise. By fostering a culture of continuous learning,
              leadership excellence, and digital transformation, Tata Consumer
              Products is equipping its workforce to drive business success in a
              rapidly evolving world.
            </p>
            <p className="bg-[#f1eee9] w-full lg:w-1/3 p-4 text-xl sm:text-2xl">
              We also provide access to various learning platforms, including
              LinkedIn Learning, which facilitated{" "}
              <span className="bg-gradient-to-r from-[#f5e82f] to-[#cad796] bg-clip-text text-transparent">
                20494{" "}
              </span>
              total learning hours in FY 2024-25.
            </p>
          </div>
        </div>

        {/* Page 8 */}
        <div className="mt-10 bg-[#e1f3fd] p-4">
  <h2>Heading</h2>
  <br />
  <h1 className="text-black text-2xl md:text-4xl">
    Program Objective/ Business Benefit
  </h1>
  <br />

  {/* First Flex Section */}
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full md:w-1/3">
      <h2 className="text-[#49c0ce] border-b-2 inline-block text-lg font-semibold">
        Facilitate Transformative Learning
      </h2>
      <p>
        Enable managers to discover and implement critical learning experiences...
      </p>
      <br />
      <h2 className="text-[#49c0ce] border-b-2 inline-block text-lg font-semibold">
        Drive Self-Discovery and Growth
      </h2>
      <p>
        Promote self-awareness among participants through structured assessments...
      </p>
    </div>

    <div className="w-full md:w-1/3">
      <h2 className="text-[#49c0ce] border-b-2 inline-block text-lg font-semibold">
        Engage in Meaningful Collaboration
      </h2>
      <p>
        Foster a collaborative environment where managers can engage...
      </p>
      <br />
      <h2 className="text-[#49c0ce] border-b-2 inline-block text-lg font-semibold">
        Implement Actionable Strategies
      </h2>
      <p>
        Equip managers with practical tools and strategies to drive behavioral change...
      </p>
    </div>

    <div className="w-full md:w-1/3">
      <h2 className="text-[#49c0ce] border-b-2 inline-block text-lg font-semibold">
        Align with Organizational Goals
      </h2>
      <p>
        Ensure that the development journey aligns with Tata Consumer Products...
      </p>
    </div>
  </div>

  <br />
  <h1 className="text-black text-2xl md:text-4xl">Impact of business benefits</h1>
  <br />

  {/* Second Flex Section */}
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full md:w-1/3">
      <h2 className="text-[#53c67e] border-b-2 inline-block text-lg font-semibold">
        Heightened Engagement Levels
      </h2>
      <p>
        The program cultivates an atmosphere of openness...
      </p>
      <br />
      <h2 className="text-[#53c67e] border-b-2 inline-block text-lg font-semibold">
        Stronger Interpersonal Networks
      </h2>
      <p>
        Participants build a robust network of peer connections...
      </p>
      <br />
      <h2 className="text-[#53c67e] border-b-2 inline-block text-lg font-semibold">
        Culture of Continuous Improvement
      </h2>
      <p>
        The emphasis on behavioral change and self-direction...
      </p>
    </div>

    <div className="w-full md:w-1/3">
      <h2 className="text-[#53c67e] border-b-2 inline-block text-lg font-semibold">
        Practical Application of Insights
      </h2>
      <p>
        Managers will gain real-world insights and practical experience...
      </p>
      <br />
      <h2 className="text-[#53c67e] border-b-2 inline-block text-lg font-semibold">
        Sustainable Behavioral Transformation
      </h2>
      <p>
        The structured approach to mentoring and feedback...
      </p>
    </div>

    <div className="w-full md:w-1/3">
      <h2 className="text-[#53c67e] border-b-2 inline-block text-lg font-semibold">
        Increased Organizational Insight
      </h2>
      <p>
        Participants will develop a deeper understanding...
      </p>
      <br />
      <h2 className="text-[#53c67e] border-b-2 inline-block text-lg font-semibold">
        Enhanced Confidence and Self-Efficacy
      </h2>
      <p>
        The program will empower managers with the confidence...
      </p>
    </div>
  </div>

  <br />
  <motion.img
    src={FBC18}
    alt=""
    className="w-full md:w-[80vw]"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    variants={imageCommonVariants}
  />
</div>


        {/* Page 9 */}
        <div className="mt-10 p-4">
          <h1 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
            ENSURING EMPLOYEE WELLBEING AND SUPPORT
          </h1>

          <br />

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2   space-y-4">
              <p>
                At TCPL, we foster a progressive and inclusive work culture that
                prioritizes employee well-being through flexible work
                arrangements. Our policies are designed to support work-life
                balance by offering flexible working hours and comprehensive
                work-from-home options, ensuring adaptability to individual
                needs.
              </p>
              <p>
                To support new mothers, we provide part-time work options for
                those returning from maternity leave, facilitating a smooth
                transition back into the workforce. Additionally, nursing
                mothers have access to breastfeeding/lactation facilities, with
                dedicated Mom's Rooms available in our Mumbai, Delhi, Bangalore,
                and Kolkata offices. We have introduced an industry-leading
                'Nanny' allowance for women employees across India, providing
                financial assistance for childcare and enabling them to balance
                their professional and personal responsibilities effectively.
              </p>
              <p>
                Recognizing the importance of parental support, TCPL offers 26
                weeks of paid leave for primary caregivers, enabling quality
                child- rearing time, while non-primary caregivers receive two
                weeks of paid leave to support their families during the crucial
                early stages of their own or adopted child's life.
              </p>
              <p>
                We also implement a comprehensive wellness program annually,
                encompassing stress management, mental health support, physical
                fitness through sports, and financial management. Sponsored
                health checks are conducted annually, with extended benefits to
                family members at discounted rates.
              </p>
              <p>
                We offer assistance with hospital stays, discounts on
                medications, lab tests, and our insurance includes OPD
                reimbursement. Additionally, we have doctor visits at our office
                locations on alternate days, along with 24/7 teleconsultation
                accessible to all employees with 26+ specialty doctors. We have
                also introduced discounted rates on gym memberships through our
                partnership with Cult Fit, encouraging our people to take care
                of their physical wellness.
              </p>
              <p>
                We have introduced a Well-being App in our international
                business, underscoring our commitment to prioritising the health
                of our personnel wherever they are present. In the UK, trained
                Mental Health First Aiders are available to guide and support
                team members in need of assistance.
              </p>
              <p>
                Policies related to these aspects are accessible to all
                employees on our intranet portal, ensuring that all employees
                are informed and may suitably use these beneficial provisions.
                All articles and webinar recordings are also available on our
                Wellness page.
              </p>
              <p>
                Beyond flexibility, we emphasize holistic well-being through
                various employee support programs. We conduct wellness
                conversations to encourage mental and emotional well-being. EAP
                Services are made available to all employees, with expert
                psychologists and psychiatrists available 24/7 to support mental
                health needs. There are provisions for sabbatical leaves, if
                required, to help employees manage personal and professional
                priorities effectively.
              </p>
              <p>
                At TCPL, we are committed to empowering our employees to thrive
                and achieve their full potential, both personally and
                professionally. Together, we are building a brighter future.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <motion.img
                src={FBC16}
                alt="Employee Wellbeing"
                className="w-full h-auto rounded-lg"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageCommonVariants}
              />
            </div>
          </div>
        </div>

        {/* Page 10 */}
        <div className="mt-10 p-4 space-y-4">
          <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
            ENHANCING EMPLOYEE ENGAGEMENT
          </h2>

          <p>
            Our annual employee engagement survey is a critical tool for
            understanding the organization's workforce's pulse. By actively
            listening to team members at different stages of the employee
            lifecycle, we gather valuable feedback, identify areas for
            improvement, and enhance the overall employee experience. The
            Executive Committee continues to adopt a streamlined approach to the
            survey process, conducting it annually. This year, we leveraged
            digital tools to analyze and cascade the results seamlessly in real
            time, from senior leadership to the entire organization. This
            approach ensured that feedback was promptly addressed, and action
            plans were swiftly implemented.
          </p>
          <p>
            The qualitative and quantitative insights collected through the
            survey were reviewed and analyzed. The feedback was then cascaded to
            employees through Focus Group Discussions, where actions were
            collaboratively decided upon by the teams and their respective
            people managers. These focused group discussions led to the design
            of action plans, which were reviewed by senior leadership at regular
            intervals and communicated to the organization at large.
          </p>
          <p>
            Our annual employee engagement survey provides critical insights
            into workplace satisfaction. In the fiscal year 2024-25, we
            successfully achieved our goal of 75, by attaining an Overall
            Engagement Index score of 75.
          </p>

          <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
            This index is an average of three indicators:
          </h2>
          <br />
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src={FBC19}
              alt="Engagement Indicator 1"
              className="w-full md:w-1/2 h-auto rounded-md"
            />
            <img
              src={FBC20}
              alt="Engagement Indicator 2"
              className="w-full md:w-1/2 h-auto rounded-md"
            />
          </div>
        </div>

        {/* Page 11 */}
        <div className="mt-10 p-4 space-y-4">
          <p className="font-semibold text-3xl">
            This year, we introduced two new indices to further enhance our
            understanding of employee engagement:
          </p>
          <div className="bg-[#f9f7f5] flex flex-col md:flex-row p-4 gap-8 ">
            <div>
              <img src="sd" alt="svg will be here" />
              <h2 className="text-[#3dbd6c] text-2xl font-[600]">
                Ethics Index:
              </h2>
              <p>
                This measures employees' perception of the ethical standards
                within the organization. It assesses how well the company
                upholds its values and principles, and whether employees feel
                that ethical behavior is encouraged and rewarded. For FY
                2024-25, the Ethics Index score is 85.
              </p>
              <br />
              <div className="border-t-2">
                <br />
                <img src="sd" alt="svg will be here" />
                <h2 className="text-[#3dbd6c] text-2xl font-[600]">
                  Integration Index:
                </h2>
                <p>
                  This evaluates how well employees feel integrated into the
                  company culture and their teams. It looks at factors such as
                  inclusivity, collaboration, and the effectiveness of
                  communication across different departments. The Integration
                  Index score for this year is 83.
                </p>
                <p>
                  These new indices provide a more comprehensive view of our
                  organizational health and help us identify specific areas for
                  improvement. By addressing these areas, we aim to foster a
                  more ethical, inclusive, and collaborative work environment.
                </p>
                <p>
                  This streamlined and responsive approach to employee
                  engagement has helped us foster a more connected and motivated
                  workforce, driving our collective success forward.
                </p>
                <br />
                <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
                  ENHANCING EMPLOYEE GROWTH THROUGH FEEDBACK
                </h2>
                <br />
                <p>
                  To ensure continuous feedback and development, we employ
                  various performance management assessments, including
                  Management by Objectives and agile conversations. Performance
                  reviews are conducted annually, supplemented by ongoing
                  evaluations. We emphasize frequent and meaningful
                  conversations—both formal and informal—to foster a
                  high-performance culture.
                </p>
                <p>
                  Through our Conversation Framework, which includes Performance
                  Planning, Mid-Year Review, Year-End Review, and Communication
                  discussions, employees and managers are encouraged to engage
                  in clear and candid dialogues throughout the year. We also use
                  statistical methods, such as the bell-curve methodology, to
                  assess and differentiate performance, ensuring each employee's
                  contributions align with their grade and role within the
                  organization.
                </p>
              </div>
            </div>
            <div>
              <motion.img
                src={FBC21}
                alt=""
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageCommonVariants}
              />
            </div>
          </div>
        </div>

        {/* Page 12 */}
        <div className="mt-10 p-4 bg-[#f9f7f5] space-y-8">
          {/* Top Section: Text and Image */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-4 md:w-2/3">
              <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
                CULTIVATING A STRONG CULTURE OF SAFETY
              </h2>

              <p>
                Our unwavering dedication to cultivating a strong culture of
                safety is encapsulated in our Safety, Health and Wellbeing
                Policy. This policy is the cornerstone of our strategy to
                implement robust safety protocols that safeguard our assets and
                the health of our employees. We have implemented structured
                programs and interventions to establish TCPL's H&S Policy and
                program at Capital Foods and Organic India. We have established
                a thorough Occupational Health and Safety Management System that
                includes detailed risk assessments, customized action plans, and
                emergency response procedures. The Health & Safety and
                Environment Management System process has been renewed to
                conform to ISO 45001 & ISO 14001 standards, with actions taken
                towards self-reliance in implementing systems and compliance
                in-house.
              </p>
              <p>
                Our commitment to upholding stringent OHS standards is evidenced
                by milestones such as achieving ISO 45001 certification for xx%
                of our facilities worldwide (plantations excluded), conducting
                extensive safety training initiatives, and maintaining an
                exemplary safety track record. In FY 2024-25, our corporate team
                conducted xx distinct safety training programs, engaging around
                xxx employees for a total of xxx hours of safety training.
              </p>
              <p>
                Governance Councils have been established with the Product
                Supply Organization (PSO) to drive Operational Safety
                Excellence. These councils facilitate a seamless communication
                channel both from the top-down and bottom-up.
              </p>
              <p>
                Our progress towards reducing or preventing health risks is
                constantly evaluated against set targets, with internal
                inspections conducted periodically. Our incident reporting and
                investigation process has been revamped to include minor
                incidents, as well. We have established protocols for
                investigating all work-related injuries, illnesses, and
                incidents. We take a proactive approach to Occupational Health
                and Safety (OHS) by conducting comprehensive risk and hazard
                assessments to identify potential workplace hazards. To mitigate
                these risks, we implement targeted action plans with clear,
                measurable objectives while also ensuring robust emergency
                preparedness and response measures. Several safety improvement
                actions have been initiated to minimize safety risks, including
                assessing and strengthening the structural stability of the
                plant and eliminating manual handling of chemicals through
                process improvements. Operator engagement has been improved
                through training and behavioral interventions. Safety during
                intervention activities such as cleaning, setup changes, and
                maintenance has also been enhanced. Additionally, we run Health
                & Safety campaigns focused on specific hazards such as
                electrical safety, hand injuries, and working at heights,
                reinforcing proper control measures to prevent accidents. A
                recent example of this commitment is the Machine Safety Risk
                Assessment (MSRA), conducted to identify hazards related to hand
                injuries and implement corrective and preventive measures.
              </p>
              <p>
                Our ongoing training efforts and improved safety protocols have
                strengthened our safety culture, resulting in zero fatalities
                among employees and contractors and a low Lost Time Injury
                Frequency Rate (LTIFR) of xxx for employees and xxx for
                contractors. Additionally, OHS considerations are integrated
                into our procurement and contractual processes.
              </p>
              <p>
                To set the right expectations and promote a positive safety
                culture, we have introduced a reward and recognition program for
                safe behaviors and a consequence management system to address
                unsafe behaviors. Looking ahead, we are dedicated to maintaining
                this proactive stance, utilizing data to evaluate performance
                and drive ongoing enhancements, and nurturing a culture where
                safety is an integral part of our daily operations.
              </p>
            </div>

            <div className="md:w-1/3">
              <img
                src={FBC22}
                alt="Safety culture visual"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>

          {/* Bottom Section: Highlights Grid */}
          <div className="bg-[#f9f7f5] border border-[#5b95c9] p-4 md:p-6 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>
                Proactive safety reporting of unsafe situations has increased by
                <span className="bg-gradient-to-r text-2xl from-[#faeb29] to-[#009bdb] bg-clip-text text-transparent">
                  {" "}
                  1.7 times
                </span>{" "}
                compared to FY24.
              </p>
              <p>
                H&S training manhours have started at 94,000, a
                <span className="bg-gradient-to-r text-2xl from-[#faeb29] to-[#009bdb] bg-clip-text text-transparent">
                  {" "}
                  30% increase{" "}
                </span>
                from FY24.
              </p>
              <p>
                All CFAs, Stand-Alone Warehouses, and Raw Tea Warehouses are set
                to be
                <span className="bg-gradient-to-r text-2xl from-[#faeb29] to-[#009bdb] bg-clip-text text-transparent">
                  {" "}
                  certified to ISO 45001
                </span>{" "}
                during this financial year.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                <span className="bg-gradient-to-r text-2xl from-[#faeb29] to-[#009bdb] bg-clip-text text-transparent">
                  Six safety promotional campaigns
                </span>{" "}
                have been organized this financial year ...
              </p>
              <p>
                Organic India, Barabanki Plant EHS Management system is
                <span className="bg-gradient-to-r text-2xl from-[#faeb29] to-[#009bdb] bg-clip-text text-transparent">
                  {" "}
                  certified to ISO 45001:2018 and ISO 14001:2015
                </span>{" "}
                during this financial year 2025.
              </p>
            </div>
          </div>
        </div>

        {/* Page 13 */}
        <div className="mt-10 bg-[#f8f6f4] p-4 sm:p-6 md:p-10 space-y-4">
          <img
            src={FBC23}
            alt="DO-EHS dashboard"
            className="w-full h-auto object-contain"
          />

          <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
            DO- EHS: A DIGITAL PLATFORM FOR EHS MANAGEMENT
          </h2>

          <p className="text-sm sm:text-base leading-relaxed">
            We developed the Digitally Operational (DO) – EHS tool to digitize
            all key operational EHS tasks, including Safety Observation
            Reporting, Project Safety and Work Permits, Inspections &
            Monitoring, Audit and Incident Management, and H&S Performance
            Measurement. Available on both web and mobile (with offline access),
            the tool ensures seamless task execution by associate company
            employees in line with TCPL's digital policy. It features real-time
            dashboards for leadership and built-in performance evaluation and
            analytics for continuous improvement.
          </p>

          <img
            src={FBC24}
            alt="DO-EHS mobile interface"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Page 14 */}
        <div className="mt-10 p-4 space-y-6 bg-[#f9f7f5]">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-4 flex-1">
              <h2 className="text-[#1d6db5] text-2xl sm:text-3xl font-semibold">
                PROMOTING EQUITABLE LABOR PRACTICES AND WORKPLACE ETHICS
              </h2>
              <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
                UPHOLDING HUMAN RIGHTS
              </h2>
              <p>
                We are dedicated to safeguarding human rights across all aspects
                of our operations and value chain. In alignment with this
                commitment and the Tata Group's human rights vision, we have
                established a Business and Human Rights Policy. This policy
                explicitly condemns all forms of harassment—whether mental,
                physical, sexual, or otherwise—and maintains a zero- tolerance
                stance toward any form of discrimination. It mandates that any
                discriminatory behavior or harassment will result in appropriate
                corrective or disciplinary action.
              </p>
              <p>
                The policy also outlines our proactive efforts to prevent
                incidents of discrimination and harassment in the workplace,
                supported by targeted training programs. Oversight of this
                framework is provided by an Apex Committee, while a dedicated
                Working Committee for Human Rights ensures its implementation at
                the operational level.
              </p>
              <p>
                Our commitment to human rights is further embedded in the Tata
                Code of Conduct and the Supplier Code of Conduct, which include
                provisions for human rights and establish mechanisms for
                grievance reporting and resolution. These frameworks apply to
                both our employees and partners across the value chain.
              </p>
              <p>
                Additionally, we actively participate in industry initiatives
                such as trustea (where we are a founding member) and the
                Rainforest Alliance, which facilitate periodic assessments of
                human rights impacts. All our Tata Coffee plantations are SA
                8000 certified, reflecting our dedication to upholding human
                rights in the workplace. Furthermore, three of our manufacturing
                facilities have also achieved SA 8000 certification.
              </p>

              <p className="border-2 p-4 border-[#9fc2e1]">
                The trustea initiative in India, which has verified sales of
                over
                <span className="text-[#1267b3] text-3xl font-[400]">
                  {" "}
                  979 million kg of tea
                </span>{" "}
                by March 2024, has made a significant positive impact on human
                rights within tea estates. The program has reached small-scale
                tea producers and plantation workers, guaranteeing enhanced work
                environments. This includes providing maternity benefits and
                childcare options for female workers. Moreover, the program has
                put in place systematic grievance resolution mechanisms, ensured
                the provision of adequate housing and access to clean drinking
                water, and standardized the wage payment process for those
                employed in the tea industry.
              </p>

              <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
                COLLECTIVE BARGAINING AND WORKER RIGHTS
              </h2>
              <p>
                TCPL recognizes the importance of trade unions in safeguarding
                workers' rights. Approximately 96% of our workforce is
                represented by independent trade unions or collective bargaining
                agreements. We maintain a strong foundation of trust with all
                employee and worker groups, engaging in transparent and fair
                negotiations to ensure best-in-class working conditions,
                benefits, and wages.
              </p>
              <p>
                Our commitment to equity extends to equal pay for all genders
                and job roles. We also ensure that all employees, including
                those from contractors, suppliers, and franchisees, receive
                wages that comply with legal standards and meet basic living
                needs.
              </p>
            </div>

            <div className="flex justify-center md:justify-end md:w-[40%]">
              <motion.img
                src={FBC25}
                alt=""
                className="w-full max-w-[80vh] h-auto object-contain"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageCommonVariants}
              />
            </div>
          </div>
        </div>

        {/* Page 15 */}
        <div className="mt-10 p-4 bg-[#f8f6f4] space-y-6">
          <h2 className="text-[#1d6db5] text-2xl sm:text-3xl font-semibold">
            EMPOWERING OUR COMMUNITIES
          </h2>

          <p>
            We are committed to upholding the Tata Group's legacy of exceptional
            corporate social responsibility (CSR) and contributing meaningfully
            to the nation's progress. Community is pivotal to the Tata mission
            and is at the heart of everything we do, how we think and who we
            are. Through strategic partnerships, impactful projects, and
            dedicated efforts, we aim to uplift and support the communities
            where we operate.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-4 flex-1">
              <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
                CSR VISION
              </h2>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-[600] bg-gradient-to-r from-[#22b456] to-[#04ade3] bg-clip-text text-transparent">
                Tata Consumer Products (TCP) aspires to be the world's most
                admired natural food and beverages company, creating a
                meaningful and lasting impact through its commitment to
                Sustainability and Corporate Social Responsibility.
              </h2>

              <p>
                Guided by the theme of Fostering Sustainable Livelihoods, our
                CSR initiatives focus on enabling socio-economic progress within
                communities. TCPL supports access to education, vocational
                training, affordable healthcare, water and sanitation, and rural
                development programs. These efforts are designed to create
                sustainable opportunities and improve the quality of life for
                the communities we serve.
              </p>
            </div>

            <div className="flex justify-center md:justify-end md:w-[40%]">
              <motion.img
                src={FBC26}
                alt=""
                className="w-full max-w-[80vh] h-auto object-contain"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                variants={imageCommonVariants}
              />
            </div>
          </div>

          <img
            src={FBC27}
            alt=""
            className="w-full max-w-full h-auto object-contain"
          />

          <p>
            TCPL is committed to creating a lasting impact, with a goal to reach
            2 million community members by FY 2030. As of FY25, we have already
            benefited xxx individuals, supported by xxx employee volunteering
            hours, reflecting our ongoing dedication to social responsibility.
          </p>
        </div>

        {/* Page 16 */}
        <div className="mt-10 p-4  space-y-4">
          <motion.img
            src={FBC28}
            alt=""
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageCommonVariants}
          />
          <p>
            Our Corporate Social Responsibility (CSR) initiatives are designed
            with a commitment to making a meaningful impact, prioritizing the
            needs of disadvantaged communities, including those below the
            poverty line (BPL), individuals with disabilities, women, and
            children. We strive to implement these programs through
            collaborative partnerships with governments, non-governmental
            organizations (NGOs), and other key stakeholders to ensure
            sustainable and inclusive development.
          </p>
          <p>
            TCPL is committed to creating a lasting impact, with a goal to reach
            2 million community members by FY 2030. As of FY25, we have already
            benefited xxx individuals, supported by xxx employee volunteering
            hours, reflecting our ongoing dedication to social responsibility.
          </p>
        </div>

        {/* Page 17 */}
        <div className="mt-10 p-4 flex flex-col md:flex-row gap-6">
          <motion.img
            src={FBC29}
            alt=""
            className="w-full max-w-[80vh] "
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageCommonVariants}
          />

          <div className="space-y-4">
            <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">
              CSR GOVERNANCE
            </h2>

            <p>
              We have established a robust governance framework to oversee the
              implementation of our CSR initiatives. This structure is led by
              the Corporate Social Responsibility & Sustainability Committee
              (CSR&S Committee) of the Board, which delegates authority to a
              working committee to act on its behalf. The formation of this
              committee complies with the requirements of Section 135 of the
              Companies Act, 2013. The CSR&S Committee is responsible for
              formulating and recommending the CSR policy, identifying CSR
              activities, approving expenditures, and monitoring the execution
              of CSR projects.
            </p>

            <p>
              Volunteering plays a crucial role in fostering strong connections
              between our employees and the communities we serve. It not only
              enhances our employees' sense of purpose and engagement but also
              significantly contributes to the well-being of the community.
            </p>

            <p>
              This year, we are proud to report a record-breaking 63,183
              volunteering hours by our dedicated employees. This translates to
              an impressive average of 6.34 volunteering hours per employee, a
              substantial increase from last year. These efforts underscore our
              commitment to making a positive impact and highlight the integral
              role our employees play in driving our community-focused
              initiatives. We will continue to be guided by the Tata values and
              principles in all our endeavours with the community.
            </p>

            <p>
              We engage with foundations such as APPL, TGBL, Coorg, TCSRD, and
              Trust RIHP, enhancing our outreach and efficacy.
            </p>

            <p>
              Throughout FY25, Tata Consumer has rolled out an extensive array
              of CSR initiatives, reflecting our deep commitment to social and
              environmental betterment. From this comprehensive CSR portfolio,
              we have curated a selection of initiatives to provide a glimpse
              into the impactful work we are doing. These examples, drawn from a
              broader array of projects, highlight our commitment to driving
              positive change within the communities we serve.
            </p>
          </div>
        </div>

        {/* Page 18 */}
        <div className="mt-10 p-4  space-y-4">
          <img src={FBC30} alt="" />
          <img src={FBC31} alt="" />
        </div>

        {/* Page 19 */}

        <motion.div
          className="flex mt-10 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // 60% in view triggers
          variants={parentVariants}
        >
          <motion.img
            src={FBC35}
            alt=""
            className="w-1/3"
            variants={imageVariants}
          />
          <motion.img
            src={FBC34}
            alt=""
            className="w-1/3"
            variants={imageVariants}
          />
          <motion.img
            src={FBC33}
            alt=""
            className="w-1/3"
            variants={imageVariants}
          />
        </motion.div>

        <div className="p-4 space-y-4 mt-10">
          <h2 className="text-[#16b1ef] text-xl sm:text-2xl md:text-3xl font-semibold">INTERPLAY OF CAPITALS</h2>
          <div className="flex justify-center ">
          <motion.img
            src={FBC32}
            alt=""
            className="h-[50vh] object-contain"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageCommonVariants}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForBetterCommunities;
