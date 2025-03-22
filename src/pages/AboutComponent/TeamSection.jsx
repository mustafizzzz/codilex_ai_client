import React from 'react'
import TeamMemberCard from './TeamSectionComponent/TeamMemberCard'

const TeamSection = ({ title = "Legal Expertise", teamMembers = [], className = "" }) => {
  return (

    <section className={`py-35 ${className}`}>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-12">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              title={member.title}
              facebookUrl={member.facebookUrl}
              linkedinUrl={member.linkedinUrl}
              instagramUrl={member.instagramUrl}

            />
          ))}
        </div>
      </div>

    </section>

  )
}

export default TeamSection