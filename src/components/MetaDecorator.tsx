import { Helmet } from "react-helmet";

interface Meta {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const metaDecorator = {
  hostname: "https://game-hub-navy-ten.vercel.app",
  twitterUsername: "@celikkoseoglu",
};

export const MetaDecorator = ({
  title,
  description,
  imageUrl,
  imageAlt,
}: Meta) => (
  <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={metaDecorator.hostname + imageUrl} />
    <meta
      property="og:url"
      content={
        metaDecorator.hostname +
        window.location.pathname +
        window.location.search
      }
    />
    <meta
      property="og:url"
      content={
        metaDecorator.hostname +
        window.location.pathname +
        window.location.search
      }
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

// <!-- Open Graph / Facebook -->
// <meta property="og:type" content="website" />
// <meta
//   property="og:url"
//   content="https://game-hmn7gox2e-iamjhay.vercel.app/"
// />
// <meta property="og:title" content="GameHub - Home Of Everything Games" />
// <meta
//   property="og:description"
//   content="Game hub is a platform where you find premium games that are currenlty trending worldwide. You can filter based on actions, rogue and so many options present to select from."
// />
// <meta
//   property="og:image"
//   content="https://game-hmn7gox2e-iamjhay.vercel.app/vite.svg"
// />

// <!-- Twitter -->
// <meta property="twitter:card" content="summary_large_image" />
// <meta
//   property="twitter:url"
//   content="https://game-hmn7gox2e-iamjhay.vercel.app/"
// />
// <meta
//   property="twitter:title"
//   content="GameHub - Home Of Everything Games"
// />
// <meta
//   property="twitter:description"
//   content="Game hub is a platform where you find premium games that are currenlty trending worldwide. You can filter based on actions, rogue and so many options present to select from."
// />
// <meta
//   property="twitter:image"
//   content="https://game-hmn7gox2e-iamjhay.vercel.app/vite.svg"
// />

// <!-- Meta Tags Generated with https://metatags.io -->
