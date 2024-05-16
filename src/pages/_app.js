import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import "@/styles/ui.css";
import { Nunito } from "next/font/google";
import Overlay from "@/components/layout/Overlay";

const nunito = Nunito({
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${nunito.className} group/main lg:ml-[80px]  ml-0`}>
        <Overlay />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
