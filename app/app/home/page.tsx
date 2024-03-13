import React, { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import CategoryBox from "../components/categories/CategoryBox";

export default function page() {
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
