import CartCard from "../CartCard/CartCard";

const Cart = ({ modelCards }) => {
    return (
        <div className="max-w-7xl mx-auto py-20 space-y-4">
            <h1 className="text-4xl font-bold">Your Carts</h1>
            <div className="space-y-5">
                {
                    modelCards.map(card => <CartCard key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

export default Cart;