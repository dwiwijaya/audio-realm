import Image from "next/image";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import Container from "@/components/layout/Container";
import HomeEvent from "@/components/view/home/HomeEvent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <ThemeToggle />
      <HomeEvent/>
    </Container>
  );
}
