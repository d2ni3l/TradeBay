import Button from "./components/Button";
import DefaultHeading from "./components/navbar/DefaultHeading";
import { lemon } from "./layout";
import { FaGithub } from "react-icons/fa6";
export default function Page() {
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
              className={`relative flex h-[40px] rounded-full w-[120px]  items-center justify-center overflow-hidden bg-[#fb0066] text-white shadow-2xl ${lemon.className}`}
              labelClassName='relative z-10 text-xs'
              label='Get Started'
            />

            <Button
              className={`relative flex h-[40px] rounded-full w-[120px]  items-center justify-center overflow-hidden  text-white shadow-2xl ${lemon.className}`}
              labelClassName='relative z-10 text-xs mr-1'
              label='Github'
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
            This social media web app is built using the following modern
            technologies.
          </p>
          <div className='mt-6 grid grid-cols-2 gap-3 px-4  md:grid-cols-3 lg:mx-[20rem]'>
            {[
              {
                header: "TypeScript",
                details:
                  "Strongly-typed code and components for maintainability.",
              },
              {
                header: "Next.js 14",
                details:
                  "App router, route handlers, nested layouts, and more.",
              },
              { header: "React 18", details: "Server and client components." },
              {
                header: "Prisma",
                details: "Type-safe and intuitive database ORM.",
              },
              {
                header: "NextAuth.js 5",
                details: "Secure email and social OAuth logins.",
              },
              {
                header: "React Query",
                details: "Efficient data-fetching and caching.",
              },
              {
                header: "Tailwind CSS",
                details: "Utility classes for building components.",
              },

              { header: "Zod", details: "Form input validation." },
            ].map(({ header, details }) => (
              <TechStackCard header={header} key={header}>
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
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <div className='rounded-xl border-2 border-border bg-card p-5'>
      <h4 className='text-lg font-semibold text-pink-600'>{header}</h4>

      <p className='text-muted-foreground'>{children}</p>
    </div>
  );
}
