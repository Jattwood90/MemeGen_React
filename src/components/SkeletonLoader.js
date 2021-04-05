import React from "react";
import './Memeapp.css';
import Skeleton from "react-loading-skeleton";

export const SkeletonLoader = () => {
    return (
        <div className="maincontainer">
            {/* Main image */}
            <div className="template">
                <Skeleton height={495} />
            </div>
                <div className="formMMcontainer">
                <h6 style={{textAlign:'center'}}>Loading Meme Generator</h6>
                {/* Image scroll wheel thing */}
                <div className="mmcontainer">
                    <Skeleton />
                </div>
                <hr></hr>
                </div>
        </div>
    )
}
export default SkeletonLoader;
