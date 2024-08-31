"use client";
import { projectDetails } from "@/util";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function MainPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectDetails.map((project, key) => (
          <div
            key={key}
            // onClick={() => {
            //   setChosenProjectInd(Number(key));
            //   ModalStore.openModal(modals.project);
            // }}
            className="rounded-t-lg cursor-pointer pb-6  border  border-gray-700  overflow-hidden flex flex-col justify-between"
          >
            <div className="border-2 flex justify-center items-center">
              <Image
                width={300}
                height={500}
                src={project.folderUrl + "/1.png"}
                alt={`Project Image ${key}`}
                className="object-cover  w-full h-60 hover:scale-105 duration-500"
              />
            </div>
            <div className="p-3">
              <h4 className="text-lg font-semibold mt-4">{project.name}</h4>
              <p className="mt-4 line-clamp-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
