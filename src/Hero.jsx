export default function Hero() {
  return (
    <>
      {/*<!-- Component: Two columns even layout --> */}
      <section>
        <div className="container px-6 m-auto">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 lg:col-span-6">
              <img src="https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg" alt="Laptop" />
            </div>
            <div className="col-span-4 lg:col-span-6">
              <h2 className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. id vero veniam sint cupiditate alias eaque qui quibusdam eius?</h2>
              <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis modi qui sapiente nostrum illo, ipsa itaque magnam facilis quisquam cumque incidunt autem nobis molestiae magni blanditiis alias temporibus atque exercitationem. Quos consequatur aliquam beatae obcaecati facere incidunt voluptatem nulla harum velit, deleniti laborum repellat doloremque nobis amet nostrum praesentium illum?</p>
              <button className="inline-flex items-center justify-center h-12 gap-2 my-5 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>Large button</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Two columns even layout --> */}
    </>
  )
}