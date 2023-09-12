import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="absolute left-0 right-0 bottom-0 top-0 grid grid-cols-2 lg:grid-cols-8 2xl:grid-cols-10 grid-rows-5 animate-fadeInLong">
        <h1 className=" col-start-1 lg:col-start-3 2xl:col-start-4 row-span-1 self-end mx-4 z-50">
          CONTACT ME
        </h1>
        <form className=" row-start-2 row-span-4 lg:row-span-3 col-start-1 col-end-3 lg:col-start-3 2xl:col-start-4 lg:col-end-7 2xl:col-end-8 self-start lg:self-center flex flex-col gap-5 mx-4 z-50 pt-10 lg:pt-0 text-sm lg:text-base">
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
        </form>
      </div>
      <Grid items={["header", "close"]} />
    </main>
  );
}
