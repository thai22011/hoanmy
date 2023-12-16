import { createClient, groq } from "next-sanity"
import { SanityClient } from "sanity"
import { Locale } from "@/i18n-config"
  const client: SanityClient = createClient({
        projectId: 'bmcd8be3',
        dataset: 'production',
      
       apiVersion: '2023-07-07',
    })

export const getProjectPreviewsHome = async (lang:Locale) => {

    return client.fetch(
        groq`*[_type =='project' && language == $lang] | order(completed desc)[0..2]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image":image.asset->url,
            url,
            content,
            completed,
            client,
            market

        }
        
        `, {lang}
    )
}
export const getProjectPreviews = async (lang:Locale) => {

    return client.fetch(
        groq`*[_type =='project' && language == $lang]| order(completed desc) {
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image":image.asset->url,
            url,
            content,
            client,
            market

        }
        
        `, {lang}
    )
}



export const getNewsPreviews = async (lang:Locale) => {

    return client.fetch(

        groq`*[_type == "news" && language == $lang]  {
_id,
_createdAt,
title,
"image":image.asset->url,
description,
language,
"slug": slug.current


        }`,{lang}
    )
}
export const getNewsPreviewsHome = async (lang:Locale) => {

    return client.fetch(

        groq`*[_type == "news" && language == $lang][0..2]  {
_id,
_createdAt,
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
            content,
            "gallery1":newsPhoto1.asset->url,
            "gallery2":newsPhoto2.asset->url,
            "gallery3":newsPhoto3.asset->url,
            "gallery4":newsPhoto4.asset->url,
            "gallery5":newsPhoto5.asset->url
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
    content,
    "gallery1":projectPhoto1.asset->url,
    "gallery2":projectPhoto2.asset->url,
    "gallery3":projectPhoto3.asset->url,
    "gallery4":projectPhoto4.asset->url,
    "gallery5":projectPhoto5.asset->url,

}`,{slug}

    )
}