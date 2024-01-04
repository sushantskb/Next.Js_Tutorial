/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Profile from "../../public/vercel.svg";
const Home = () => {
  return (
    <>
      <h1>Image optimzation</h1>
      {/* Image tag is a special tag that is used in Next Js or Next Js suggesst us use so that the image can be directly optimized without using any external libarary */}
      {/* <Image src={Profile} /> */}

      {/* if we use normal html tag then :  */}
      {/* <img src={Profile.src} /> */}

      <hr />

      <p>external image</p>
      {/* Note : add the external image's domain in next.config.js */}
      <Image 
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1704343012~exp=1704343612~hmac=3fe909ffcb4f3c16206592d8ef823591e931b81388a3acd72a800c06c70b0d3f" 
        width={1380}
        height={789}
      />
    </>
  );
};

export default Home;
