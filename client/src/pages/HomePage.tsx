import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const HomePage = ({ children }) => {
  return (
    <>
      <>{<Header />}</>
      <main>{children}</main>
      <>{<Footer />}</>
    </>
  );
};
