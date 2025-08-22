import img1 from "../../../assets/menu/salad-bg.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Cart = () => {
  // Example data for 3 cards
  const cards = [
    {
      id: 1,
      title: "Caeser Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      img: img1,
    },
    {
      id: 2,
      title: "Greek Salad",
      description: "Tomatoes, Cucumbers, Olives, Feta Cheese, Olive Oil.",
      img: img1,
    },
    {
      id: 3,
      title: "Garden Salad",
      description: "Mixed greens, Carrots, Tomatoes, Cucumbers, Vinaigrette.",
      img: img1,
    },
    {
      id: 4,
      title: "Garden Salad",
      description: "Mixed greens, Carrots, Tomatoes, Cucumbers, Vinaigrette.",
      img: img1,
    },
  ];

  return (
    <div>
      <section>
        <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 justify-items-center">
        {cards.map((card) => (
          <div key={card.id} className="card bg-base-100 w-80 shadow-sm">
            <figure>
              <img src={card.img} alt={card.title} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-outline hover:bg-black text-yellow-500 border-0 border-b-4 mt-4 uppercase">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
