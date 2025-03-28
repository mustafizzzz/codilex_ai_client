import { Zap, BrainCircuit, Clock, Banknote } from "lucide-react"
import SectionTitle from "./ServiceSectionComponent/SectionTitle";
import FeatureCard from "./FeatureSectionComponent/FeatureCard";




//it will be pass as prop in future changes
const features = [
  {
    icon: Zap,
    title: "Instant Answers",
    description: "No more waiting—get legal insights, case summaries, and drafts in seconds.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Trained for Law",
    description: "Built specifically for legal work, trained on extensive legal data and precedents.",
  },
  {
    icon: Clock,
    title: "Works 24/7",
    description: "Whether it’s late-night drafting or urgent case research, our AI is always available.",
  },
  {
    icon: Banknote,
    title: "Cost-Effective",
    description: "Reduce overhead costs no salaries, no raises, just efficiency at a fraction of the price.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-35">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Lorem Ipsum" title="What Sets Us Apart?" className="mb-12" />

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

