import { SidebarToggle } from "./ui/SidebarToggle";

const TopNav = () => {
    return(
        <>
        <div className="flex justify-between">
        <div>
          <SidebarToggle />
        </div>
        
        <div>
          <input type="search" />
        </div>
        
        </div>
       
        </>
    )
}
export default TopNav;