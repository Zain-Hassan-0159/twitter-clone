import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";

export default function Widgets({newsResults}) {
  const [ArticleNum, setArticleNum] = useState(3);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      {/* Search Bar */}
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full relative">
                <SearchIcon className="h-5 z-50 text-gray-500" />
                <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Twitter" />
            </div>
        </div>

        {/* NewsApi */}
        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[96%] xl:w-[75%] ">
          <h4 className="font-bold text-xl px-4">What's happening</h4>
          {newsResults.slice(0, ArticleNum).map(
          (article) => (
            <News key={article.title} article = {article} />
          )
        )}
        <button onClick={()=> setArticleNum(ArticleNum +3) } className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show More</button>
        </div>
    </div>
  )
}
