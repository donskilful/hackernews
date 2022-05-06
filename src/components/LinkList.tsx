import Link from "./Link";
import { useQuery, gql, QueryResult } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
// type LinkItem = {
//   id: string;
//   description: string;
//   url: string;
//   image?: string;
// };

type Links = {
    createdAt:string
    description:string
    id:string
    url:string
}

type data = {
        feed: {
          id: string;
          links: Links[]
        };
};

// type LinksToRender = Array<LinkItem>;

const LinkList = () => {
  const { data } : QueryResult<data> = useQuery(FEED_QUERY);
  console.log("data:", data);

//   const linksToRender: LinksToRender = [
//     {
//       id: "link-id-1",
//       description: "Prisma gives you a powerful database toolkit 😎",
//       url: "https://prisma.io",
//     },
//     {
//       id: "link-id-2",
//       description: "The best GraphQL client",
//       url: "https://www.apollographql.com/docs/react/",
//     },
//   ];
  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
