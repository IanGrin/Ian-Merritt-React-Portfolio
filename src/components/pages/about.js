import React from "react";
import profilePicture from "../../../static/assets/images/bio/IMG_0024.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        We're gonna start with the About and Contact pages, so in this guide,
        we're going to build out all of the styles and the content for our About
        page and then in the next guide, we'll finish off the Content page. This
        should be a lot of review for you because we've really covered most of
        these concepts. We're not gonna be talking about state or really even
        working with the main components that make up React. We're instead gonna
        be focusing primarily on styles, such as implementing CSS Grid and being
        able to work with the file system, so let's get started.
      </div>
    </div>
  );
}
