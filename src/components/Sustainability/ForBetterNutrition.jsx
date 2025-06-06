import React from "react";
import Page from "../Page";
import FBN4 from "/Sustainability/FBN4.webp";
import FBN5 from "/Sustainability/FBN5.webp";
import FBN6 from "/Sustainability/FBN6.webp";
import FBN7 from "/Sustainability/FBN7.webp";
import FBN8 from "/Sustainability/FBN8.webp";
import FBN9 from "/Sustainability/FBN9.webp";
import FBN11 from "/Sustainability/FBN11.webp";
import FBN12 from "/Sustainability/FBN12.webp";
import FBN14 from "/Sustainability/FBN14.webp";
import FBN15 from "/Sustainability/FBN15.webp";
import FBN16 from "/Sustainability/FBN16.webp";
import FBN17 from "/Sustainability/FBN17.webp";
import FBN18 from "/Sustainability/FBN18.webp";
import FBN19 from "/Sustainability/FBN19.webp";
import FBN20 from "/Sustainability/FBN20.webp";
import FBN21 from "/Sustainability/FBN21.webp";
import FBN22 from "/Sustainability/FBN22.webp";
import FBN23 from "/Sustainability/FBN23.webp";
import FBN24 from "/Sustainability/FBN24.webp";
import FBN25 from "/Sustainability/FBN25.webp";
import FBN26 from "/Sustainability/FBN26.webp";
import FBN27 from "/Sustainability/FBN27.webp";

import { motion } from "framer-motion";

const parag =
  "At Tata Consumer Products, we nourish millions daily, seamlessly blending our food and beverage expertise with the growing appetite for better nutrition and wellness. Our adept understanding of consumer health trends shapes the plethora of products that we offer, helping us strengthen brand loyalty and market leadership.";

const img1 = "/Sustainability/FBN1.webp";
const img2 = "/Sustainability/FBN2.webp";
const img3 = "/Sustainability/FBN3.webp";

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.3, // Delay of 0.3 seconds between child animations
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

const sectionchildVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
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

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const ForBetterNutrition = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col gap-10">

          <div>
            <Page
              text="Nutrition"
              head1="Ensuring the Right Nourishment"
              text2={parag}
              img1={img1}
              img2={img2}
              img3={img3}
            />
          </div>
        </div>
        {/* Page 1 */}
        <div className="marginal text-lg">
        <div
          className="mt-5 flex   flex-col sm:flex-row gap-5"
        >
          {/* Images Section */}
         
            <div className="w-[60%]">
            <img
              src={FBN4}
              alt=""
              className="w-[80%]"
            />
             <div className="flex flex-col gap-4">
                <h1 className="mt-5 text-[#176ab4] text-2xl sm:text-3xl font-[500]">
                  PERFORMANCE HIGHLIGHTS
                </h1>
                <div>
                  <span className="text-[#959493] font-[400] text-lg sm:text-xl">
                    In FY'25 health and wellness-focused new product launches
                    made up
                  </span>
                  <span className="text-[#2bb75f] font-[500] text-xl sm:text-2xl">
                     29% 
                  </span>
                  <span className="text-[#959493] font-[400] text-lg sm:text-xl">
                    (12 of 41) of our total offerings.
                  </span>
                </div>
                <div className="border-b-2 border-[#aeafb0] my-4"></div>
                <div>
                  <span className="text-[#959493] font-[400] text-lg sm:text-xl">
                    Instituted a
                  </span>
                  <span className="text-[#2bb75f] font-[500] text-xl sm:text-2xl">
                    'For Better'
                  </span>
                  <span className="text-[#959493] font-[400] text-lg sm:text-xl">
                    Nutrition Policy, that is anchored in nutrition science,
                    global recommendations (such as UN's SDG goals), local
                    regulations and government recommendations.
                  </span>
                </div>
              </div>
            </div>
           
            <div className="w-[40%]" >
              <h1 className=" text-[#176ab4] text-2xl sm:text-3xl font-[500]">
                VISION
              </h1>
              <p className="bg-gradient-to-r from-[#0db14e] to-[#10b0ef] bg-clip-text text-transparent font-[400] mt-2 text-xl sm:text-3xl">
                Our vision is to improve access to healthy, natural, and safe
                food for our consumers through our portfolio of great-tasting
                products designed to enhance health and well-being.
              </p>
              <div className="">
            <img
              src={FBN5}
              alt=""
              className=""
            />
            </div>
            </div>
          
          {/* Text Section */}
        </div>

        {/* Page 2 */}
        <motion.div
  
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // 60% trigger
        >
          <div className="flex flex-col gap-7 mt-10 bg-[#f1eee9] p-6 sm:p-10 text-base text-[#959493]">
            <h2 className="text-[#1d6db5] text-2xl sm:text-3xl font-[600]">
              ENSURING ACCESS TO BETTER NUTRITION
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <p className="text-base sm:text-lg">
                Recognising the growing consumer demand for wellness-oriented
                products, our commitment to stringent quality norms, which often
                go well beyond compliance requirements, takes on even greater
                significance. We are perfectly positioned to respond to this
                shift, with our diverse range of great-tasting products that not
                only align with the growing trend towards healthier, more
                nutritious choices but also meet the convenience demands of
                today's consumers. In our quest to fulfil these evolving
                nutritional aspirations, we are actively pursuing both organic
                and inorganic growth opportunities to expand our portfolio and
                enhance our positive impact on public health.
              </p>
            </div>

            <div className="flex flex-col lg:flex-ro gap-4 lg:gap-6">
              <div>
              <img src={FBN6} alt="" className="" />
              </div>
              <p className="text-base sm:text-lg mt-4 lg:mt-0">
                Our 'For Better Nutrition' pillar focuses on expanding access to
                nutrition by offering affordable, nutrient-enriched products,
                while leveraging consumer insights to develop tailored
                solutions. It reinforces our dedication to transparency in
                nutritional data and upholding high quality standards. This is a
                cornerstone of our product strategy and embodies our dedication
                to responsible product stewardship, ensuring sustainability
                throughout the product lifecycle. At the heart of our mission is
                a steadfast commitment to nutrition, which serves as the
                foundation for our product innovation and corporate values. Our
                'For Better' Nutrition policy, established in FY 2023-24, is
                grounded in nutrition science global and government
                recommendations. It also reflects a strong commitment to meeting
                consumer needs, aspirations and enhancing the overall product
                experience. Our 'For Better' Nutrition Policy for Health and
                Wellness exemplifies our dedication to better nutrition. The
                policy establishes comprehensive guidelines for ingredients,
                nutrients and nutritional claims. This policy is built on five
                core principles that guide our strategic actions and
                initiatives.
                <br />
                This has been the guiding principle in our innovation and has ensured continuous enhancement of our products’ nutrition
profile. The ‘For Better’ Nutrition Policy not only steers current initiatives but also adapts to changing consumer needs, creating
a healthier, sustainable and better nourished India.
The recent acquisition of Capital Foods and Organic India has further boosted our product portfolio.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Page 3 */}
        <div className="mt-5 flex flex-col  gap-6  text-[#969798]">
          <div>
          <motion.img
            src={FBN7}
            alt=""
            className=""
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageCommonVariants}
          />
          </div>
          <div className=" flex flex-col md:flex-row gap-6 lg:gap-10">
            <div className="w-[50%]">
            <img src={FBN8} alt="" className="" />
            </div>
            <div className="text-lg w-[50%]">
              TCPL's Advisory Committee for Nutrition Policy is chaired by our
              Global Head of R&D and Chief Human Resource and Sustainability
              Officer. The Committee comprised of all Executive Committee
              Members, including the Presidents of respective business
              verticals. This Committee governs the application of the policy.
              Public communications in relation to nutrition and well-being
              attributes of our products are also overseen and approved by this
              Committee. Thus, this Policy provides a stringent framework that
              drives innovation, continuously enhancing the nutritional value of
              our products, while ensuring clear and transparent communication
              of their benefits.
            </div>
          </div>
        </div>

        {/* Page 4 */}
        <div className="flex mt-5 gap-6  flex-col lg:flex-row">
          <motion.img
            src={FBN9}
            alt=""
            className="h-[auto] sm:h-[50vh] lg:h-[70vh] w-full lg:w-1/2 object-cover "
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageCommonVariants}
          />
          <div className="w-full lg:w-1/2">
            <p className="text-[#969798] text-lg">
              Beyond policy advocacy, our focus extends to several key areas
              that enhance our commitment to nutrition and consumer well-being.
              These include -
            </p>
            <div className="text-[#969798] text-lg">
              <ul className="list-disc ml-6 mb-2">
<li className="mb-2">Developing affordable,
nutrient-rich products that
cater to diverse dietary needs</li>
<li className="mb-2">Leveraging digital platforms to
educate and engage consumers
about healthier choices </li>
<li className="mb-2">Collaborating with key
opinion leaders and
nutritionists to ensure our
offerings are backed by the
latest scientific thinking</li>
<li className="mb-2">Collaborating with key
opinion leaders and
nutritionists to ensure our
offerings are backed by the
latest scientific thinking</li>
              </ul>
              <div>
              TCP actively participates in multi-stakeholder initiatives that improve
public health through nutrition-related activities. One such initiative
is with the Federation of Indian Chambers of Commerce and Industry
(FICCI). By joining forces with FICCI, TCP collaborates with industry
consortia to promote scientific studies and advocate for policies that
support improved nutrition standards and guidelines. This partnership
aims to generate data-driven policies that benefit the wider community.
</div>
            </div>
          </div>
        </div>

        {/* Page 5 */}
        <div>
          
        </div>
        <motion.div
          className="p-6 mt-5  gap-6  md:flex  justify-center items-start   bg-[#eff9fd] flex-col lg:flex-row"
          
        >
          <motion.div
            className="flex flex-col gap-6 text-[1.4vh] text-[#969798] relative"
            // variants={parentVariants}
          >
            <motion.div
              className="flex flex-col gap-6 lg:gap-10 "
              // variants={childVariants}
            >
              <h2 className="text-[#1d6db5] text-2xl sm:text-[2.5vh] font-[600]">
                ENRICHING THE NUTRIENT PROFILE
              </h2>
              <p className="text-base sm:text-lg">
                Transparency is at the core of our approach, with all our
                products carrying clear and comprehensive nutritional
                information, often exceeding regulatory requirements.
                Additionally, TCPL aligns its product development with the
                FSSAI's Eat Right initiative. This government-led movement seeks
                to revolutionise India's food system to ensure safe, healthy and
                sustainable food for all Indians. By designing unique product
                formats in line with the Eat Right movement, TCPL demonstrates
                its commitment to enhancing the overall well-being of consumers
                through improved nutrition Our commitment to nutritional
                superiority is guided by a clear framework of measures to
                evaluate and enhance the nutrient content across our product
                range. In our efforts to advance nutrition, we have implemented
                two key guidelines: the 'For Better' Food Ingredient guidelines
                and the 'For Better' Nutrient guidelines. The 'For Better' Food
                Ingredient Guideline establishes clear standards for ingredient
                usage, ensuring our products align with evolving consumer
                preferences. It evaluates key ingredients such as Partially
                Hydrogenated Vegetable Oil (PHVO), refined sugars and flours,
                whole grains, legumes, millets, nuts, prebiotics, probiotics,
                herbs, botanicals and additives like artificial colours,
                flavours and preservatives. Complementing this, the 'For Better'
                Nutrient guardrails focuses on optimising nutritional content by
                considering factors such as trans- fats, saturated fats (SAFA),
                sodium, sugar, total fat, energy, protein, fiber and essential
                micronutrients. WHO guidelines were used as a first step which
                is based on latest scientific evidence for nutrients of concern.
                By understanding the role a product plays in the overall diet of
                the respective consumers and referencing the daily nutrient
                values recommended by FSSAI and Indian Council of Medical
                Research (ICMR), we have determined the percentage contribution
                of these nutrients in the products to the daily diet. Based on
                each product's positioning, portion size and other factors,
                category-level nutrient guardrails were established. These
                guardrails were then benchmarked against industry standards,
                resulting in an overarching guardrail for the entire food and
                beverage portfolio. We have specified threshold levels for
                'nutrients of concern' i.e. added sugars, SAFA, total fat,
                trans-fat and sodium. We have definitions in place to highlight
                if the internal and FSSAI claims criteria are met, e.g.
                'enriched with botanicals', Protein if &gt; 5% DV/serve. Basis
                the nutrient guardrails, our entire portfolio has been mapped
                and we are monitoring progress of reformulation/ renovation of
                products, where required. Together, these guidelines reinforce
                our commitment to healthier, more balanced and high-quality
                product offerings.
              </p>
            </motion.div>
          </motion.div>
          <motion.img
            src={FBN11}
            alt=""
            variants={childVariants}
            className=" sticky top-0 w-full lg:w-[80vh]   object-contain mt-10 lg:mt-0"
          />
        </motion.div>

        {/* Page 6 */}
        <div className="mt-10 p-6 sm:p-0">
          <h1 className="bg-gradient-to-r font-[600] from-[#8ebf91] to-[#389bdb] bg-clip-text text-transparent text-3xl sm:text-4xl inline-block">
            For Better' 2024 Nutrient Guardrails
          </h1>
          <div className="flex mt-6 lg:mt-10 justify-center items-center gap-6 lg:gap-10 flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img src={FBN12} alt="" className="w-full object-contain" />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[#969798] text-base sm:text-lg">
                Recognising the prevalent nutritional gaps in the average Indian
                diet, we are strategically enriching our products with essential
                nutrients to help combat nutritional deficiencies. Through our
                diverse portfolio, which includes everyday essentials like salt,
                tea, coffee and pulses, we go beyond offering just food—we
                provide accessible nutrition in daily consumables. Highlights
                products enriched with positive nutrients such as protein and
                dietary fiber. Additionally, we emphasise the presence of
                positive ingredients like millet in our muesli and rusks and dal
                in our oats, ensuring consumers are well- informed about the
                nutrient value of our offerings. This commitment ensures that
                our fortification and enrichment processes meet both national
                and international safety and nutrition benchmarks, delivering
                safe, high quality and nutritionally beneficial food products to
                our consumers.
              </p>
            </div>
          </div>
        </div>

        {/* Page 7 */}
        <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-14">
          <div className="flex w-full lg:w-1/2 flex-col gap-4 lg:gap-6">
            <h1 className="text-2xl sm:text-[2.5vh] font-[600] text-[#216eb7]">
              MAKING NUTRITION MORE AFFORDABLE
            </h1>
            <p className="text-[#969798] text-[1.5vh] sm:text-lg">
              We are dedicated to ensuring that cost is never a barrier to
              achieving a balanced and healthy diet. Our mission is to provide
              affordable, nutrient- rich products that cater to all socio-
              economic strata, ensuring everyone has access to quality
              nutrition. We continuously strive to keep our prices competitive
              without compromising on quality, so every consumer can enjoy the
              benefits of a nutritious diet.
            </p>
            <img
              src={FBN16}
              alt=""
              className="w-full h-[auto] sm:h-[55vh] object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <motion.img
              src={FBN15}
              alt=""
              className="w-full h-[auto] sm:h-[70vh] object-contain"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
            />
          </div>
        </div>

        {/* Page 8 */}
        <div className="mt-10 items-center justify-center flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <motion.img
              src={FBN17}
              alt=""
              className="w-full h-[auto] lg:h-[60vh] object-cover"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
            />
          </div>
          <div className="flex w-full lg:w-1/2 flex-col gap-4 lg:gap-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#216eb7]">
              RESPONSIBILITY TOWARDS CONSUMERS
            </h1>
            <p className="text-[#969798] text-base">
              We recognise that supporting consumers in their pursuit of a
              healthier lifestyle goes beyond offering nutritious products and
              that it requires transparency, trust and informed choices. We are
              committed to providing clear and meaningful product information,
              including calorie information and key nutritional data, to help
              consumers make better dietary decisions.
              <br />
              As a brand that blends nutrition with taste, we are continuously
              refining our consumer engagement principles and enhancing our
              packaging to reinforce our commitment to nutritional well-being
              without compromising on flavour. Our efforts also extend to
              amplifying product- related information across nutritional,
              environmental and social aspects. While our packaging complies
              with all regulatory requirements, we further highlighting good
              ingredients and their benefits—such as high fiber or high protein
              through front-of-pack and back-of-pack labelling, ensuring
              consumers have easy access to essential product insights.
              <br />
              In our ongoing efforts to promote transparency and consumer
              awareness, we have implemented comprehensive back-of-pack
              labelling on all our products. This includes a uniform list of
              ingredients, presented in a clear and consistent format, allowing
              consumers to easily identify the contents of our products.
              Additionally, we have introduced Guideline Daily Amounts (GDAs)
              and Reference Intake (RI) information to assist consumers in
              understanding the nutritional value of our products in the context
              of their daily dietary needs. These initiatives are part of our
              commitment to empower consumers with the information they need to
              make informed choices about their food and beverage consumption.
            </p>
            <div className="bg-[#f4f2ee] p-4">
              <h2 className="inline-block bg-gradient-to-r from-[#8ebf91] to-[#389bdb] bg-clip-text text-transparent text-xl sm:text-2xl font-semibold">
                'For Better'
              </h2>
              <p className="text-[#969798] text-base">
                Claims Guidelines has been designed with the consumer's needs in
                mind, these guidelines cover a broad spectrum of claims, from
                those based on sensory appeal and wholesomeness, to
                ingredient-specific and nutrient content/ function assertions,
                to packaging or processing claims.
              </p>
            </div>
          </div>
        </div>

        {/* Page 9 */}
        <div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="text-xl sm:text-2xl font-semibold text-[#216eb7]">
              EMBRACING PRODUCT STEWARDSHIP
            </h1>
            <p className="text-[#969798] text-base">
              Ensuring product stewardship is essential to maintain a strong and
              responsible brand. It encompasses the entire product lifecycle
              from R&D to post-consumer disposal, with a focus on
              sustainability, quality and consumer well-being. Our dedicated R&D
              function, comprising over 50 world-class professionals, spearheads
              our mission for better nutrition by innovating continuously to
              expand our portfolio of nutritious and fortified products. These
              experts actively collaborate with the scientific community and
              renowned institutions, advancing research and driving innovation.
              This collaborative effort shapes our product portfolio to meet
              evolving consumer needs and industry standards.
            </p>
            <motion.div
              className="hidden md:flex gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={parentVariants}
            >
              {/* Motion images */}
              <motion.img
                src={FBN19}
                alt=""
                className="w-[15vh] h-[15vh] mt-6 lg:mt-30 object-contain"
                variants={childVariants}
              />
              <motion.img
                src={FBN23}
                alt=""
                className="w-[15vh] h-[30vh] object-contain"
                variants={childVariants}
              />
              <motion.img
                src={FBN20}
                alt=""
                className="w-[15vh] h-[30vh] object-contain"
                variants={childVariants}
              />
              <motion.img
                src={FBN21}
                alt=""
                className="w-[15vh] h-[30vh] object-contain"
                variants={childVariants}
              />
              <motion.img
                src={FBN22}
                alt=""
                className="w-[15vh] h-[30vh] object-contain"
                variants={childVariants}
              />
            </motion.div>
          </div>
          <motion.img
            src={FBN18}
            alt=""
            className="w-full lg:w-1/2 h-[auto] lg:h-[60vh] object-cover mt-6 lg:mt-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageCommonVariants}
          />
        </div>

        {/* Page 10 */}
        <div className="bg-[#f1eee9] flex flex-col gap-10 mt-10 p-4 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            <p className="text-[#969798] text-base lg:text-lg">
              While we strive to increase consumer awareness about the
              nutritional content of our products to help them make informed
              choices, we have also identified five key health and wellness
              areas of focus: gut health, blood sugar management, protein
              delivery, sugar reduction/alternatives and iron supplementation.
              As part of our commitment to promoting healthier dietary choices,
              we have established strict guidelines for our Nutritionally
              Enhanced product range. For new products under the Nutritionally
              Enhanced category, we avoid the use of ingredients such as
              artificial colours, flavours, preservatives, Partially
              Hydrogenated Vegetable Oil (PHVO), refined ingredients such as
              added sugar and refined flour. We actively choose the inclusion of
              whole grains, legumes, millets, nuts, pre and probiotics, herbs
              and botanicals. Our 'Claims' guidelines for each consumer need
              state ensures right communication and avoidance of any possible
              misleading information on packages. Only claims relevant to the
              category and format and as per guidelines by FSSAI are included,
              post rigorous evaluation. Furthermore, for new products, we
              endeavour to design products within the nutrient guardrails
              defined. We have initiated discussions with non-profit
              organisations involved in community health and welfare,
              particularly for products like Double Fortified Salt (DFS), which
              offer significant nutritional benefits.
            </p>
            <img
              src={FBN24}
              alt=""
              className="w-full lg:w-[70vh] h-[auto] lg:h-[30vh] object-cover mt-4 lg:mt-0"
            />
          </div>
          <motion.div
            className="flex flex-col lg:flex-row gap-4 lg:gap-8 bg-white p-4 lg:p-10"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.div className="w-full lg:w-1/2" variants={childVariants}>
              <h2 className="bg-gradient-to-r from-[#8ebf91] to-[#389bdb] text-white px-4 py-1 rounded-3xl text-lg mb-4 inline-block">
                Aspect
              </h2>
              <p className="text-[#969798] text-base">
                As part of our Nutrition Policy, we are gradually reducing sugar
                and salt levels across our product portfolio. By reformulating
                existing products and introducing new, lower-sugar and
                lower-salt options, we are striving to offer consumers healthier
                choices without compromising on taste.
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              variants={sectionchildVariants}
            >
              <h2 className="bg-gradient-to-r from-[#8ebf91] to-[#389bdb] text-white px-4 py-1 rounded-3xl text-lg mb-4 inline-block">
                Impact
              </h2>
              <p className="text-[#969798] text-base">
                Since inception of our Nutrition Policy, we have reduced the
                added sugar across one of our RTD product variants by 30% and by
                20% in another, with plans for further reductions. This
                initiative has resulted in a total reduction of approximately
                ~2900 tons sugar reduced since the inception of 'For Better'
                Nutrition policy. Additionally, among products within the
                category of mango-based drinks and carbonated soft drinks, our
                products have lower added sugar content.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Page 11 */}
        {/* TODO */}

        {/* Page 12 */}
        <div className="mt-10 flex flex-col lg:flex-row bg-[#30b5ad] p-4 lg:p-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-5">
            <h2 className="text-3xl sm:text-4xl font-[700] text-[#216eb7]">
              NEW PRODUCT LAUNCHES
            </h2>
            <p className="text-white font-[500] text-lg">
              In FY 2024-25, we expanded our portfolio with 41 new product
              launches, thoughtfully designed to cater to diverse consumer
              needs. Of these, 15 products focused on convenience, simplifying
              meal preparation and consumption. Another 12 products were
              dedicated to Health and Wellness, encouraging healthier lifestyle
              choices. Additionally, 14 premium offerings were introduced to
              elevate gourmet experiences. Key launches include Smith & Jones
              Assorted Pasta Sauce Masala, Tata Soulfull Masala Muesli, Tata
              Sampann Spice Mixes, Ching's Momo Chutney, Tata Sampann Easy Cook
              Kabuli Chana and Tata Sampann Easy-roll Cook Ragi Atta in
              convenience segment while Tata Soulfull Corn Flakes, Tata Soulfull
              Millet Rusk, Tata Gluco Plus Sports strengthen our health and
              wellness range. Our premium selection has been enriched with Tata
              Lyfe Alkaline Water, Smith & Jones Chicken Fry Mix, enhancing
              everyday wellness and indulgence respectively. These innovations
              reaffirm our commitment to nourishing lives, blending health,
              convenience and premium quality into our consumers daily routine.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center mt-4 lg:mt-0">
            <motion.img
              src={FBN27}
              alt=""
              className="w-full max-w-[70vh] object-contain"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={imageCommonVariants}
            />
          </div>
        </div>

        {/* Page 13 */}
        </div>
      </div>
    </>
  );
};

export default ForBetterNutrition;
