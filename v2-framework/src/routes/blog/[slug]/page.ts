export async function load({ params }:any){
  const post = await import(`../../${params.slug}.md`)
  const { title, date } = post.metadata
  const Content = post.default

  return {
    Content,
    title,
    date,
  }
}