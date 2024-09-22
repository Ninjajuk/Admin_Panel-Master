import NavHeader from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar2";



export default function Home() {
  return (
    <>
      <NavHeader/>

      <Sidebar/>
        <div className=" font-[family-name:var(--font-geist-sans)] mx-auto">
        <h1 className="font-bold text-2xl text-center text-primary py-48">Hi Samsu Welcome to the Admin Panel</h1>
      </div>

    </>

  );
}
