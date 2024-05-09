import React, { Suspense } from "react";
import Navbar from "../components/navbar/Navbar";
import CategoryBox from "../components/categories/CategoryBox";
import getCurrentUser from "../actions/getCurrentUser";
import getAllArticles from "../actions/getAllArticles";
import ListingCard from "../components/articles/ListingCard";

export default async function page() {
  const currentUser = await getCurrentUser();
  const allArticles = await getAllArticles();

  console.log(allArticles);
  return (
    <>
      <Navbar />

      <Suspense fallback={<Loading/>}>
        <CategoryBox />
      </Suspense>

      <div
        className='
        pt-10
        mx-10
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            
            gap-8'>
        {allArticles.map((article) => {
          return <ListingCard article={article} />;
        })}
      </div>
    </>
  );
}

const Loading = () => {
  return <>Loading...</>;
};
