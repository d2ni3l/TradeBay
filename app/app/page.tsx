import getCurrentUser from "./actions/getCurrentUser"

export default async function Home() {

  const user = await  getCurrentUser()


  return (
    <h1 className="text-red-600 text-4xl">{user?.name}</h1>
  )
}
