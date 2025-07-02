import React from 'react'
import { InfiniteMovingCards } from './InfiniteMovingCard'
import SectionTitle from './ServiceSectionComponent/SectionTitle';

const TestimonialsSection = () => {
    const testimonials = [
        {
            quote:
                "What impresses me most about Codilex is how it streamlines my daily practice. The judgment summarisation feature alone is remarkable—it condenses vast amounts of information into clear, concise points in minutes. This allows me to get to the heart of a matter quicker and prepare my cases more effectively. It has fundamentally changed how I manage my caseload.",
            name: "Nikhil Kaushik",
            title: "Advocate, Punjab & Haryana High Court",
        },
        {
            quote:
                "Integrating Codilex into our workflow has been a game-changer. It handles the time-consuming research and initial drafting that used to bog down our junior associates, freeing them up for higher-value, billable tasks. The AI is incredibly reliable, works 24/7, and has significantly reduced our research overhead. It’s not just a tool; it’s a productivity multiplier for the entire firm.",
            name: "Shubham",
            title: "Partner at Pramnyay Law Firm",
        },
        {
            quote:
                "In the fast-paced environment of the Supreme Court, speed and precision are everything. Codilex delivers on both. Its ability to instantly pull up relevant case law and precedents has saved me countless hours in preparation. On more than one occasion, it has uncovered a crucial insight that has strengthened my arguments in court. It’s an indispensable tool for any serious Advocate.",
            name: "Shrenik Bhardwaj",
            title: "Advocate, Supreme Court of India",
        },
        {
            quote:
                "Practicing independently at the Delhi High Court requires leveraging every possible advantage. Codilex has enhanced my practice by providing a powerful new layer of insight into my cases. The platform helps me approach my work with greater confidence and develop my arguments more robustly. It’s a significant step forward for how solo practitioners can operate.",
            name: "Rajan Saini",
            title: "Advocate, Delhi High Court",
        },
        {
            quote:
                "In a demanding corporate environment like ICICI Lombard, efficiency is paramount. Codilex has become an invaluable asset for our team, significantly streamlining our legal processes. Its capabilities allow us to manage our workload more effectively and dedicate more time to strategic, high-impact activities. It has truly enhanced our day-to-day productivity.",
            name: "Ankit Kashyap",
            title: "Legal Officer, ICICI Lombard",
        },

    ];
    return (
        <section className="py-5 bg-gray-50">
            <div className="container mx-auto px-4">
                <SectionTitle subtitle="" title="Testimonials" className="mb-12" />
            </div>
            <div className="h-[30rem] md:h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden mb-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    )
}

export default TestimonialsSection