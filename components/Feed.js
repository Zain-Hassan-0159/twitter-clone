import {SparklesIcon} from "@heroicons/react/outline"
import Input from "./Input"
import Post from "./Post";

export default function Feed() {

  const posts = [
    {
      id: "1",
      name: "Zain Hassan",
      username: "zainhassanPak",
      userImage: "https://hassanzain.com/wp-content/uploads/2021/10/zainhassan.jpg",
      img: "https://images.unsplash.com/photo-1555601568-c9e6f328489b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      text: "This is my first post!",
      timestamp: "2 hours ago"
    },
    {
      id: "2",
      name: "Zain Hassan",
      username: "zainhassanPak",
      userImage: "https://hassanzain.com/wp-content/uploads/2021/10/zainhassan.jpg",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
      text: "This is my second post!",
      timestamp: "1 hours ago"
    },
    {
      id: "3",
      name: "Zain Hassan",
      username: "zainhassanPak",
      userImage: "https://hassanzain.com/wp-content/uploads/2021/10/zainhassan.jpg",
      img: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      text: "This is my third post!",
      timestamp: "6 mins ago"
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer" >Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9" >
                <SparklesIcon className="h-5" />
            </div>
        </div>
        <Input />
        {
          posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        }
    </div>
  )
}
