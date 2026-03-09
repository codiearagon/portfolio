const Citation = ({ author, title, publisher, year, url, accessDate }) => {
  return (
    <p className="text-md pl-8 -indent-8">
      {author && <span>{author}. </span>}
      {title && <span className="italic">"{title}." </span>}
      {publisher && <span>{publisher}, </span>}
      {year && <span>{year}. </span>}
      {url && <span>{url}. </span>}
      {accessDate && <span>Accessed {accessDate}.</span>}
    </p>
  );
};

export default Citation;
