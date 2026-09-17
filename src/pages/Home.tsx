import Categories from "../component/Categories";
import FeaturedPosts from "../component/FeaturedPosts";
import Hero from "../component/Hero";
import LatestPosts from "../component/LatestPosts";
import Newsletter from "../component/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <Categories />
      <LatestPosts />
      <Newsletter />
    </>
  );
};

export default Home;