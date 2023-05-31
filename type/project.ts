import { PortableTextBlock } from "sanity";

export type Project = {
    _id:string;
    name:string;
    slug:string;
    image:string;
    url:string;
    description: PortableTextBlock[];
    detail: PortableTextBlock[];
}