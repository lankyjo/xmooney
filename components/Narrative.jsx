const Narrative = () => {
  return (
    <section className="bg-white max-md:flex-col max-md:px-3 max-md:gap-10 max-md:text-center py-10 px-52 flex text-black justify-between items-center">
      <div className="max-w-80">
        <img src="/nara.avif" />
      </div>

      <div className="space-y-5">
        <h3 className="text-2xl font-bold">THE NARATIVE</h3>
        <p className="max-w-[320px]">
          X Payments got renamed to XMooney. Last year Elon had mentioned in
          interviews that he intends X to eventually offer other financial
          services such as loans, so it may have been that the prior name didn't
          accurately convey that.
        </p>
        <button className="text-center py-3 px-6 text-white bg-gray-900"><a href="/">Learn more</a></button>
      </div>
    </section>
  );
};

export default Narrative;
