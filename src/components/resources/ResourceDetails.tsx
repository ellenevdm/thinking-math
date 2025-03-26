import { resourceCards } from "@/data";
import { FC } from "react";

interface ResourceDetailsProps {
  id: string;
}

const ResourceDetails: FC<ResourceDetailsProps> = ({ id }) => {
  const resource = resourceCards.find((resource) => resource.id === id);
  !resource && (
    <div className="text-4xl font-extrabol">
      Resource not found, please try again later
    </div>
  );
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">{resource?.title}</h3>
        <div>
          <p className="font-bold text center"> Activity for this Resource</p>
          <ul>
            <li>
              Activity 1:{" "}
              <a onClick={() => console.log("Activity 1: Downloaded")}>
                {resource?.title} PDF Download
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
