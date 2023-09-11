import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="absolute left-0 right-0 bottom-0 top-0 grid grid-cols-10 grid-rows-5">
        <h1 className=" col-start-4 row-span-1 self-end mx-4 z-50">
          CONTACT ME
        </h1>
        <form className=" row-start-2 row-span-3 col-start-4 col-end-8 self-center flex flex-col gap-5 mx-4 z-50">
          <p>Sometimes a joke can brighten up my day, try sending me one.</p>
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
            className="bg-light font-raleway pl-2 pt-2 outline-none text-veryDark rounded-[4px]"
            placeholder="now impress me"
          ></textarea>
          <button
            className="bg-leeRed w-36 h-11 flex items-center justify-center mx-auto hover:cursor-pointer hover:bg-white hover:text-veryDark duration-100 ease-in"
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
      <Grid items={["header", "close"]} />
    </main>
  );
}
