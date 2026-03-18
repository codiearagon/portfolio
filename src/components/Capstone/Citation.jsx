const Citation = ({ author, title, publisher, year, url, accessDate }) => {
  return (
    <p className="text-md pl-8 -indent-8">
      {author && <span>{author}. </span>}
      {title && <span className="italic">"{title}." </span>}
      {publisher && <span>{publisher}, </span>}
      {year && <span>{year}. </span>}
      {url && (
        <a className="text-blue-600 hover:text-blue-500" href={url}>
          {url}.{" "}
        </a>
      )}
      {accessDate && <span>Accessed {accessDate}.</span>}
    </p>
  );
};

export default Citation;
