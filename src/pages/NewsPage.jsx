import React from 'react'
import NewsSection from './NewsComponent/NewsSection'
import SiteHeader from '../components/reuseComponent/SiteHeader';
import CTABanner from '@/components/reuseComponent/CTABanner';


import RectangleContact from ".././assets/HeaderBanner/RectangleContact.png";
import CTABackgroundBanner from ".././assets/HeaderBanner/CTABackgroundBanner.png";


//get kis format json 
const NewsPage = () => {

  const newsArticles = [
    {
      id: 1,
      image: "/src/assets/NewsPostImage/Rectangle1.png",
      title: "Lorem Ipsum Dummy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit netus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      authorName: "Author Network",
      authorAvatar: "/src/assets/NewsPostAuthorImage/author.png",
      coAuthorName: "Coauthor Willkinson",
      coAuthorAvatar: "/src/assets/NewsPostAuthorImage/coAuthor.png",
    },
    {
      id: 2,
      image: "/src/assets/NewsPostImage/Rectangle2.png",
      title: "Lorem Ipsum Dummy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit netus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      authorName: "Author Network",
      authorAvatar: "/src/assets/NewsPostAuthorImage/author.png",
      coAuthorName: "Coauthor Willkinson",
      coAuthorAvatar: "/src/assets/NewsPostAuthorImage/coAuthor.png",
    },
    {
      id: 3,
      image: "/src/assets/NewsPostImage/Rectangle3.png",
      title: "Lorem Ipsum Dummy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit netus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      authorName: "Author Network",
      authorAvatar: "/src/assets/NewsPostAuthorImage/author.png",
      coAuthorName: "Coauthor Willkinson",
      coAuthorAvatar: "/src/assets/NewsPostAuthorImage/coAuthor.png",
    },
    {
      id: 4,
      image: "/src/assets/NewsPostImage/Rectangle4.png",
      title: "Lorem Ipsum Dummy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit netus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id.",
      authorName: "Author Network",
      authorAvatar: "/src/assets/NewsPostAuthorImage/author.png",
      coAuthorName: "Coauthor Willkinson",
      coAuthorAvatar: "/src/assets/NewsPostAuthorImage/coAuthor.png",
    },
  ];

  const waveColors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]

  return (
    <>
      <SiteHeader
        backgroundImage={RectangleContact}
        title="News"
        description="Stay Informed with the Latest Legal News, Insights, and Updates from India."
      />

      <NewsSection
        title="Company News & Updates"
        subtitle="Stay informed with the latest developments from our team"
        articles={newsArticles}
      />

      <CTABanner
        backgroundImage={CTABackgroundBanner}
        title="Enough talk, lets's get to work"
        buttonText="Get in touch"
        buttonHref="/contact"
        waveColors={waveColors}
        waveOpacity={0.1}
        waveSpeed="fast"
        waveBlur={10}
        waveWidth={40}
        titleClassName="text-3xl md:text-5xl font-bold text-white text-center mb-8 font-serif"
        buttonClassName="px-8 py-3 bg-transparent cursor-pointer hover:bg-white hover:text-black text-white border-2 border-white rounded-full transition-colors duration-300 font-medium font-sans"
      />
    </>

  )
}

export default NewsPage