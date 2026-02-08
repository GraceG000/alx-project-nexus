"use client";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarToggleDark() {
  const { toggleSidebar, open } = useSidebar();
  
  return (
    <div 
      className={`btn btn-circle swap swap-rotate text-black ${open ? 'swap-active' : ''}`}
      onClick={toggleSidebar}
    >
      {/* hamburger icon (shows when CLOSED) */}
      <svg
        className={`swap-off fill-current ${open ? 'hidden' : 'block'}`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512">
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>
      
      {/* close icon (shows when OPEN) */}
      <svg
        className={`swap-on fill-current ${open ? 'block' : 'hidden'}`}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512">
        <polygon
          points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </div>
  );
}


// "use client";
// import { useSidebar } from "@/components/ui/sidebar";

// export function SidebarToggle() {
//   const { toggleSidebar } = useSidebar();
//   return (
//  <>

//     <button
//       className="p-2 bg-blue-500 text-white rounded"
//       onClick={toggleSidebar}
//     >
//       Toggle Sidebar
//     </button>
//  </>



//   );
// }
