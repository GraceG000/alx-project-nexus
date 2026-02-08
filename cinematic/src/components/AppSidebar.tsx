// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";


const AppSidebar = () => {
return (
    <Sidebar side="left" variant="sidebar">
      <SidebarHeader>My Sidebar</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <Link href={`/dashboard`}><div>Dashboard</div> </Link>
          <Link href={`/movies`}><div>Movies</div></Link>
          <Link href={`/favourites`}><div>Favorites</div></Link>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>Footer Info</SidebarFooter>
    </Sidebar>
  );
}
export default AppSidebar;
