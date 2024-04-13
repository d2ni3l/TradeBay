import React, { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import CategoryBox from "../components/categories/CategoryBox";
import getCurrentUser from "../actions/getCurrentUser";
export default async function page() {

  const currentUser = await getCurrentUser()

console.log(currentUser)
  return (
    <>
      <Navbar />
     
     <Suspense fallback={<Loading/>}>
     <CategoryBox />
     </Suspense>
    </>
  );
}

const Loading = () => {
   return (
    <>
    Loading...
    </>
   )
}
