import { Card } from "../../../components/Card";

export function ListPosts() {
    return (
        <section className="w-full mt-12 grid grid-cols-2 gap-8 pb-36">
            <Card
                title="JavaScript data types and data structures"
                date="Há 1 dia"
                resume="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
            />

            <Card
                title="JavaScript data types and data structures"
                date="Há 1 dia"
                resume="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
            />

            <Card
                title="JavaScript data types and data structures"
                date="Há 1 dia"
                resume="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn."
            />
        </section>
    )
}