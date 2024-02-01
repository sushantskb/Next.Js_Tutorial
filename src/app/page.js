import { BASE_URI } from "./config/constants";

const page = () => {
  console.log(process.env.Admin_Pass);
  return (
    <>
      {
        process.env.NODE_ENV === "development" ? <h2>You are in development mode</h2> : <h2>You are in production mode</h2>
      }
      <h1>Environment Variables in Next Js</h1>
      {
        BASE_URI
      }
    </>
  );
};

export default page;
