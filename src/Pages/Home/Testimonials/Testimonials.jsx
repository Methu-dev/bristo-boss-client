import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((reviews) => (
          <SwiperSlide key={reviews._id}>
            <div className="flex flex-col items-center mx-24 py-16">
              <Rating
                style={{ maxWidth: 180 }}
                value={reviews.rating}
                readOnly
              />
              <span className="m-4">
                <FaQuoteLeft className="text-6xl" />
              </span>
              <p className="py-6">{reviews.details}</p>
              <h3 className="text-2xl text-yellow-500">{reviews.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials
