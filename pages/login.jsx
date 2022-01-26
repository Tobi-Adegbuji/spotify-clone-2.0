import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center 
    bg-black min-h-screen w-full justify-center">
      <img
        className="mb-5 w-52"
        src="https://links.papareact.com/9xl"
        alt="spotify-logo"
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="bg-[#1BD760] font-bold 
          text-white p-5 rounded-lg"
          onClick={() => signIn(provider.id, {callbackUrl: "/"})}
          >Login with {provider.name}</button>
        </div>
  ))}
    </div>
  );
}

export default Login

//this function runs on the server before this pasge gets delivered
export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
