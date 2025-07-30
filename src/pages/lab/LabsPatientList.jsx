import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableHeader } from "../../Component/common/Table/TableHeader";
import { Table } from "../../Component/common/Table/Table";
import { LabTableHeadiing, LabTableValue } from "../../utils/variable/lab";
import { Pagination } from "../../Component/common/Pagination";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LabsPatientList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const actionData = [
    {
      name: "listlab",
      onClick: () => {
        // Action for listlab, you can add functionality here
        console.log("List lab clicked");
      },
    },
    {
      name: "cash",
      onClick: () => {
        setIsLoading(true); // Set loading to true before navigating
        setTimeout(() => {
          navigate("lab-print");
        }, 20000); // Simulate a delay before navigating
      },
    },
  ];

  return (
    <>
      <TableHeader title={"Lab"} isBlue={true} isSearch={false} />
      {isLoading ? (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#cccccc">
          <div style={{ backgroundColor: "white", padding: "20px" }}>
            <div className="mb-3">
              {[...Array(5)].map((_, index) => (
                <Skeleton
                  key={index}
                  height={40}
                  width="100%"
                  style={{ marginBottom: "1px" }} // 4px gap between skeletons
                />
              ))}
            </div>

            {/* <Skeleton height={300} width="100%" style={{ marginBottom: "20px" }} />
            <Skeleton height={246} width="100%" /> */}
          </div>
        </SkeletonTheme>
      ) : (
        <Table
          tableHead={LabTableHeadiing}
          tableValue={LabTableValue}
          isBlue={true}
          actionData={actionData}
        />
      )}
      <Pagination />
    </>
  );
};

export default LabsPatientList;
