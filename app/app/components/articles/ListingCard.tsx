import { Article } from "@/app/typesDefinition";
import Image from "next/image";
import TruncateString from "@/app/hooks/TruncateString";
import { Badge } from "@/components/ui/badge";
import Button from "../Button";
import { FaCircleInfo } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaCartShopping } from "react-icons/fa6";

export default function ({ article }: Article) {
  return (
    <>
      <div className='w-full max-w-sm relative rounded-lg'>
        <div className=' bg-white border border-gray-200 rounded-sm  shadow hover:shadow-xl dark:bg-gray-800 dark:border-gray-700'>
          <Badge className='absolute bg-gray-700 mt-2 mx-2'>
            {article.category}
          </Badge>

          <div className='rounded-full flex justify-center '>
            <Image
              width='200'
              height='200'
              alt=''
              className='w-full h-auto rounded-t-sm'
              src='https://res.cloudinary.com/dgoxla9tk/image/upload/v1715270709/cruxqihpgvrl2nejajr5.avif'
            />
          </div>

          <div className='px-5 py-4'>
            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white capitalize'>
              {article.title}
            </h5>

            <h6 className='text-sm font-semibold tracking-tight text-gray-900 dark:text-white capitalize'>
              {TruncateString(article.description, 70)}
            </h6>

            <div className='pt-3'></div>
            <div className='flex items-center justify-between'>
              <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                ${article.price}
              </span>
              <Button
                label='Add to cart'
                iconClassName='text-white hover:text-black group-hover:text-black'
                icon={FaCartShopping}
                className='rounded-full flex gap-2 items-center group hover:text-black hover:bg-white font-semibold   bg-black  px-3 py-2 outline-none hover:scale-[.98] outline-[1px] hover:outline-black'
              />
            </div>

            <div className='flex items-center mt-4 '>
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
              <div className=' flex gap-2 items-center'>
                <span className='bg-black text-white text-xs font-semibold px-2.5 py-0.5 rounded  ms-3'>
                  <span className='text-white'>5.0</span>
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      {" "}
                      <FaCircleInfo
                        size='18'
                        className='text-black cursor-pointer'
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Item rated by users of TradeBay</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
