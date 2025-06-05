import React from 'react'
import VerticalNav from '../comp/VerticalNav'
import Map from '../comp/Map'
import Carousel from '../comp/Carousel'
import Carousel2 from '../comp/Carousel2'
import World from '../comp/World'
import Acheivement from '../comp/Acheivement'
import Cover from '../Cover/Cover'
import ExploreHeading from '../ExploreHeading'
import Capital from '../comp/Capital'
import Gratitude from '../comp/Gratitude'
import Mapvalue from '../comp/Mapvalue'
import board_leader from '../../bod'
import leader_team from '../../leadership'
const people = [
  {
    name: "MR. N. CHANDRASEKARAN",
    designation: "Chairman",
    image: "/108.webp",
  },
  {
    name: "MR. P. B. BALAJI",
    designation: "Non Executive (Non Independent) Director",
    image: "/109.webp",
  },
  {
    name: "MR. BHARAT PURI",
    designation: "Independent Director",
    image: "/110.webp",
  },
  {
    name: "MS. SHIKHA SHARMA",
    designation: "Independent Director",
    image: "/111.webp",
  },
  {
    name: "DR. K. P. KRISHNAN",
    designation: "Independent Director",
    image: "/112.webp",
  },
  {
    name: "MR. DAVID CREAN",
    designation: "Independent Director",
    image: "/114.webp",
  },
  {
    name: "MR. SUNIL D’SOUZA",
    designation: "Managing Director & CEO",
    image: "/113.webp",
  },
  {
    name: "MR. AJIT KRISHNAKUMAR",
    designation: "Executive Director & COO",
    image: "/115.webp",
  },
];
const people2 = [
  {
    name: "MR. SUNIL D’SOUZA",
    designation: "Managing Director & CEO",
    image: "/116.webp",
  },
  {
    name: "MR. AJIT KRISHNAKUMAR",
    designation: "Executive Director & COO",
    image: "/115ajit.webp",
  },
  {
    name: "MR. ASHISH GOENKA",
    designation: "Group Chief Financial Officer",
    image: "/117.webp",
  },
  {
    name: "MR. TARUN N. P. VARMA",
    designation: "Global Chief Human Resources Officer",
    image: "/118.webp",
  },
  {
    name: "MR. PUNEET DAS",
    designation: "President, Packaged Beverages India and South Asia",
    image: "/120.webp",
  },
  {
    name: "MS. DEEPIKA BHAN",
    designation: "President, Packaged Foods (India)",
    image: "/121.webp",
  },
  {
    name: "MR. GHARRY ECCLES",
    designation: "President, International Business",
    image: "/122.webp",
  },
  {
    name: "MR. PARTHA BISWAS",
    designation: "President – Ready-To-Drink (RTD) Business",
    image: "/124.webp",
  },
  {
    name:"MR. PRASHANT PARAMESWARAN",
    designation:"President, Soulfull",
    image:"/124.webp"
  },
  {
    name:"MR. AMIT PANT",
    designation:"Senior Vice President & Head - Solubles Business",
    image:"/125.webp"
  },
  {
    name:"MR. PUNIT GUPTA",
    designation:"President & Head - India Sales",
    image:"/126.webp"
  },
  {
    name:"MR. VIKAS GUPTA",
    designation:"Global Head, R&D",
    image:"/127.webp"
  },
 {
  name:"MR. RAJESH GOPAL",
  designation:"Global Chief Digital Officer",
  image:"/128.webp"
 },
 {
  name:"MR. RISHI GAUTAM",
  designation:"Global General Counsel",
  image:"/129.webp"
 }
 ,
 {
  name:"MR. ABHIJIT MIDHA",
  designation:"Senior Vice President - Strategy & M&A",
  image:"/130.webp"
 }
];
const obje = [
  {
    img: "achieve0.webp",
  
    title: "#2",
    subtitle: "",
    subtitle2: "",
    desc: "Branded tea player globally",
    ast:""
  },
  {
    img: "achieve1.webp",
    title: "275 million+",
    subtitle: "",
    subtitle2: "",
    desc: "Households reached in India ",
    ast:""
  },
  {
    img: "",
    title: "Integrated F&B company",
    subtitle: "",
    subtitle2: "",
    desc: "with the rich heritage of Tata,aspiring for a larger share of the FMCG world",
    ast:""
  },
  {
    img: "",
    title: "4,500+*",
    subtitle: "",
    subtitle2: "",
    desc: "Employees worldwide",
    ast:"*Does not include plantation workers"
  },
  {
    img: "achieve2.webp",
    title: "17,618",
    subtitle: "INR",
    subtitle2: "Crores",
    desc: "Consolidated revenue in FY 2024-25 with a market cap of INR 99K Crores+",
    ast:""
  },
  {
    img: "achieve3.webp",
    title: "4.4 ",
    subtitle: "",
    subtitle2: "Mn",
    desc: "Retail outlets",
    ast:""
  }
];
const bod = {
  head:"Board of Directors",
  link:"/board-of-directors",
  color:"black",
  linecolor:"#1168b3"
}

const team = {
  head:"Leadership Team",
  link:"/leadership-team",
  color:"black",
  linecolor:"#1168b3"
}

const LandingPage = () => {
  return (
    <div className='mt-15'>
      <div>
        <Cover />
        <Gratitude />
        
        <Carousel2 />
        {/* <ExploreHeading /> */}
        <World />
        <Acheivement obj={obje} />
        <VerticalNav />
        <Map />
        <Mapvalue/>
        <Carousel people={board_leader} head={bod.head} color={bod.color} linecolor={bod.linecolor} link={bod.link} />
        <Carousel people={leader_team} head={team.head} color={team.color} linecolor={team.linecolor} link={team.link} />
        <Capital/>
      </div>
    </div>
  )
}

export default LandingPage