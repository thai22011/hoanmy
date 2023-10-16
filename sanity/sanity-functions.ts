import { createClient, groq } from "next-sanity"
import { SanityClient } from "sanity"
import { Locale } from "@/i18n-config"
  const client: SanityClient = createClient({
        projectId: 'bmcd8be3',
        dataset: 'production',
      
       apiVersion: '2023-07-07',
    })

export const getProjectPreviews = async (lang:Locale) => {

    return client.fetch(
        groq`*[_type =='project' && language == $lang]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image":image.asset->url,
            url,
            content
        }
        
        `, {lang}
    )
}



export const getNewsPreviews = async (lang:Locale) => {

    return client.fetch(

        groq`*[_type == "news" && language == $lang] {
_id,
title,
"image":image.asset->url,
description,
language,
"slug": slug.current


        }`,{lang}
    )
}

export const getArticle = async (slug: string) => {
    return client.fetch(
        groq`*[_type == "news" && slug.current == $slug][0] {

            _id,
            title,
            date,
            "image":image.asset->url,
            "slug": slug.current,
            desciption,
            content
        }`,{slug}
    )
}

export const getProject = async (slug: string) => {
    return client.fetch(
groq`*[_type == "project" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    "image":image.asset->url,
    market,
    client,
    budget,
    completed,
    content

}`,{slug}

    )
}