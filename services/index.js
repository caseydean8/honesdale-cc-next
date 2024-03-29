import { request, gql, GraphQLClient } from 'graphql-request';

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT);

export const getPostsBasic = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: updatedAt_DESC) {
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

  const result = await graphQLClient.request(query);
  return result.postsConnection.edges;
};

export const getPrayerList = async () => {
  const query = gql`
    query MyQuery {
      prayerRequestsConnection {
        edges {
          node {
            list {
              raw
            }
          }
        }
      }
    }
  `;

  const result = await graphQLClient.request(query);
  return result.prayerRequestsConnection.edges[0].node.list.raw.children;
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

  const result = await graphQLClient.request(query);
  return result.articlesConnection.edges;
};

// export const getPosts = async () => {
//   const query = gql`
//     query MyQuery {
//       postsConnection {
//         edges {
//           node {
//             author {
//               bio
//               name
//               id
//               photo {
//                 url
//               }
//             }
//             createdAt
//             slug
//             title
//             excerpt
//             featuredImage {
//               url
//             }
//             categories {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;

//   const result = await request(graphQLClient, query);

//   return result.postsConnection.edges;
// };

// export const getRecentPosts = async () => {
//   const query = gql`
//     query GetPostDetails {
//       posts(orderBy: createdAt_ASC, last: e) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;

//   const result = await request(graphQLClient, query);

//   return result.posts;
// };

// export const getPostDetails = async slug => {
//   const query = gql`
//     query GetPostDetails($slug: String!) {
//       post(where: { slug: $slug }) {
//         author {
//           bio
//           name
//           id
//           photo {
//             url
//           }
//         }
//         createdAt
//         slug
//         title
//         excerpt
//         featuredImage {
//           url
//         }
//         categories {
//           name
//           slug
//         }
//         content {
//           raw
//         }
//       }
//     }
//   `;
//   const result = await graphQLClient.request(query, { slug });
//   return result.post;
// };
