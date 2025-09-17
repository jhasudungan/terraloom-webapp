import CollectionBannerList from "@/components/index/CollectionBannerList";
import MainHero from "@/components/index/MainHero";
import { JSX } from "react";

const Home = ():JSX.Element => {

  return (
    <>
      <MainHero />
      <CollectionBannerList />
    </>
  );

}

export default Home;
