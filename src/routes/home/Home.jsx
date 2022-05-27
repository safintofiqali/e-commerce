/* IMPORT : LIBRARIES */
import { Outlet } from "react-router-dom";

/* IMPORT : COMPONENTS */
import Directory from "../../components/directory/Directory.comp";

/* RENDER COMPONENT - STARTS */
const Home = (props) => {
  // HARD CODED VARIABLES/DATA
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  // RETURN ELEMENTS - AREA
  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
};

export default Home;
