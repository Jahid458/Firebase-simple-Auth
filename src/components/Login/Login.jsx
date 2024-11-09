import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const Googleprovider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, GitHubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => console.log("ERROR", error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out done!");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGitHubSignIn}>LogInGitHub</button>
        </>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
