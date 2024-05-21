import Image from "next/image";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import Container from "@/components/layout/Container";
import HomeEvent from "@/components/view/home/HomeEvent";
import Navbar from "@/components/layout/Navbar";
import HomeDictionary from "@/components/view/home/HomeDictionary";
import HomeBlog from "@/components/view/home/HomeBlog";
import HomeRecomendation from "@/components/view/home/HomeRecomendation";
import HomeCommunity from "@/components/view/home/HomeCommunity";
import WithUnprotected from "@/hoc/withUnprotected";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <Container>
      {/* <ThemeToggle /> */}
      <Navbar/>
      <HomeEvent/>
      <HomeDictionary/>
      <HomeRecomendation/>
      <HomeBlog/>
      <HomeCommunity/>
    </Container>
  );
}
export default Home
