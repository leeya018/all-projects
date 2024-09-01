import { projectDetails } from "@/util";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  projectInd: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectInd }) => {
  if (projectInd === -1) return;

  return (
    <div
      className="p-6 duration-300 relative overflow-y-scroll 
      scrollbar-hide  max-h-[80vh]"
    >
      <h2 className="text-2xl font-semibold">
        {projectDetails[projectInd].name}
      </h2>
      <p className="mt-2">{projectDetails[projectInd].description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 ">
        {Array(projectDetails[projectInd].imagesAmount)
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              src={projectDetails[projectInd].folderUrl + `/${index + 1}.png`}
              className="w-full h-auto rounded hover:scale-105 duration-1000"
            />
          ))}
      </div>
      <div className="mt-8 ">
        <Link
          href={projectDetails[projectInd].link}
          target="_blank"
          className="text-blue-500 hover:text-blue-600 text-xl hover:underline"
        >
          <span>open site</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
