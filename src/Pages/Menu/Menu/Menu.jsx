import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import Cover from "../../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import Dessert from "../../../assets/menu/dessert-bg.jpeg"
import Pizza from "../../../assets/menu/pizza-bg.jpg"
import Salad from "../../../assets/menu/salad-bg.jpg";
import Soup from "../../../assets/menu/soup-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const [menu] = UseMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
  return (
    <>
      <title>Bristo Boss | Menu</title>

      <div>
        <Cover img={coverImg} title="OUR MENU"></Cover>
        <SectionTitle
          subHeading="Don't miss"
          heading="TODAY'S OFFER"
        ></SectionTitle>
        <MenuCategory items={offered} />
        <MenuCategory items={dessert} title="desserts" img={Dessert} />
        <MenuCategory items={pizza} title="pizza" img={Pizza} />
        <MenuCategory items={salad} title="salad" img={Salad} />
        <MenuCategory items={soup} title="soups" img={Soup} />
      </div>
    </>
  );
};

export default Menu
