// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SidebarProvider } from "@/components/ui/sidebar"; // make sure this path is correct
import AppSidebar from "@/components/AppSidebar"; // your sidebar component
import { SidebarToggle } from "@/components/ui/SidebarToggle";
import TopNav from "@/components/TopNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      
      {/* Sidebar will be rendered on every page */}
      <AppSidebar />

      {/* Main content */}
      <main className="w-full"> {/* optional, add left margin to not overlap the sidebar */}
        <Component {...pageProps} />
      </main>
    </SidebarProvider>
  );
}


// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
