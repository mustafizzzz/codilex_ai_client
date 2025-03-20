import React from 'react'
import NewsGrid from './NewsGrid';

const NewsSection = ({
  title = "Latest News",
  subtitle = "Stay updated with our latest articles and insights",
  articles = []
}) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <NewsGrid articles={articles} />
      </div>
    </section>
  );
};

export default NewsSection;