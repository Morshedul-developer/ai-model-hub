import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Models from "./components/Models/Models";
import NavBar from "./components/NavBar/NavBar";
import Tabs from "./components/Tabs/Tabs";
import Cart from "./components/Cart/Cart";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

function App() {
  const [activeTab, setActiveTab] = useState("Models");
  const [modelCards, setModelCards] = useState([]);

  const modelPromise = getModels();
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Tabs modelCards={modelCards} activeTab={activeTab} setActiveTab={setActiveTab}></Tabs>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-64">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        }
      >
        {activeTab === "Models" && (
          <Models modelPromise={modelPromise} modelCards={modelCards} setModelCards={setModelCards} ></Models>
        )}
        {activeTab === "Cart" && <Cart modelCards={modelCards} setModelCards={setModelCards} ></Cart>}
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
