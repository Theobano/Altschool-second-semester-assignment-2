import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { fetchUsers } from "../../services";
import "./users.css"
import { PaginationButton } from "../../components";

const resource = fetchUsers();

function Users() {
  const users = resource.read();
  const userProfileCards = users.results.map((user) => {
    return <ProfileCard {...user} key={user.email} />;
  });

  const [page, setPage] = useState(1);
    const pageSize = 20;
    const totalPages = Math.ceil(userProfileCards.length / pageSize);
    let pageNumbers = []
    for (var i = 1; i <= totalPages; i++){ pageNumbers.push(i); }
  const skip = page * pageSize - pageSize;
  const pageButtons = pageNumbers.map((number) => {
      return (
          <PaginationButton className={page === number ? "current-page" : ""}
 pageNumber={number} onClick={() => {setPage(number)}} key={number} />
    );
  });

  return (
    <div >
      <div className="center">
        <h1>Users</h1>
      </div>
          <div className="profile-cards">{userProfileCards.slice(skip, skip + pageSize)}</div>
          <div className="page-pos-display">
              <button disabled={page<=1} onClick={()=>{setPage(page=>page-1)}}>Prev</button>
              <span>Page {page} of {totalPages}</span>
              <button disabled={page>=totalPages} onClick={()=>{setPage(page=>page+1)}}>Next</button>
          </div>
          <div className="page-buttons">{pageButtons}</div>
    </div>
  );
}

export default Users;
