"use client";

import Button from "./components/Button";
import DefaultHeading from "./components/navbar/DefaultHeading";
import { FaGithub } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IconType } from "react-icons";
import { FaReact } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiAuth0 } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { lemon } from "./font";
export default function Page() {
  const router = useRouter();
  return (
    <>
      <DefaultHeading />
      <main className='bg-[#ff85a2] text-white pb-3'>
        <div className='pt-28 flex flex-col items-center sm:pt-24 '>
          <h1 className='mt-4 px-5 text-center font-bold text-2xl sm:text-5xl lg:mx-[20rem]'>
            A responsive and accessible full stack market place web app.
          </h1>
          <div className='mt-6 flex justify-center gap-3'>
            <Button
              onClick={() => {
                router.push("/home");
              }}
              className={`relative flex h-[40px] rounded-full w-[120px]  items-center justify-center overflow-hidden bg-[#fb0066] text-white shadow-2xl hover:bg-black hover:text-[#fb0066] ${lemon.className}`}
              labelClassName='relative z-10 text-xs'
              label='Get Started'
            />

            <Button
              className={`relative flex h-[40px] rounded-full w-[120px]  items-center justify-center overflow-hidden  text-white hover:text-[#fb0066] shadow-2xl ${lemon.className}`}
              labelClassName='relative z-10 text-xs mr-1'
              label='Github'
              onClick={() => {
                router.push('https://github.com/d2ni3l/TradeBay');
              }}
              icon={FaGithub}
            />
          </div>
        </div>

        <div className='mt-20'>
          <h2
            className={`text-center text-3xl sm:text-5xl text-black font-bold ${lemon.className}`}>
            Technology Stack
          </h2>
          <p className='mt-2 px-4 text-center text-lg text-pink-100'>
            This market place web app is built using the following modern
            technologies.
          </p>
          <div className='mt-6 grid grid-cols-2 gap-3 px-4  md:grid-cols-3 lg:mx-[20rem]'>
            {[
              {
                header: "TypeScript",
                icon: SiTypescript,
                details:
                  "Strongly-typed code and components for maintainability.",
              },
              {
                header: "Next.js 14",
                icon: SiNextdotjs,
                details:
                  "App router, route handlers, nested layouts, and more.",
              },
              {
                header: "React 18",
                icon: FaReact,
                details: "Server and client components.",
              },
              {
                header: "Prisma",
                icon: SiPrisma,
                details: "Type-safe and intuitive database ORM.",
              },
              {
                header: "NextAuth.js 5",
                icon: SiAuth0,
                details: "Secure email and social OAuth logins.",
              },
              {
                header: "React Query",
                icon: SiReactquery,
                details: "Efficient data-fetching and caching.",
              },
              {
                header: "Tailwind CSS",
                icon: SiTailwindcss,
                details: "Utility classes for building components.",
              },

              {
                header: "Zod",
                icon: SiZod,
                details: "Form input validation.",
              },
            ].map(({ header, details, icon }) => (
              <TechStackCard header={header} key={header} icon={icon}>
                {details}
              </TechStackCard>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

function TechStackCard({
  header,
  children,
  icon: Icon,
}: {
  header: string;
  children: React.ReactNode;
  icon: IconType;
}) {
  return (
    <div className='rounded-xl border-2 border-border bg-card p-5'>
      <h4 className='text-base md:text-lg font-semibold flex items-center gap-2 text-[#fa0066]'>
        <span>{header}</span> <span>{<Icon />}</span>
      </h4>

      <p className='text-sm md:text-base'>{children}</p>
    </div>
  );
}
