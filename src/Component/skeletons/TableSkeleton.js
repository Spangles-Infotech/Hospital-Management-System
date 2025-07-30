import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const TableSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#cccccc" width={"100vw"}>
      <div className="">
        <div className="mb-3">
          {[...Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              height={50}
              width="100%"
              style={{ marginBottom: "2px" }}
            />
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};