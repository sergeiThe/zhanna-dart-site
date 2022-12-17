import React from "react";

export function Button({ value, onClick, styleType }) {
    return <button onClick={onClick}>{value}</button>;
}

export function PageTitle({ value }) {
    return <h1>{value}</h1>;
}

export function Paragraph({ value }) {
    return <p>{value}</p>;
}
