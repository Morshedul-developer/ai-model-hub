import CartCard from "../CartCard/CartCard";

const Cart = ({ modelCards, setModelCards }) => {
  const totalPrice = modelCards.reduce((sum, card) => sum + card.price, 0);

  const handleCheckout = () => {
    setModelCards([]);
  };

  return (
    <div className="max-w-7xl mx-auto py-20 space-y-4">
      <h1 className="text-4xl font-bold">Your Carts</h1>
      {modelCards.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-5">
            {modelCards.map((card) => (
              <CartCard key={card.id} card={card} />
            ))}
          </div>

          <div className="flex justify-between items-center bg-black text-white p-7 rounded-xl text-2xl font-bold">
            <div>Total</div>
            <div>${totalPrice}</div>
          </div>
          <button
            onClick={handleCheckout}
            className="btn btn-error w-full text-white py-7 text-xl font-bold rounded-xl"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
