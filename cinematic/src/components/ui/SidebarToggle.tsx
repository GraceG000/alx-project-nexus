"use client";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarToggle() {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      className="p-2 bg-blue-500 text-white rounded"
      onClick={toggleSidebar}
    >
      Toggle Sidebar
    </button>
  );
}
