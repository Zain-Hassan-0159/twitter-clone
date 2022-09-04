import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {DotsHorizontalIcon, HomeIcon} from "@heroicons/react/solid"
import {BellIcon, BookOpenIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon} from "@heroicons/react/outline"
import {useSession, signIn, signOut} from "next-auth/react"

export default function Sidebar() {
    const {data: session} = useSession()

  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:p-3" >
            <Image width="30" height="25" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png"></Image>
        </div>

        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active /> 
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} /> 
            {session && (
                <>
                <SidebarMenuItem text="Notifications" Icon={BellIcon} /> 
                <SidebarMenuItem text="Messages" Icon={InboxIcon} /> 
                <SidebarMenuItem text="Bookmarks" Icon={BookOpenIcon} /> 
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} /> 
                <SidebarMenuItem text="Profile" Icon={UserIcon} /> 
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
                </> 
            )}

        </div>

        
        {
            session ? (
                <>
                {/* Button */}
                <button type="button" className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline" >Tweet</button>
                {/* Mini Profile */}
                <div className="hoverEffect flex items-center justify-center xl:justify-start mt-auto" >
                    <img onClick={signOut} width="100" height="100" className="rounded-full h-10 w-10 xl:mr-2" src={session.user.image} alt={session.user.name} />
                    <div className="leading-5  hidden xl:inline">
                        <h4 className="font-bold">{session.user.name}</h4>
                        <p className="text-gray-500">@{session.user.username}</p>
                    </div>
                    <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
                </div>
                </>
                
            ) : (
                <>
                <button type="button" className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline" onClick={signIn} >Sign In</button>
                </>
            )
        }
        
    </div>
  )
}
