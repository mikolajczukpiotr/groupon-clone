import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import DealList from "../components/DealList";
import PromoList from "../components/PromoList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      <DealList />
      <PromoList />
    </div>
  );
}
