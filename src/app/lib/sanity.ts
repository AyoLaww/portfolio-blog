import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '808fe2uw',
    dataset: 'production',
    apiVersion: '2024-07-18',
    useCdn: false,
})