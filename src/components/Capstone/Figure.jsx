const Figure = ({ figureTitle, src }) => {
  return (
    <div>
      <p className="italic mt-4 mb-2">{figureTitle}</p>
      <img src={src} className="w-full rounded-lg" />
    </div>
  );
};

export default Figure;
