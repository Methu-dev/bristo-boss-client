import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="Featured-item bg-fixed my-20 pt-6 text-white">
      <SectionTitle subHeading="Check it out" heading="FROM OUR MENU" />
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-opacity-10">
        <div>
          <img src={feature} alt="" />
        </div>
        <div className="md:ml-10">
          <p>March 20, 2029</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Featured
