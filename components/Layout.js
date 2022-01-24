import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-screen p-4 3xl:w-1330 m-auto">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
