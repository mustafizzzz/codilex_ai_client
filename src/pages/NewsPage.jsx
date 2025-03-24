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

  return (
    <>
      <SiteHeader
        backgroundImage={RectangleContact}
        title="News"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero. egestas malesuada viverra gravida"
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
      />
    </>

  )
}

export default NewsPage