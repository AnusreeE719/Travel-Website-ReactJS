import React from "react";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import "./Packages.css";

const PackageCard = (props) => {
  return (
    <div className="package-card">
      <div className="package-image">
        <img src={props.imageUrl} alt="pkgImg" />
      </div>
      <div className="package-content">
        <p className="place-n-cost">
          {props.place}
          <span>
            <i>
              <BiRupee />
            </i>
            {props.cost}
          </span>
        </p>
        <p className="duration">
          {props.duration}
          <span>
            <button>
            <Link to={`/PackageDetails/${props.id}`} className="p-link">
              Details
            </Link>
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
