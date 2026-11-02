import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Group from "./components/Group";
import Event from "./components/Event";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-ink">
      <Nav />
      <main>
        <Hero />
        <Journey />
        <Services />
        <Group />
        <Event />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
