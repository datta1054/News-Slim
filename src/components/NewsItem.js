import React from "react";
import "./NewsItem.css";
const NewsItem = ({
  mode,
  title,
  explaination,
  imageurl,
  readmore,
  author,
  time,
  name,
}) => {
  const c = mode;

  return (
    <div>
      <div className="card ncard" id="slidebar-push">
        <img
          className="card-img-top"
          src={imageurl}
          alt="
          The News Slim website gives the daily news about various fields such as Entertainment, Business, Health, Science, Sports, and Technology. Something went wrong. Image is not loading.."
          style={{ height: "10rem" }}
        />
        <div
          className="card-body"
          style={{
            display: "-webkit-box",
            flex: "1 1 auto",
            flexDirection: "row",
            flexWrap: "wrap",
            alignSelf: "normal",
            backgroundColor: c === "dark" ? "#444444" : "white",
            color: c === "dark" ? "white" : "black",
          }}
        >
          <h5 className="card-title ncard-title">
            {title.toString().replaceAll(",", " ")}..
          </h5>
          <p className="card-text ">{explaination}...</p>
          <small className="text-muted">
            <p
              style={{
                color: c === "dark" ? "#FFAFAF" : "black",
                fontWeight: "500",
              }}
            >
              <p>By {!author ? "Anonymous" : author} </p>
              updated on {new Date(time).toDateString()}
            </p>

            <span
              className="translate-middle badge rounded-pill bg-danger nname"
              id="source"
            >
              {name}
            </span>
          </small>
          <p
            className="card-text"
            style={{ width: "-webkit-fill-available" }}
          ></p>

          <a
            href={readmore}
            target="_blank"
            rel="noreferrer"
            className="btn btn-info success-button"
            role="button"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
