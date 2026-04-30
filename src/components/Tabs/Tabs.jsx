const Tabs = ({ modelCards, setActiveTab }) => {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent shadow-none">
        <input
          onClick={() => setActiveTab("Models")}
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full"
          aria-label="Models"
          defaultChecked
        />
        <input
          onClick={() => setActiveTab("Cart")}
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full"
          aria-label={`Cart (${modelCards.length})`}
        />
      </div>
    </>
  );
};

export default Tabs;
