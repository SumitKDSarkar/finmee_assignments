import React from "react";

const Rightside = ({
  imgSrcRight,
  imgAltRight,
  headingRight,
  paragraphRight,
  linkRight,
  href,
}) => {
  return (
    <div className="right-side-container">
      <div className="right-side-image">
        {imgSrcRight && imgAltRight && (
          <img className="right-side-img" src={imgSrcRight} alt={imgAltRight} />
        )}
      </div>

      <div className="right-side-content">
        <div>
          {headingRight && (
            <h1 className="right-side-heading">{headingRight}</h1>
          )}
        </div>
        <div>
          {paragraphRight && (
            <p className="right-side-paragraph">{paragraphRight}</p>
          )}
        </div>
        <div className="right-side-div">
          {linkRight && href && (
            <a href={href} className="right-side-link">
              {linkRight}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rightside;
