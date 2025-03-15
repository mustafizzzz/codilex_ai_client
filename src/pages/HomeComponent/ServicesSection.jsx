import { Pen, Code, BarChart, Smartphone, Users, Globe } from "lucide-react"
import SectionTitle from "./SectionTitle"
import ServiceCard from "./ServiceCard"

//it will be pass as props in future
const services = [
  {
    icon: Pen,
    title: "Lorem Ipsum dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy.",
    variant: "primary",
  },
  {
    icon: Code,
    title: "Lorem Ipsum dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy.",
  },
  {
    icon: BarChart,
    title: "Lorem Ipsum dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy.",
  },
  {
    icon: Smartphone,
    title: "Lorem Ipsum dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy.",
  },
  {
    icon: Users,
    title: "Lorem Ipsum dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy.",
  },
  {
    icon: Globe,
    title: "Lorem Ipsum dummy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy.",
  },
]

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Lorem Ipsum" title="Lorem Ipsum is simply dummy text of the" className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

