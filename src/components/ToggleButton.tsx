import { project_types } from "@/util";
import { useState } from "react";

type ToggleButtonProps = {
  onToggle?: () => void;
  type: string;
};

export default function ToggleButton({ type, onToggle }: ToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-2 w-20 rounded ${
        type === project_types.my ? "bg-blue-500" : "bg-green-500"
      } text-white transition-colors duration-300`}
    >
      {type === project_types.my ? project_types.clients : project_types.my}
    </button>
  );
}
