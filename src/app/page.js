import Link from "next/link";

const Home = () => {
  return <div>
    <h1>Fetch API data from Server Component</h1>
    <Link href="/productlist">Go to Product List</Link>
  </div>
}

export default Home;