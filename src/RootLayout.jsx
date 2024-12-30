import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function RootLayout() {
  return (
    <div className="bg-white border-x-2 border-stone-300 h-screen md:w-3/4 mx-auto w-full overflow-y-scroll flex flex-col ">
      <div className="">
        <Nav />
      </div>
      <main className="h-full overflow-hidden">
        <Outlet />
      </main>
      <footer className="py-5 bg-green-500">
        
      </footer>
    </div>
  );
}