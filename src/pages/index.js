import Image from "next/image";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import Container from "@/components/layout/Container";
import HomeEvent from "@/components/view/home/HomeEvent";
import Navbar from "@/components/layout/Navbar";
import HomeDictionary from "@/components/view/home/HomeDictionary";
import HomeBlog from "@/components/view/home/HomeBlog";
import HomeRecomendation from "@/components/view/home/HomeRecomendation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      {/* <ThemeToggle /> */}
      <Navbar/>
      <HomeEvent/>
      <hr className="hr"/>
      <HomeDictionary/>
      <hr className="hr"/>
      <HomeBlog/>
      <hr className="hr"/>
      <HomeRecomendation/>
    </Container>
  );
}
