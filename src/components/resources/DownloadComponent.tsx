import { FC, useState } from "react";
import { Button } from "../ui/Button";
import { Activity } from "@/types/activity";

interface DownloadLinksProps {
  activities: Activity[];
}
type DownloadStateType = "idle" | "downloading" | "downloaded" | "error";

const DownloadLinks: FC<DownloadLinksProps> = ({ activities }) => {
  const [downloadState, setDownloadState] = useState<
    Record<string, DownloadStateType>
  >({});

  const handleDownload = async (
    activityId: string,
    actName: string,
    actLink: string
  ) => {
    setDownloadState((prev) => ({ ...prev, [activityId]: "downloading" }));
    try {
      const response = await fetch(actLink);
      if (!response.ok) {
        throw new Error("Failed to download the file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = actName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      setDownloadState((prev) => ({ ...prev, [activityId]: "downloaded" }));
      console.info(`${actName} is downloaded`);
    } catch (error) {
      setDownloadState((prev) => ({ ...prev, [activityId]: "error" }));
      console.error("Error downloading the file:", error);
    }
  };

  const getStatusText = (state: DownloadStateType | undefined) => {
    switch (state) {
      case "downloading":
        return <span className="text-yellow-500 ml-2">Downloading...</span>;
      case "downloaded":
        return (
          <span className="text-green-500 ml-2">Succesfully Downloaded</span>
        );
      case "error":
        return <span className="text-red-500 ml-2">Error</span>;
      default:
        return null;
    }
  };

  return (
    <>
      {activities.length === 0 ? (
        <p>No Activities for this resource</p>
      ) : (
        <ul>
          {activities.map((activity, index) => (
            <li key={activity.actId}>
              Activity {index + 1}: {activity.actName} -{" "}
              <Button
                onClick={() =>
                  handleDownload(
                    activity.actId,
                    activity.actName,
                    activity.actLink
                  )
                }
                disabled={downloadState[activity.actId] === "downloading"}
                className="underline cursor-pointer hover:text-gray-600"
              >
                Click to Download
              </Button>
              {getStatusText(downloadState[activity.actId])}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DownloadLinks;
