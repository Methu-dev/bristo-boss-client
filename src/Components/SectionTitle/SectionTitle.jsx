

const SectionTitle = ({subHeading, heading}) => {
  return (
    <div className="mx-auto md:w-3/12 text-center my-8">
      <p className="text-yellow-500 italic text-xl mb-4">---{subHeading}---</p>
      <h1 className="text-4xl font-bold border-y-4 py-3 border-gray-500">{heading}</h1>
    </div>
  );
}

export default SectionTitle
