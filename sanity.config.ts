import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "whe4av7v",
    dataset: "production",
    title: "Portfolio",
    version: "2023-5-20",
    basePath: "/admin",
    plugins: [deskTool()],
    schema:{types:schemas}
})

export default config