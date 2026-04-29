import { Suspense } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Models from "./components/Models/Models";
import NavBar from "./components/NavBar/NavBar";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
}

function App() {
  const modelPromise = getModels();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
        <Models modelPromise={modelPromise}></Models>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
