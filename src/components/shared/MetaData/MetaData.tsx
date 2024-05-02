import Head from "next/head";

type MetaDataProps = {
  title: string;
  description: string;
  pageUri: string;
  needsIndexation: boolean;
  allowRobotCrawlers: boolean;
  openGraph: {
    image: {
      url: string;
      width: number;
      height: number;
    };
  };
};

/**
 * A component to set metadata and Open Graph tags for social media sharing.
 *
 * This component sets various metadata tags and Open Graph tags for better SEO and social media sharing. It allows specifying the page title, description, URL, indexation, robot crawlers, and Open Graph image.
 *
 * @param {string} title - The page title.
 * @param {string} description - The page description.
 * @param {string} pageUri - The URI of the page.
 * @param {boolean} needsIndexation - Determines whether the page should be indexed by search engines.
 * @param {boolean} allowRobotCrawlers - Determines whether the robot crawlers should follow the links in the page.
 * @param {Object} openGraph - The Open Graph properties for social media sharing.
 * @param {string} openGraph.image.url - The URL of the Open Graph image.
 * @param {number} openGraph.image.width - The width of the Open Graph image for social media sharing.
 * @param {number} openGraph.image.height - The height of the Open Graph image for social media sharing.
 *
 * @returns {JSX.Element} The rendered Head component with metadata and Open Graph tags.
 *
 * @example
@component
 * // Usage:
 * function MyPage() {
 *   return (
 *    <>
 *       <MetaData
 *         title="My Page Title"
 *         description="This is a description of my page"
 *         pageUri="/my-page"
 *         needsIndexation
 *         allowRobotCrawlers
 *         openGraph={{
 *           image: {
 *             url: "https://example.com/image.jpg",
 *             width: 1200,
 *             height: 630,
 *           },
 *         }}
 *       />
 *     <div>
 *       <h1>My Page</h1>
 *       ...
 *     </div>
 *    </>
 *   );
 * }
 *
 * @component
 */
export default function MetaData({
  title,
  description,
  pageUri,
  needsIndexation,
  allowRobotCrawlers,
  openGraph,
}: MetaDataProps): JSX.Element {
  const { image } = openGraph;

  /**
   * Width of the image in the Open Graph metadata for social media sharing
   *
   * @type {number}
   */
  const imageWidth: string = image.width.toString();
  /**
   * Height of the image in the Open Graph metadata for social media sharing
   *
   * @type {number}
   */
  const imageHeight: string = image.height.toString();

  /**
   * Value to determine whether the page should be indexed by search engines
   *
   * @type {string}
   */
  const indexationValue: string = Boolean(needsIndexation)
    ? "index"
    : "noindex";
  /**
   * Value to determine whether the links in the page should be followed by the robot crawlers
   *
   * @type {string}
   */
  const robotCrawlersValue: string = Boolean(allowRobotCrawlers)
    ? "follow"
    : "nofollow";

  const pageUrl: string = `https://younes-portfolio-dev.vercel.app${pageUri}`;

  return (
    <Head>
      {/*
         <!-- Meta tags -->
         */}
      <meta
        name="robots"
        content={`${indexationValue}, ${robotCrawlersValue}`}
      />
      <meta name="description" content={description} />

      {/* 
      <!-- Open Graph tags -->
       */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Younes developer portfolio" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={image.url} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />

      <meta property="og:locale" content="en_US" />

      <meta property="og:url" content={pageUrl} />
      {/*
         <!-- Title --> 
         */}
      <title>{title}</title>
    </Head>
  );
}
