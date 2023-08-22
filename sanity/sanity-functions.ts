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
        groq`*[_type =='project']{
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

        groq`*[_type == "news" && language == $lang] | order(_createdAt desc)[0...10]{
_id,
title,
"image":image.asset->url,
description,
language


        }`,{lang}
    )
}