import { AUTH_TOKEN } from "../constants";
import { timeDifferenceForDate } from "../utils";

type vote = [
  id:string,
  user:{
    id:string
  }
]

type postedBy = {
  id:string
  name:string
}

type LinkProps = {
  link: {
    index:number
    description: string;
    url: string;
    createdAt:string
    votes:vote
    postedBy:postedBy
  };
};

const Link = ({ link }: LinkProps) => {
  console.log("Link: ", link);

  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    // <div>
    //   <div>
    //     {link.description} ({link.url})
    //   </div>
    // </div>
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{link.index + 1}.</span>
        {authToken && (
          <div
            className="ml1 gray f11"
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log("Clicked vote button");
            }}
          >
            ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        {
          <div className="f6 lh-copy gray">
            {link.votes.length} votes | by{" "}
            {link.postedBy ? link.postedBy.name : "Unknown"}{" "}
            {timeDifferenceForDate(link.createdAt)}
          </div>
        }
      </div>
    </div>
  );
};

export default Link;
