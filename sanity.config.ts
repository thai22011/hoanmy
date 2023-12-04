import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
import schemas from "./sanity/schemas/schema-bus";
const config = defineConfig({

    projectId: 'bmcd8be3',
    dataset: 'production',
    title: 'Hoanmyco',
   apiVersion: '2023-07-07',
    basePath: '/en/admin',
    plugins: [deskTool()],
    schema: {types: schemas},
    

})

export default config