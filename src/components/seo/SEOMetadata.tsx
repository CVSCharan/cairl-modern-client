
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const SEOMetadata: React.FC<SEOMetadataProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterSite = '@CAiRL_Official', // Replace with your actual Twitter handle
  twitterCreator = '@CAiRL_Official', // Replace with your actual Twitter handle
  twitterTitle,
  twitterDescription,
  twitterImage,
}) => {
  const currentUrl = ogUrl || window.location.href;
  const defaultOgImage = "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750381598/Element-1_tsbawm.png"; // Replace with a default image URL for your site

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={ogType} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage || defaultOgImage} />
    </Helmet>
  );
};

export default SEOMetadata;
