const CartCard = ({card}) => {
    return (
        <div className="border p-5 rounded-xl">
            <div>
                <img className="w-20 h-20 object-contain" src={card.image} alt={card.title} />
            </div>
            <h2></h2>
        </div>
    );
};

export default CartCard;