import { Link } from "react-router-dom";
import Herosection from "../components/Herosection"; 
import CtaSection from "../components/CtaSection";

export default function Home() {
  return (
    <section className=" max-w-6xl mx-auto">
      <Herosection />
      <CtaSection/>
    </section>
  );
}