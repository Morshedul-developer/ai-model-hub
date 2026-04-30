const CartCard = ({ card }) => {
  return (
    <>
    <div className="border border-gray-200 shadow-xl p-5 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div>
          <img
            className="w-20 h-20 object-contain animate-pulse"
            src={card.image}
            alt={card.title}
          />
        </div>
        <h2 className="text-xl font-bold">{card.title}</h2>
      </div>
      <div>
        <p className="text-gray-500">{card.description}</p>
      </div>
      <div className="flex items-center gap-5">
        <p className="text-lg font-bold">${card.price}/month</p>
        <button className="btn rounded-full btn-error text-white">X</button>
      </div>
    </div>
    </>
  );
};

export default CartCard;
