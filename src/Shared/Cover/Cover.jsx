import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="cover image"
      strength={200}
    >
      <div className="hero h-[700px] flex items-center justify-center">
        <div
          className="p-10 rounded-lg text-center text-white max-w-2xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5))",
          }}
        >
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
