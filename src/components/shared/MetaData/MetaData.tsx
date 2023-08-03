import Head from "next/head";

/**
 * Component to handle Open Graph and metadata tags for a Next.js page
 *
 * @param {string} title - The title of the page.
 * @param {string} description - The description of the page.
 * @param {string} pageUrl - The URL of the page.
 * @param {boolean} needsIndexation - Determines if the page should be indexed by search engines.
 * @param {boolean} needsRobotFollow - Determines if search engine robots should follow links on the page.
 * @param {Object} openGraph - Open Graph metadata for social media sharing.
 * @param {Object} openGraph.image - The image metadata for social media sharing.
 * @param {string} openGraph.image.url - The URL of the image.
 * @param {number} openGraph.image.width - The width of the image in pixels.
 * @param {number} openGraph.image.height - The height of the image in pixels.
 *
 * @returns {JSX.Element} - The Head component with all the metadata and Open Graph tags.
 */
export default function MetaData({
  title,
  description,
  pageUrl,
  needsIndexation,
  needsRobotCrawlers,
  openGraph,
}: {
  title: string;
  description: string;
  pageUrl: string;
  needsIndexation: boolean;
  needsRobotCrawlers: boolean;
  openGraph: {
    image: {
      url: string;
      width: number;
      height: number;
    };
  };
}): JSX.Element {
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
   * Value to determine whether the should be indexed by search engines
   *
   * @type {string}
   */
  const indexationValue: string = needsIndexation ? "index" : "noindex";
  /**
   * Value to determine whether the links in the page should be followed by the robot crawlers
   *
   * @type {string}
   */
  const robotCrawlersValue: string = needsRobotCrawlers ? "follow" : "nofollow";

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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:url" content={pageUrl} />
      {/*
         <!-- Title --> 
         */}
      <title>{title}</title>
    </Head>
  );
}
