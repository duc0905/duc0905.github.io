import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import BlogPostLayout from "/src/layout/blog-post";

export default (props: PageProps<Queries.BlogPageQuery>) => {
  return (
    <BlogPostLayout mdRemark={props.data.markdownRemark}>
    </BlogPostLayout>
  );
}

export const query = graphql`
query BlogPage {
  markdownRemark {
    id
    tableOfContents
    html
    internal {
      contentFilePath
      contentDigest
      content
    }
    frontmatter {
      title
      Tags {
        name
        color
      }
      Created_time
      Last_edited_time
    }
  }
}
`;