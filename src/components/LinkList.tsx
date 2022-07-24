import Link from "./Link";
import { useQuery, gql, QueryResult } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
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


type votes =[
  id:string,
  user: {
    id:string
  }
]

type postedBy = {
  id:string
  name:string
}

type Links = {
  index:number
  createdAt: string;
  description: string;
  id: string;
  url: string;
  postedBy:postedBy
  votes:votes
};

type data = {
  feed: {
    id: string;
    links: Links[];
  };
};

// type LinksToRender = Array<LinkItem>;

const LinkList = () => {
  const { data }: QueryResult<data> = useQuery(FEED_QUERY);

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
