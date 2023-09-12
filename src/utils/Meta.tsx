import { Helmet } from "react-helmet";

interface Metas {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const metaDecorator = {
  hostname: "https://game-hub-navy-ten.vercel.app",
  twitterUsername: "@celikkoseoglu",
};

export const Meta = ({ title, description, imageUrl, imageAlt }: Metas) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://game-irf43w07b-iamjhay.vercel.app/"
    />
    <meta property="og:title" content="GameHub - Home Of Everything Games" />
    <meta property="og:description" content={description} />
    <meta
      property="og:image"
      content="https://game-hub-navy-ten.vercel.app/images/meta-tags.png"
    />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={metaDecorator.hostname} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta
      property="twitter:image"
      content={metaDecorator.hostname + imageUrl}
    />
  </Helmet>
);
