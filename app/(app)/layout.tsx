import Nav from "@/components/Section/Nav";

export default function App({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="grid bg-[#fafafa] w-full h-dv grid-cols-[70px,1fr] sm:grid-cols-[240px,1fr] ">
             <Nav/>
             <div className="w-full  h-full"> {children}</div>
        </main>
    );
  }