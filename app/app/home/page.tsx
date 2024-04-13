import React, { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import CategoryBox from "../components/categories/CategoryBox";
import getCurrentUser from "../actions/getCurrentUser";
import getAllArticles from "../actions/getAllArticles";
export default async function page() {

  const currentUser = await getCurrentUser()
  const allArticles = await getAllArticles()

console.log(currentUser)
console.log(allArticles)
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
