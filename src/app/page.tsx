"use client";
import Modal from "@/components/Modal";
import ProjectCard from "@/components/ProjectCard";
import ProjectList from "@/components/ProjectList";
import ToggleButton from "@/components/ToggleButton";
import { clientProjects, myProjects, project_types } from "@/util";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainPage() {
  const [projcets, setProjcets] = useState(myProjects);
  const [type, setType] = useState(project_types.my);

  const handleType = () => {
    if (type === project_types.my) {
      setProjcets(clientProjects);
      setType(project_types.clients);
    } else {
      setProjcets(myProjects);

      setType(project_types.my);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToggleButton type={type} onToggle={handleType} />
      <ProjectList projects={projcets} type={type} />
    </div>
  );
}
