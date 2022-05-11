// import Link from "next/link"
// import { useRouter } from "next/router"
// const Nav = () => {
  
//   return (
    
//     <div className="flex pa1 justify-between nowrap orange">
      
//       <div className="flex flex-fixed black">
//         <Link href="/" className="no-underline black">
//           <div className="fw7 mr1">Hacker News</div>
//         </Link>        
//         <Link href="/" className="ml1 no-underline black">
//           new
//         </Link>
//         <div className="ml1">|</div>
//         <Link
//           href="/create"
//           className="ml1 no-underline black"
//         >
//           submit
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Nav


// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AUTH_TOKEN } from '../constants';
 
 
const Nav = () => {
  const router = useRouter();

  let authToken:string = '';
  if (typeof window !== 'undefined'){
    let token = localStorage.getItem(AUTH_TOKEN)
    if(token){
      authToken = token
    }
  }


  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link href="/" className="no-underline black">
          <div className="fw7 mr1">Hacker News</div>
        </Link>           
        <Link href="/" className="ml1 no-underline black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link
          href="/search"
          className="ml1 no-underline black"
        >
          search
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              href="/create"
              className="ml1 no-underline black"
            >
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              router.push(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            href="/login"
            className="ml1 no-underline black"
          >
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;