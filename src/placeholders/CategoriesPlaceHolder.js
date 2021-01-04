import React from "react";
import CategoryPlaceHolder from "./CategoryPlaceHolder";

export default function CategoriesPlaceHolder({count}) {
    const items = []
    for (let i = 0; i < count; i++) {
        items.push(i)
    }
    return (
        <div>
            {
                items.map(() => <CategoryPlaceHolder/>)
            }
        </div>
    )
}