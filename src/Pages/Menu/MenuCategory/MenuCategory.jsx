import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems"


const MenuCategory = ({items, title, img}) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to={`/oder/${title}`}>
          <button className="btn btn-outline border-0 border-b-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuCategory
