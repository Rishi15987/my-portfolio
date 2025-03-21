import Image from "next/image"
import rishiImage from "@/public/rishi-image.jpg"
const About = () => {
  return (
    <section className="lg:h-screen flex items-center bg-zinc-900">
        <div className="flex flex-col lg:flex-row px-32">
            <div className="lg:w-2/3 flex flex-col gap-10">
                <h1 className="text-6xl text-white font-semibold">Hey, I'm Rishi.</h1>
                <h3 className="text-2xl text-white">
                I'm a detail-oriented Java backend developer passionate about building scalable, high-performance applications.</h3>
                <div className="w-24 bg-[#28D08A] h-1"></div>
                <div className="w-full flex justify-center">
                  <div className="lg:hidden relative flex justify-center w-96 aspect-square overflow-hidden rounded-full border-1 border-[#28D08A]">
                    <Image
                      src={rishiImage}
                      fill
                      className="object-cover object-center"
                      alt="Rishi Raj"
                    />
                  </div>
                </div>
                <p className="text-white flex flex-col gap-3">
                  <span>
                    <b>I have experience designing and developing robust backend systems,</b> optimizing application performance, and working with cloud-based architectures. With expertise in <b>Spring Boot, REST APIs, Python, FastApi, microservices, and AWS,</b> I ensure that the software I build is not only efficient but also reliable and scalable.
                  </span>
                  <span>
                    I love solving complex problems and continuously improving systems through clean, well-structured code. I see development as an ongoing learning process and always look for opportunities to collaborate with like-minded professionals who push me to grow.
                  </span>
                  <span>
                    At the end of the day, my goal is to create impactful software that improves user experiences while maintaining efficiency under the hood.
                  </span>
                  <span>
                    <b>When I'm not coding,</b> you'll probably find me solving coding challenges, exploring new tech, or working on exciting side projects.
                  </span>
                </p>
            </div>
            <div className="lg:w-1/3 items-center justify-center hidden lg:flex">
              <div className="relative aspect-square w-96 overflow-hidden rounded-full border-1 border-[#28D08A]">
                <Image
                  src={rishiImage}
                  fill
                  className="object-cover object-center"
                  alt="Rishi Raj"
                />
              </div>
            </div>
        </div>
    </section>
  )
}

export default About