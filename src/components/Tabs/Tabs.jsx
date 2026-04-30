const Tabs = ({ modelCards, activeTab, setActiveTab }) => {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent shadow-none">
        <input
          onClick={() => setActiveTab("Models")}
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full font-semibold"
          style={{
            background:
              activeTab === "Models" &&
              "linear-gradient(135deg, #ff416c, #ff4b2b)",
              color: activeTab === "Models" && "white",
          }}
          aria-label="Models"
          defaultChecked
        />
        <input
          onClick={() => setActiveTab("Cart")}
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full font-semibold"
          style={{
            background:
              activeTab === "Cart" &&
              "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: activeTab === "Cart" && "white",
          }}
          aria-label={`Cart (${modelCards.length})`}
        />
      </div>
    </>
  );
};

export default Tabs;
