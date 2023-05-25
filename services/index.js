// import { request, gql } from "graphql-request";
// GraphQLClient should replace graphqlAPI in query  functions
import { request, gql, GraphQLClient } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getArticles = async () => {
  const query = gql`
    query MyQuery {
      articlesConnection {
        edges {
          node {
            author {
              id
            }
            excerpt
            createdAt
            content {
              raw
            }
            slug
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.articlesConnection.edges;
};

export const getPostsBasic = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            featuredImage {
              url
            }
            title
            content {
              # raw content must be formatted in PostCard.jsx
              raw
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(orderBy: createdAt_ASC, last: e) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

// probably wont't be needed
// export const getSimilarPosts = async (categories, slug) => {
//   const query = gql`
//     query getPostDetails($slug: String!, $categories: [String!]) {
//       posts(
//         # Since we're in related posts sidebar we don't want to retrieve current slug
//         where: {
//           slug_not: $slug
//           AND: { categories_some: { slug_in: $categories } }
//         }
//         last: 3
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;
//   const result = await graphQLClient.request(query, { categories, slug });

//   return result.posts;
// };

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;
  // const result = await graphQLClient.request(query, { slug });

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};
