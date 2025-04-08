// import { reso } from "@/data/dummyCategories";

import { resourceCards } from "@/data/dummyResources";
import { FC } from "react";

interface ResourceDetailsProps {
  id: string | undefined;
}

const ResourceDetails: FC<ResourceDetailsProps> = ({ id }) => {
  const resource = resourceCards.find((resource) => resource.id === id);
  const { title, description, date } = resource || {};
  !resource && (
    <div className="text-4xl font-extrabol">
      Resource not found, please try again later
    </div>
  );
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p className="font-bold text center"> Activity for this Resource</p>
          <ul>
            <li>
              Activity 1:{" "}
              <a onClick={() => console.log("Activity 1: Downloaded")}>
                {resource?.title} Activity 1 PDF Download
              </a>
            </li>
            <li>
              Activity 2:{" "}
              <a onClick={() => console.log("Activity 2: Downloaded")}>
                Click to Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ResourceDetails;
