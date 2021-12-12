import { getAuth, onAuthStateChanged } from "@firebase/auth";

const getUser = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.email);
    } else {
      console.log("User not found");
    }
  });
};

export default getUser;
