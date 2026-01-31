import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './sanity.config';

// Create the Sanity client
export const client = createClient(sanityConfig);

// Image URL builder
const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  // Get all published posts
  allPosts: `*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "categories": categories[]->title,
    "author": author->{name, image},
    mainImage
  }`,

  // Get a single post by slug
  postBySlug: `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    readTime,
    "categories": categories[]->title,
    "categoryRefs": categories[]._ref,
    mainImage,
    "author": author->{name, image, bio}
  }`,

  // Get posts by category
  postsByCategory: `*[_type == "post" && categories[0]->title == $category] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "category": categories[0]->title,
    mainImage
  }`,

  // Get all categories
  allCategories: `*[_type == "category"] {
    _id,
    title,
    "slug": slug.current,
    description
  }`,

  // Get related posts (same category, excluding current post)
  relatedPosts: `*[_type == "post" && _id != $currentId && count(categories[@._ref in $categoryRefs]) > 0 && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    "categories": categories[]->title,
    mainImage
  }`,

  // Get all projects
  allProjects: `*[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    tags,
    github,
    streamlit,
    tinkercad,
    external,
    featured,
    "author": author->name
  }`,

  // Get projects by category
  projectsByCategory: `*[_type == "project" && category == $category] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    tags,
    github,
    streamlit,
    tinkercad,
    external,
    featured,
    "author": author->name
  }`,

  // Get featured projects
  featuredProjects: `*[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    category,
    tags,
    github,
    streamlit,
    tinkercad,
    external
  }`,
};
