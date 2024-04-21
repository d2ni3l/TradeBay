import { Article } from "@/app/typesDefinition";
import Image from "next/image";
import TruncateString from "@/app/hooks/TruncateString";
import { Badge } from "@/components/ui/badge";
import Button from "../Button";
import { FaCartShopping } from "react-icons/fa6";


export default async function ({ article }: Article) {
  return (
    <>
      <div className='w-full max-w-sm relative bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700'>
        <Badge className='absolute bg-gray-700 mt-2 mx-2'>{article.category}</Badge>

        <div className='justify-center flex'>
          <Image
            className='pt-8 pr-7 pl-7 pb-4 rounded-t-lg rounded-sm'
            src={article.imgSrc}
            alt='Article Image'
            width='220'
            height='150'
          />
        </div>

        <div className='px-5 pb-3'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white capitalize'>
            {article.title}
          </h5>

          <h6 className='text-sm font-semibold tracking-tight text-gray-900 dark:text-white capitalize'>
            {TruncateString(article.description, 50)}
          </h6>
          <div className='pt-1'></div>
          <div className='flex items-center justify-between'>
            <span className='text-2xl font-bold text-gray-900 dark:text-white'>
              ${article.price}
            </span>
            <Button
              label='Add to cart'
              iconClassName="text-white hover:text-black group-hover:text-black"
              icon={FaCartShopping}
              className='rounded-full flex gap-2 items-center group hover:text-black hover:bg-white font-semibold   bg-black  px-3 py-2 outline-none hover:scale-[.98] outline-[1px] hover:outline-black'
            />
          </div>

          <div className='flex items-center mt-2.5 '>
            <div className='flex items-center space-x-1 rtl:space-x-reverse'>
              <svg
                className='w-4 h-4 text-yellow-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 20'>
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
              </svg>
              <svg
                className='w-4 h-4 text-yellow-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 20'>
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
              </svg>
              <svg
                className='w-4 h-4 text-yellow-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 20'>
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
              </svg>
              <svg
                className='w-4 h-4 text-yellow-300'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 20'>
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
              </svg>
              <svg
                className='w-4 h-4 text-gray-200 dark:text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 22 20'>
                <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
              </svg>
            </div>
            <span className='bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-blue-800 ms-3'>
              5.0
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
