import React from "react";
// import "./buttons.css"

export function PaginationButton({ className, pageNumber, onClick }) {
    return <button className={"pagination-button "+ className
} onClick={onClick}>{pageNumber}</button>;
}
