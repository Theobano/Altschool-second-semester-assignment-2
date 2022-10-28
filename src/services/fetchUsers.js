import wrapPromise from "./wrapPromise";

const USERSURL = "https://www.randomuser.me/api/?results=100";


// Function to fetch users from API and wrap it with wrapPromise
// Returns a promise wrapped with function wrapPromise
function fetchUsers() {
  const promise = fetch(USERSURL)
    //   .then((res)=> console.log(res.json()))
    .then((res) => res.json());
  // .then((res) => res.data);

  return wrapPromise(promise);
}

export default fetchUsers;
