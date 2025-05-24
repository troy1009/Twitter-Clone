import React from 'react';

interface HeroData {
  name: string;
  title: string;
  bio: string;
  profileImageUrl?: string;
}

const HeroSection: React.FC<{ data: HeroData | null | undefined }> = ({ data }) => {
  if (!data) {
    return (
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-blue-700 text-white text-center animate-fadeIn">
        <div className="container mx-auto px-6">
          <div className="animate-pulse rounded-full bg-white/20 h-32 w-32 mx-auto mb-6"></div>
          <div className="h-8 bg-white/20 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-white/20 rounded w-1/2 mx-auto mb-6"></div>
          <div className="h-4 bg-white/20 rounded w-full max-w-lg mx-auto"></div>
          <div className="h-4 bg-white/20 rounded w-full max-w-md mx-auto mt-2"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="hero" className="py-20 md:py-32 bg-gradient-to-br from-primary to-blue-700 text-white text-center animate-fadeIn">
      <div className="container mx-auto px-6">
        {data.profileImageUrl && (
          <img
            src={data.profileImageUrl}
            alt={data.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white/50 animate-slideUp"
            style={{ animationDelay: '0.2s' }}
          />
        )}
        <h1 
          className="text-4xl md:text-6xl font-bold mb-4 animate-slideUp"
          style={{ animationDelay: '0.4s' }}
        >
          {data.name}
        </h1>
        <p 
          className="text-xl md:text-2xl text-blue-200 mb-8 animate-slideUp"
          style={{ animationDelay: '0.6s' }}
        >
          {data.title}
        </p>
        <p 
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slideUp"
          style={{ animationDelay: '0.8s' }}
        >
          {data.bio}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
