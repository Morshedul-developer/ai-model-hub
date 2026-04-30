const CartCard = ({ card }) => {
  return (
    <>
    <div className="border p-5 rounded-xl flex items-center justify-between">
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
        <p className="text-lg font-bold">${card.price}/month</p>
      </div>
    </div>
    </>
  );
};

export default CartCard;
