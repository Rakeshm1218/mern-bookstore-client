import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "../src/components/Navbar.jsx";
import MyFooter from "./components/MyFooter";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <Spinner
            aria-label="Center-aligned spinner example"
            size="xl"
            color="purple"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen">
            <Outlet/>
          </div>
          <MyFooter />
        </div>
      )}
    </div>
  );
}

export default App;
