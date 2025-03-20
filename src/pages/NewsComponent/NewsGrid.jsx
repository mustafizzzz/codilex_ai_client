import React from 'react'
import NewsCard from './NewsCard';

const NewsGrid = ({ articles = [] }) => {

  // Default articles if none provided
  const defaultArticles = articles.length > 0 ? articles : [
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {defaultArticles.map((article) => (
        <NewsCard
          key={article.id}
          image={article.image}
          title={article.title}
          description={article.description}
          authorName={article.authorName}
          authorAvatar={article.authorAvatar}
          coAuthorName={article.coAuthorName}
          coAuthorAvatar={article.coAuthorAvatar}
        />
      ))}
    </div>
  );
};

export default NewsGrid;