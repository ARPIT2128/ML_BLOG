import React from "react";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  const truncatedText = text.substr(0, text.lastIndexOf(" ", maxLength));
  return truncatedText + "...";
};

const CarouselItem = ({ title, subtitle, date, content, imgUrl, link }) => {
  const truncatedContent = truncateText(content, 100);
  return (
    <div className="col-md-6">
      <div className="custom-container row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            {subtitle}
          </strong>
          <h3 className="mb-0">{title}</h3>
          <div className="mb-1 text-muted">{date}</div>
          <p className="card-text mb-auto">{truncatedContent}</p>
          <a href={link} className="stretched-link">
            Continue reading
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img
            src={imgUrl}
            className="bd-placeholder-img"
            width="200"
            height="250"
            alt="Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
