import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
    projectId: "whe4av7v",
    dataset: "production",
    title: "Portfolio",
    version: "2023-5-20",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types:[project]}
})

export default config