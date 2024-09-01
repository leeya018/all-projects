"use client";
import Modal from "@/components/Modal";
import ProjectCard from "@/components/ProjectCard";
import { projectDetails } from "@/util";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectInd, setProjectInd] = useState(-1);

  return (
    <div className="container mx-auto p-4">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProjectCard projectInd={0} />
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectDetails.map((project, key) => (
          <div
            key={key}
            className="rounded-t-lg  pb-6  border  border-gray-700  overflow-hidden flex flex-col justify-between"
          >
            <Link key={key} href={project.link} target="_blank">
              <div className="border-2 flex justify-center items-center">
                <Image
                  width={300}
                  height={500}
                  src={project.folderUrl + "/1.png"}
                  alt={`Project Image ${key}`}
                  className="object-cover cursor-pointer  w-full h-60 hover:scale-105 duration-500"
                />
              </div>
            </Link>
            <div className="p-3">
              <h4 className="text-lg font-semibold mt-4">{project.name}</h4>
              <p className="mt-4 line-clamp-3">{project.description}</p>
              <p
                className="mt-4 line-clamp-3 underline text-blue-500 hover:text-blue-600"
                onClick={(e) => {
                  e.stopPropagation();
                  setProjectInd(key);
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
