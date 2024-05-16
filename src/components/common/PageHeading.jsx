import React from "react";  

  const PageHeading = ({ title, description }) => {
    return (
      <div className="mt-6">
        <h2 className="relative font-bold text-xl text-text dots">{title}</h2>
        <p className="leading-5 mb-4 text-subtext text-sm">
          {description}
        </p>
      </div>
    );
  };
  
  export default PageHeading;
  