import { FC, useEffect, useState } from "react";

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
    if (!actLink || !actLink.startsWith("/")) {
      console.error("Invalid or missing download link:", actLink);
      setDownloadState((prev) => ({ ...prev, [activityId]: "error" }));
      return;
    }

    const resolvedLink = `${window.location.origin}${actLink}`; // Resolve the full URL
    console.log(`Attempting to download from: ${resolvedLink}`);

    setDownloadState((prev) => ({ ...prev, [activityId]: "downloading" }));
    try {
      const response = await fetch(resolvedLink);
      if (!response.ok) {
        throw new Error(`Failed to download the file: ${response.statusText}`);
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
      console.error("Error downloading the file:", error);
      setDownloadState((prev) => ({ ...prev, [activityId]: "error" }));
    }
  };
  const getStatusText = (state: DownloadStateType | undefined) => {
    if (!state) return "Download";

    switch (state) {
      case "idle":
        return <span>Download</span>;
      case "downloading":
        return <span className=" ml-2">Downloading...</span>;
      case "error":
        alert("Error downloading the file. Please try again later.");
        return <span>Error</span>;
      default:
        return "Download";
    }
  };

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];

    Object.entries(downloadState).forEach(([activityId, state]) => {
      if (state === "downloaded" || state === "error") {
        const timeoutId = setTimeout(() => {
          setDownloadState((prev) => ({ ...prev, [activityId]: "idle" }));
        }, 5000);
        timeoutIds.push(timeoutId);
      }
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [downloadState]);

  return (
    <>
      {activities.length === 0 ? (
        <p>No Activities for this resource</p>
      ) : (
        <ul>
          {activities.map((activity, index) => (
            <li key={activity.actId}>
              Activity {index + 1}: {activity.actName} -{" "}
              <button
                onClick={() =>
                  handleDownload(
                    activity.actId,
                    activity.actName,
                    activity.actLink
                  )
                }
                disabled={downloadState[activity.actId] === "downloading"}
                className="cursor-pointer hover:font-semibold  width-50 underline "
              >
                {getStatusText(downloadState[activity.actId])}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DownloadLinks;
