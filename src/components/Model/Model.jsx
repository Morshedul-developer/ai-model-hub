const Model = ({ model }) => {
  const { title, description, price, image, status } = model;
  return (
    <div className="border border-zinc-200 shadow-lg rounded-2xl overflow-hidden flex flex-col">
      <div className="flex justify-center h-50 bg-zinc-300">
        <img
          className="w-35 object-contain rounded-2xl"
          src={image}
          alt={title}
        />
      </div>
      <div className="p-5 space-y-3 flex flex-col flex-1">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="font-bold text-xl">${price}/month</p>
        <button className="btn w-full bg-red-500 text-white rounded-md hover:bg-red-600 mt-auto">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Model;
