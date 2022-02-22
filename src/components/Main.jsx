import React from "react"
import data from "../data"
import Cards from "./Cards"

export default function Main() {
    const locationCards = data.map(item => {
        return (
            <Cards key={item.title} {...item} />
        )
    })
    return (
        <main>
            {locationCards}
        </main>
    )
}