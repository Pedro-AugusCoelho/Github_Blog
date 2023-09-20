import { useContext } from "react";
import { Card } from "../../../components/Card";
import { BlogContext } from "../../../context/BlogContext";

export function ListPosts() {
    const { postList } = useContext(BlogContext);

    return (
        <section className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pb-36">
            {postList.total_count > 1 && postList.items.map(post => {
                return (
                    <Card
                        title={post.title}
                        date={post.created_at}
                        resume={post.body}
                    />
                )
            })
            }
        </section>
    )
}