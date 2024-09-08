import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/util";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";

type ProjectLitsProps = {
  projects: Project[];
  type: string;
};
export default function ProjectList({ projects, type }: ProjectLitsProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [chosenProject, setChosenProject] = useState<Project | null>(null);
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectCard project={chosenProject} />
      </Modal>
      <h1 className="mt-10 text-3xl font-semibold flex justify-center ">
        {type} Projects
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="rounded-t-lg  pb-6  border  border-gray-700  overflow-hidden flex flex-col justify-between"
          >
            <Link href={project.link} target="_blank">
              <div key={key}>
                <div className="border-2 flex justify-center items-center">
                  <Image
                    width={300}
                    height={500}
                    src={project.folderUrl + "/1.png"}
                    alt={`Project Image ${key}`}
                    className="object-cover cursor-pointer  w-full h-60 hover:scale-105 duration-500"
                  />
                </div>

                <div className="p-3">
                  <h4 className="text-lg font-semibold mt-4">{project.name}</h4>
                  <p className="mt-4 line-clamp-3">{project.description}</p>
                </div>
              </div>
            </Link>
            <div className="p-3 cursor-pointer">
              <p
                className="mt-4 line-clamp-3 underline text-blue-500 hover:text-blue-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setChosenProject(project);
                  setIsModalOpen(true);
                }}
              >
                Show Details
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
