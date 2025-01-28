import Nav from "@/components/Section/Nav";
import { main } from "motion/react-client";
import Image from "next/image";

export default function App({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="grid bg-[#fafafa] w-full h-dvh grid-cols-2">
            
              {children}
              <div className="bg-blue-50 flex justify-center items-center w-full h-full">
                <Image src='/Ulistration.svg' width={400} height={400} alt="ulistration" />
              </div>
        </main>
    );
  }