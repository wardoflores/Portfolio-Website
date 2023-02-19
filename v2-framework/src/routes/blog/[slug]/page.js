// svelte docs

// import { error } from '@sveltejs/kit';
 
// /** @type {import('./$types').PageLoad} */
// @ts-ignore
export async function load({ params }){
  const post = await import(`../${params.slug}.md`)
  const { title, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
  }
}

// 

// export async function load({ params }: any){
//     const post = await import(`../${params.slug}.md`)
//     const { title, date } = post.metadata
//     const Content = post.default
  
//     return {
//       Content,
//       title,
//       date,
//     }
//   }


// TODO

// import type { PageLoad } from './$types';

// export const load: PageLoad = ({ params }:any) => {
//     return {
//         name: params.slug
//     }
// }

// export interface CoinPage{
//     name: string
// }