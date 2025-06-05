
import React, { useState, useEffect } from 'react';

interface ContentCardProps {
  content: JSX.Element | undefined;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedContent, setDisplayedContent] = useState<JSX.Element | undefined>(content);

  useEffect(() => {
    if (content !== displayedContent) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setDisplayedContent(content);
        setIsTransitioning(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [content, displayedContent]);

  return (
    <div className="w-full md:max-w-3xl lg:max-w-4xl">
      <div 
        className={`content-card bg-card p-3 md:p-4 rounded-lg shadow-md border border-border ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {displayedContent}
      </div>
    </div>
  );
};

export default ContentCard;
