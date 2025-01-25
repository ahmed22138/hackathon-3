import { groq } from "next-sanity";



export const allProduct = groq`*[_type == "food"]`;
export const four = groq`*[_type == "food"][0..3]`;
export const allChef = groq ` *[_type == "chef"]`