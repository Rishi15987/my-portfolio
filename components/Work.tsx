import { motion } from "motion/react";
const workItems = [
  {
    title: "Backend Engineering",
    description:
      "I build high-performance backend systems using Java, Spring Boot, and Hibernate. From RESTful APIs to database optimizations, I ensure smooth and scalable applications.",
  },
  {
    title: "Cloud & Microservices",
    description:
      "I design and deploy microservices on AWS, utilizing Lambda, API Gateway, ECS, and DynamoDB with CI/CD pipelines to build scalable cloud applications.",
  },
  {
    title: "Database Performance",
    description:
      "Efficient data handling is key. I optimize queries and data structures, reducing load times from 60 seconds to 2 seconds for seamless user experience.",
  },
  {
    title: "System Design & DSA",
    description:
      "Strong in Data Structures, Algorithms, and System Design, I tackle complex problems and build maintainable, scalable, and efficient software architectures.",
  },
  {
    title: "AWS Cloud Certified",
    description:
      "I hold an AWS Certified Cloud Practitioner certification (2023-2026), demonstrating expertise in AWS services, cloud security, and architecture principles.",
  },
  {
    title: "Technical Leadership",
    description:
      "Leading backend modules, resolving production issues, and collaborating across teams to deliver robust, feature-rich solutions effectively.",
  },
];

const WorkItem = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className="py-6 md:p-6">
      <h1 className="text-xl font-semibold  text-[#38cf90]">{title}</h1>
      <p className="pt-4">{description}</p>
    </div>
  );
};
const WorkItemLg = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const needsRightBorder = index % 3 !== 2; // Not in the rightmost column
  const needsBottomBorder = index < 3; // Not in the bottom row
  return (
    <div
      className={`p-6 ${
        needsRightBorder ? "border-r" : ""
      } ${needsBottomBorder ? "border-b" : ""} border-zinc-700`}
    >
      <h1 className="text-xl font-semibold  text-[#38cf90]">{title}</h1>
      <p className="pt-4">{description}</p>
    </div>
  );
};

const WorkItemMd = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const needsRightBorder = index % 2 !== 1; // Not in the rightmost column
  const needsBottomBorder = index < 4; // Not in the bottom row
  return (
    <div
      className={`p-6 ${
        needsRightBorder ? "border-r" : ""
      } ${needsBottomBorder ? "border-b" : ""} border-zinc-700`}
    >
      <h1 className="text-xl font-semibold  text-[#38cf90]">{title}</h1>
      <p className="pt-4">{description}</p>
    </div>
  );
};

const Work = () => {
  return (
    <div className="py-10 lg:h-screen flex items-center bg-[url('/work.jpg')] bg-cover bg-center text-white">
      <div className="px-8 md:px-32 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5}}
          className="flex flex-col"
        >
          <h1 className="text-4xl md:text-6xl text-white font-semibold mb-4">Work</h1>
          <div className="w-24 bg-[#28D08A] h-1"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 , delay: 0.2}}
          className="hidden p-4 lg:grid grid-cols-3">
          {workItems.map((item, index) => (
            <WorkItemLg
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </motion.div>
        <div className="p-4 hidden md:grid lg:hidden grid-cols-2">
          {workItems.map((item, index) => (
            <WorkItemMd
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
        <div className="md:hidden">
          {workItems.map((item, index) => (
            <WorkItem
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
