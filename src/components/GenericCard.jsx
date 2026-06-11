import React from "react";

const GenericCard = ({ children, title, className }) => {
  return (
    <section
      className={`transition-all duration-200 bg-bg-secondary rounded-xl p-10 border border-gold-muted hover:border-gold-light-muted ${className} hover:-translate-y-1`}
    >
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default GenericCard;
