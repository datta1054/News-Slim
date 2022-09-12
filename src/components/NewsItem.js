import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    let dummy1 = "Please Click on Read More to read the further information about this article .This article gives the information about ";

    description = description + " "+dummy1;
    return (
        <div className="container my-4">
            <div className="card mainCard">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        position: "absolute",
                        right: "0",
                    }}
                >
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                </div>

                <img
                    src={
                        !imageUrl
                            ? "https://images.unsplash.com/photo-1512168203104-3910bc2bcd54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            : imageUrl
                    }
                    className="card-img-top imagheih"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {title.length > 80 ? title.slice(0, 82) + "..." : title + " "}{" "}
                    </h5>
                    <p className="card-text">
                        {description.slice(0, 120)}...
                    </p>
                    <p className="card-text">
                        <small className="text-muted">
                            By {!author ? source : author.slice(0, 70)}{" "}
                            <p> On {new Date(date).toGMTString()}</p>
                        </small>
                    </p>

                    <a
                        href={newsUrl}
                        target="_blank"
                        className="btn btn-sm btn-primary readMore"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;