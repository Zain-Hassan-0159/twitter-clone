import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
        <img className="hidden object-cover md:w-44 md:h-80 rotate-6  md:inline-flex" src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png" alt="twitter image inside a phone" />
        <div>
            {Object.values(providers).map(provider => (
                <div key={provider.name} className="flex flex-col items-center" >
                    <img width="30" height="25"  className="w-36 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" />
                    <p className="text-center text-sm italic my-10">This app is created for learning purpose</p>
                    <button onClick={()=>signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props: {
            providers
        }
    };
}