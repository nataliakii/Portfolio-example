import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "App for renting apartment",
    img: "/apart.png",
    desc: "Apartment Rental App. \n Built with React and Redux for efficient state management. \n Utilized MongoDB for storing and retrieving rental property data. Node.js and express - for backend. \n User authentication and authorization with JSON Web Tokens (JWT).\n Deployed on Heroku for reliable and scalable hosting",
    url: "https://kalikratia.site/"
  },
  {
    id: 2,
    title: "App for baby's sleep schedule",
    img: "/sleepy.png",
    desc: "The app is supposed to handle 3 functionalities: \n 1. Provide recommendations for a baby's sleep schedule after analyzing and processing input data.\n 2. Finding nearby playgrounds on an interactive map.\n 3. Locate nearby restaurants with kidsroom.",
    url: "https://sleepy-app-5901632218e2.herokuapp.com/ "
  },
  {
    id: 3,
    title: "Other",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "With over 10 years of experience as a video production producer, I bring proven expertise in project management, planning, budgeting, and strong communication skills crucial for delivering exceptional video productions.",
    url : "https://www.linkedin.com/in/natalia-kirejeva/"
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform( scrollYProgress, [ 0, 1 ], [ -300, 300 ] );
  
    const handleClick = ( link ) =>
  {
    console.log("clicked")
    window.open(link, '_blank', "noopener noreferrer");
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            { item?.url && <button onClick={ handleClick( item?.url ) }>See More</button> }
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Previous works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
