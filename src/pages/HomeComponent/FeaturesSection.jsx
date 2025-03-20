import { Zap, Shield, Star, Settings } from "lucide-react"
import SectionTitle from "./ServiceSectionComponent/SectionTitle";
import FeatureCard from "./FeatureSectionComponent/FeatureCard";




//it will be pass as prop in future changes
const features = [
  {
    icon: Zap,
    title: "Lorem",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the.",
  },
  {
    icon: Shield,
    title: "Lorem",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the.",
  },
  {
    icon: Star,
    title: "Lorem",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the.",
  },
  {
    icon: Settings,
    title: "Lorem",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-35">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Lorem Ipsum" title="Lorem Ipsum is simply dummy text of the" className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} Icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;

