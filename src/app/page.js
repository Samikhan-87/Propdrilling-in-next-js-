import Image from "next/image";
import ChildA from "./ChildA";
export default function Home() {
  const name = "Sami Khan"
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <ChildA name = {name}/>
    </main>
  );
}
