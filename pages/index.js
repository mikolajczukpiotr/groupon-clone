import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import DealList from "../components/DealList";
import PromoList from "../components/PromoList";

export default function Home() {
  return (
    <div className="w-screen p-4 3xl:w-1330 m-auto">
      <Navbar />
      <Heading />
      <DealList />
      <PromoList />
    </div>
  );
}
