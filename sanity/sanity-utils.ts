import { createClient, groq } from "next-sanity"
import { Project } from "type/project"

export async function getProjects() {
    const client = createClient({
        projectId: "whe4av7v",
        dataset: "production",
        apiVersion: "2023-05-20",
    })

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            description,
            detail
        }`
    )

}