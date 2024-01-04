import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "300",
  subsets: ["devanagari"],
  display: "fallback"
})
const Home = () => {
  return (
    <>
      <h1>Font optimzation</h1>
      {/* <h1 style={{fontFamily: "Poppins", fontWeight : "300"}}>Font Using Link Tag in layout.js</h1> */}
      <h1 className={poppins.className}>Font Using Next JS feature</h1>
    </>
  );
};

export default Home;
