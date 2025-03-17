import Image from "next/image"
import workImage from "@/public/work.jpg";

const workItems = [
  {
    title: "Backend Development",
    description: "I specialize in building high-performance backend systems using Java, Spring Boot, and Hibernate. From designing RESTful APIs to optimizing database queries, I ensure applications run smoothly and scale efficiently."
  },
  {
    title: "Microservices & Cloud Architecture",
    description: "I have hands-on experience designing and deploying microservices on AWS, utilizing Lambda, API Gateway, ECS, DynamoDB, and CI/CD pipelines to create robust and scalable applications."
  },
  {
    title: "Database Optimization & Performance Tuning",
    description: "Efficient data management is crucial for application performance. I have optimized backend queries, reducing data loading time from 60 seconds to 2 seconds, improving user experience and system efficiency."
  },
  {
    title: "Problem Solving & System Design",
    description: "With a strong grasp of Data Structures, Algorithms, and System Design, I love tackling complex challenges, ensuring the software I build is both scalable and maintainable."
  },
  {
    title: "AWS Certified Cloud Practitioner",
    description: "I hold an AWS Certified Cloud Practitioner certification (Valid: August 2023 – August 2026), demonstrating my expertise in AWS cloud services, architecture best practices, and cloud security principles."
  },
  {
    title: "Technical Leadership & Collaboration",
    description: "I thrive in collaborative environments, having led backend module development, resolved high-severity production incidents, and delivered feature-rich solutions while working with cross-functional teams."
  }
];

const WorkItem = ({ title, description }: {title: string, description: string}) => (
  <div>
    <h1 className="text-xl font-semibold">{title}</h1>
    <p className="pt-4">{description}</p>
  </div>
);

const Work = () => {
  return (
    <div className="h-screen flex items-center bg-slate-950 text-white">
      <div className="px-32 flex flex-col gap-10">
        <h1 className="text-6xl text-white font-semibold">Work</h1>
        <div className="w-24 bg-amber-50 h-1"></div>
        <div className="p-4 grid grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <WorkItem key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work