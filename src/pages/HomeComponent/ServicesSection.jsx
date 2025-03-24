import { Pen, Code, BarChart, Smartphone, Users, Globe } from "lucide-react"
import SectionTitle from "./ServiceSectionComponent/SectionTitle"
import ServiceCard from "./ServiceSectionComponent/ServiceCard"

//it will be pass as props in future
const services = [
  {
    icon: Pen,
    title: "Instant Legal Answers for Everyone",
    description:
      "Get clear, accurate answers to your legal questions in seconds. No jargon, no confusion—just straightforward guidance.",
    variant: "primary",
  },
  {
    icon: Code,
    title: "Judgment Headnotes Made Simple",
    description:
      "Quickly understand key points of any judgment. Our AI extracts and summarizes headnotes, saving you hours of reading.",
  },
  {
    icon: BarChart,
    title: "Case File Summaries in Minutes",
    description:
      "Turn lengthy case files, applications, and summons into concise summaries. Focus on what matters most—your case strategy.",
  },
  {
    icon: Smartphone,
    title: "Effortless Legal Drafting",
    description:
      "Draft documents, suits, and replies with ease. Our AI ensures accuracy, compliance, and professionalism in every draft.",
  },
  {
    icon: Users,
    title: "Find Laws and Cases Instantly",
    description:
      "Search and retrieve relevant laws, precedents, and case summaries in seconds, making legal research effortless.",
  },
  {
    icon: Globe,
    title: "Image-to-Text Conversion for Lawyers",
    description:
      "Convert PDFs and images into editable text instantly. Draft replies faster and streamline your workflow with AI-powered tools.",
  },
]

const ServicesSection = () => {
  return (
    <section className="py-30 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Lorem Ipsum" title="Lorem Ipsum is simply dummy text of the" className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
              variant={service.variant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

