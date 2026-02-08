// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'

const AppSidebar = () => {
  return (
    <Sidebar side='left' variant='sidebar'>
      <SidebarHeader>
        <Link href={`/`} >
        <Image
          src='/Group 4.png'
          alt='Logo'
          width={150}
          height={150}
          className='flex items-center justify-center'
        />
        </Link>
        
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <Link href={`/dashboard`}>
            <div className='flex flex-start items-center mt-4 gap-4'>
              <div>
                <Image
                  src='/home.png'
                  alt='Logo'
                  width={20}
                  height={20}
                />
              </div>

              <div>Dashboard</div>
            </div>
          </Link>
          <Link href={`/movies`}>
             <div className='flex flex-start items-center mt-4 gap-4'>
              <div>
                <Image
                  src='/movie.png'
                  alt='Logo'
                  width={20}
                  height={20}
                />
              </div>

              <div>Movies</div>
            </div>
          </Link>
          <Link href={`/favourites`}>
             <div className='flex flex-start items-center mt-4 gap-4'>
              <div>
                <Image
                  src='/fav.png'
                  alt='Logo'
                  width={20}
                  height={20}
                />
              </div>

              <div>Favourites</div>
            </div>
          </Link>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter><span className='font-semibold text-black'>&copy; 2026</span></SidebarFooter>
    </Sidebar>
  )
}
export default AppSidebar
