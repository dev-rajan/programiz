import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import SITE_DATA from "./config.js";
import OpenGraph from "./OpenGraph";
import TwitterCard from "./TwitterCard";

import logo from "assets/images/share-logo.jpg";

const SEO_DEFAULT = {
  TITLE: "Programiz Pro",
  DESCRIPTION: "Learn programming with free online courses",
  PATH: "/",
};

const SEO = ({
  title,
  description,
  metaImage,
  twitterCardType,
  path,
  article,
  datePublished,
  dateModified,
  keywords,
  pageAuthor,
}) => {
  const {
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    image: defaultBanner,
    siteLanguage,
    ogLanguage,
    author: defaultAuthor,
    twitter,
    twitterCardType: defaultTwitterCardType,
    facebook,
  } = SITE_DATA;

  const siteKeywords = keywords
    ? keywords.join(" ")
    : defaultKeywords.join(" ");
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${metaImage?.url || metaImage?.src || defaultBanner.src}`,
    url: `${siteUrl}${path || ""}`,
    keywords: siteKeywords,
  };

  const author = pageAuthor ? { name: pageAuthor } : defaultAuthor;

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: siteUrl,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      "@type": "Organization",
      name: author.name,
    },
    copyrightHolder: {
      "@type": "Organization",
      name: author.name,
    },
    creator: {
      "@type": "Organization",
      name: author.name,
    },
    publisher: {
      "@type": "Organization",
      name: defaultTitle,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}${defaultBanner.src}`,
      },
    },
    datePublished,
    image: {
      "@type": "ImageObject",
      url: seo.image,
    },
  };

  let schemaArticle = null;

  if (article) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name: author.name,
      },
      creator: {
        "@type": "Person",
        name: author.name,
      },
      publisher: {
        "@type": "Organization",
        name: defaultTitle,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${defaultBanner.src}`,
        },
      },
      headline: seo.title,
      datePublished,
      dateModified,
      description: seo.description,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    };
  }

  const schemaData = article ? schemaArticle : schemaOrgWebPage;

  return (
    <>
      <Head title={seo.title}>
        <title>{seo.title}</title>
        <link rel="canonical" href={seo.url} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="keywords" content={seo.keywords} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>
      <OpenGraph
        description={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? "article" : "website"}
        url={seo.url}
        locale={ogLanguage}
        name={facebook}
      />
      <TwitterCard
        type={twitterCardType || defaultTwitterCardType}
        title={seo.title}
        image={seo.image}
        description={seo.description}
        username={twitter}
        url={seo.url}
      />
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
  metaImage: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  path: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: SEO_DEFAULT.TITLE,
  description: SEO_DEFAULT.DESCRIPTION,
  datePublished: null,
  dateModified: null,
  metaImage: logo,
  path: null,
  article: false,
};
