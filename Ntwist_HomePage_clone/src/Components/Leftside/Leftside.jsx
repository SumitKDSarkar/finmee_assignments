import React from "react";

const Leftside = ({
  imgSrcLeft,
  imgAltLeft,
  headingLeft,
  paragraphLeft,
  linkLeft,
}) => {
  return (
    <div className="left-side-container">
      <div className="left-side-image">
        {imgSrcLeft && imgAltLeft && (
          <img className="left-side-img" src={imgSrcLeft} alt={imgAltLeft} />
        )}
      </div>

      <div className="left-side-content">
        <div>
          {headingLeft && <h1 className="left-side-heading">{headingLeft}</h1>}
        </div>
        <div>
          {paragraphLeft && (
            <p className="left-side-paragraph">{paragraphLeft}</p>
          )}
        </div>
        <div className="left-side-div">
          {linkLeft && (
            <a href="#" className="left-side-link">
              {linkLeft}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leftside;
