import Citation from "./Citation";

const BibliographySection = ({ section, annotation, references }) => {
  const stripArticle = (title) => {
    return title.replace(/^(a |an |the )/i, "").trim();
  };

  const sortByAuthorThenTitle = (refs) => {
    const withAuthor = refs.filter((ref) => ref.author?.[0]?.family);
    const withoutAuthor = refs.filter((ref) => !ref.author?.[0]?.family);

    withAuthor.sort((a, b) => {
      const authorA = a.author[0].family;
      const authorB = b.author[0].family;
      return authorA.localeCompare(authorB);
    });

    withoutAuthor.sort((a, b) => {
      const titleA = stripArticle(a.title || "");
      const titleB = stripArticle(b.title || "");
      return titleA.localeCompare(titleB);
    });

    return [...withoutAuthor, ...withAuthor];
  };

  return (
    <div className="bg-bg-secondary transition-all duration-300 border border-gold-muted hover:border-gold-light-muted hover:-translate-y-1 rounded-xl mt-10">
      <div className="px-8 py-8">
        <h2 className="capstone-h2">{section}</h2>
        <p className="mt-2">{annotation}</p>
      </div>
      <div className="max-w-3xl mx-auto px-8 pb-6 flex flex-col gap-4">
        {sortByAuthorThenTitle(references).map((ref, index) => (
          <Citation
            key={index}
            author={
              ref.author?.[0]?.family && ref.author?.[0]?.given
                ? `${ref.author[0].family}, ${ref.author[0].given}`
                : ref.author?.[0]?.family || undefined
            }
            title={ref.title || undefined}
            publisher={ref.publisher || ref["container-title"] || undefined}
            year={ref.issued?.["date-parts"]?.[0]?.[0] || undefined}
            url={ref.URL || undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default BibliographySection;
