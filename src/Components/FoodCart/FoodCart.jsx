

const FoodCart = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="missing img" />
      </figure>
      <p className="absolute bg-black text-white right-0 p-2 mr-4 mt-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions ">
          <button className="btn btn-outline text-orange-300 border-orange-300 hover:bg-gray-800 bg-slate-100 border-0 border-b-4">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart
