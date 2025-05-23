// import { reso } from "@/data/dummyCategories";

import { resourceCards } from "@/data/dummyResources";
import { FC } from "react";
import DownloadLinks from "./DownloadComponent";

interface ResourceDetailsProps {
  id: string | undefined;
}

const ResourceDetails: FC<ResourceDetailsProps> = ({ id }) => {
  const resource = resourceCards.find((resource) => resource.id === id);
  const { title, description, activities } = resource || {};
  if (!resource) {
    return (
      <div className="text-4xl font-extrabold">
        Resource not found, please try again later
      </div>
    );
  }
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div>
          <p>{description}</p>
        </div>
        <div>
          <p className="font-bold text center"> Activity for this Resource</p>
          <DownloadLinks
            activities={(activities || []).map((activity) => ({
              id: activity.actId,
              name: activity.actName,
              link: activity.actLink,
            }))}
          />
        </div>
      </div>
    </>
  );
};

export default ResourceDetails;
