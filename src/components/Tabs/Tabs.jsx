const Tabs = () => {
  return (
    <>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent shadow-none">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full"
          aria-label="Models"
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab w-40 rounded-full"
          aria-label="Cart"
        />
      </div>
    </>
  );
};

export default Tabs;
