import React from 'react'
import Strategy29th_page from "../../pages/Strategy29th_page";
import Strategy30th_page from '../../pages/Strategy30th_page';
import Strategy31st_page from '../../pages/Strategy31st_page';
import Strategy32nd_page from '../../pages/Strategy32nd_page';
import Strategy33rd_page from '../../pages/Strategy33rd_page';
import Strategy34th_page from '../../pages/Strategy34th_page';
import Strategy35th_page from '../../pages/Strategy35th_page';
import Strategy36th_page from "../../pages/Strategy36th_page";
import Strategy37th_page from '../../pages/Strategy37th_page';
import Strategy38th_page from '../../pages/Strategy38th_page';
import Strategy39th_page from '../../pages/Strategy39th_page';
import Strategy40th_page from '../../pages/Strategy40th_page';
import SoftCover from '../dos/SoftCover';


const Oppurtinity = () => {
  const softData2 = {
    bgColor: "#2469b3",
    image: "/207.webp",
    heading1: "Build on \n new \n opportunities",
    subheading: "",
    footerText: "",
  }
  return (
    <>
      <div>
        {/* <Strategy29th_page /> */}
        <SoftCover props={softData2}/>
        <Strategy30th_page />
        <Strategy31st_page />
        <Strategy32nd_page />
        <Strategy33rd_page />
        <Strategy34th_page />
        <Strategy35th_page />
        <Strategy36th_page />
        <Strategy37th_page />
        <Strategy38th_page />
        <Strategy39th_page />
        <Strategy40th_page />
      </div></>)
}

export default Oppurtinity
