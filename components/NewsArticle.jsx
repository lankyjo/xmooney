const NewsArticle = () => {
  return (
    <section className="flex flex-col gap-8 px-5 min-h-svh items-center max-md:justify-center py-7">
        <h5 className="text-center font-bold text-5xl">NEWS ARTICLE</h5>
    <div className="flex gap-4 max-md:flex-col justify-center lg:items-baseline items-center">
        <article>
            <img src="forbes.avif"/>
        </article>
        <article>
            <img src="yahoo.avif"/>
        </article>
        <article>
            <img src="cnbc.avif"/>
        </article>
    </div>
    </section>

  )
}

export default NewsArticle