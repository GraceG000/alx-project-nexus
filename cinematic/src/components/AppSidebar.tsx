// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";


const AppSidebar = () => {
return (
    <Sidebar side="left" variant="sidebar">
      <SidebarHeader>My Sidebar</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <div>Dashboard</div>
          <div>Movies</div>
          <div>Favorites</div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>Footer Info</SidebarFooter>
    </Sidebar>
  );
}
export default AppSidebar;
