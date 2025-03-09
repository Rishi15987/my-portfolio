import Image from "next/image"
import workImage from "@/public/work.jpg";
const Work = () => {
  return (
    <div className="h-screen flex items-center bg-slate-950">
        <Image 
            src={workImage} 
            className="h-full w-full"
            alt="Working Image"
        />
    </div>
  )
}

export default Work