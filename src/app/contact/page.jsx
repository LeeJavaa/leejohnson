import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="absolute left-0 right-0 bottom-0 top-0 grid grid-cols-2 lg:grid-cols-8 2xl:grid-cols-10 grid-rows-5 animate-fadeInLong">
        <h1 className=" col-start-1 lg:col-start-3 2xl:col-start-4 row-span-1 self-end mx-4 z-50">
          CONTACT ME
        </h1>
        {/* <form className=" row-start-2 row-span-4 lg:row-span-3 col-start-1 col-end-3 lg:col-start-3 2xl:col-start-4 lg:col-end-7 2xl:col-end-8 self-start lg:self-center flex flex-col gap-5 mx-4 z-50 pt-10 lg:pt-0 text-sm lg:text-base">
          <input
            type="text"
            className="bg-light font-raleway pl-2 py-2 outline-none text-veryDark rounded-[4px]"
            placeholder="first tell me your name"
          />
          <input
            type="email"
            className="bg-light font-raleway pl-2 py-2 outline-none text-veryDark rounded-[4px]"
            placeholder="and then your email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="bg-light font-raleway pl-2 pt-2 outline-none text-veryDark rounded-[4px] lg:h-52 2xl:h-auto"
            placeholder="now impress me"
          ></textarea>
          <button
            className="bg-leeRed w-36 h-11 flex items-center justify-center mx-auto hover:cursor-pointer hover:bg-white hover:text-veryDark duration-100 ease-in animate-fadeIn opacity-0"
            type="submit"
            style={{ animationFillMode: "forwards", animationDelay: "1s" }}
          >
            SEND
          </button>
        </form> */}
        <div className="row-start-2 row-span-4 lg:row-span-3 col-start-1 col-end-3 lg:col-start-3 2xl:col-start-4 lg:col-end-7 2xl:col-end-8 self-start flex flex-col gap-5 mx-4 z-50 pt-10 lg:pt-0 lg:mt-5 text-sm lg:text-base text-justify">
          <p>
            If you'd like to contact me, please do so on LinkedIn or via email.
            While seemingly most will have a different view, I love chatting to
            those who want to connect, for any reason whatsoever. So please do
            not hesitate to send me an email or pop me a DM at any time.{" "}
          </p>
          <div>
            <div className="flex justify-between">
              <p>LinkedIn:</p>
              <a href="https://www.linkedin.com/in/lee-johnson-engineering/">
                lee-johnson-engineering
              </a>
            </div>
            <div className="flex justify-between">
              <p>Email:</p>
              <p className="">leejohnson19@icloud.com</p>
            </div>
          </div>
        </div>
      </div>
      <Grid items={["header", "close"]} />
    </main>
  );
}
