import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url"


export const client = SanityClient(
    {
        projectId: "sd8cao0a",
        dataset: 'production',
        apiVersion: '2022-08-14',
        useCdn: true,
        token: 'skpMcNy6iOUBTCr6uAdVFZLCs0SXDqxUrsBdfHvXKa2U7PG0Z2FqZJOMMBH1B5nOXkdvufWOjFp6R6Zuyu33YbQLJYosZOV9G7yAWXTz3zKSwXcf7ZM7ZPwxvmVUd88NrDEYXspo0ALqZuQg6x8tUDuXyReKg6E2vwwRQJRnaHXgfARj2D9C'
    }
)

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)