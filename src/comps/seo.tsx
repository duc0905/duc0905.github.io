import * as React from 'react';
import { useSiteMetadata } from '../hooks/useSiteMetadata';

export const SEO = ({ title, description, pathname, children }: Props) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`
  };

  // TODO: Add metadata for social media here
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {children}
    </>
  )
}

interface Props extends React.PropsWithChildren<{}> {
  title?: string;
  description?: string;
  pathname?: string;
}