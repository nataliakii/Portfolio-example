import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const handleClick = ( link ) =>
  {
    console.log("clicked")
    window.open(link, '_blank', "noopener noreferrer");
  };



  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      ref={ref}
      // animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        {/* <p>
          I focus on assisting you in maximizing 
          <br /> your income potential
        </p> */}
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Innovative</motion.b>  Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For </motion.b> Modern Challenges.
          </h1>
          {/* <button>WHAT I DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>QR Menu</h2>
                    <div>
          <p>
              A dynamic QR code-based menu system. 
            </p>
            <p>
            Tech stack : React, Next.js, MongoDB, Vercel or Netlify.
            </p>
          </div>
            <button onClick={handleClick("https://argo-beach.netlify.app/")}>Go </button>
          <button onClick={ handleClick( "https://bloom-bar.netlify.app/" ) }>Go </button>
              
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>CallWaiter</h2>
          <div>
            <p>
              An innovative beach bar service solution for seamless staff - client coordination.
            </p>
            <p>
              FrontEnd - React, React Context, Material-UI.
            </p>
                     <p>
            Backend - Python on Amazon EC2. Deployed on Vercel.</p>
          </div>
          <button onClick={ handleClick( "https://www.bbqr.site/about" ) }>Go</button>
                 <button onClick={ handleClick( "https://www.bbqr.site/restaurants/genesis?zont=1" ) }>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Landing Pages</h2>
          <p>
              Expertise in building modern, responsive landing pages.
          </p>
          <button onClick={ handleClick( "https://www.mybridgehelper.com/" ) } >Go</button>
           <button onClick={ handleClick( "https://sprincessluxury.netlify.app/" ) } >Go</button>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        > */}


        {/* </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
