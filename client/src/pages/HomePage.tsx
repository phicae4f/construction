import type { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface HomePageProps {
  children: ReactNode;
}

export const HomePage = ({ children }: HomePageProps) => {
  return (
    <>
      <>{<Header />}</>
      <main>{children}</main>
      <>{<Footer />}</>
    </>
  );
};
