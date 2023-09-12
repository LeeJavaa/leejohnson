"use client";
import "./globals.css";
import Grid from "@/components/Grid";
import { useEffect } from "react";
import { useLoader } from "@/context/LoadingContext";

export default function Home() {
  const { loading, initialLoad, load, endLoad } = useLoader();

  useEffect(() => {
    if (initialLoad === true) {
      load();
      setTimeout(() => {
        endLoad();
      }, 2000);
    }
  }, []);

  return (
    <main className="w-screen">
      {loading ? (
        <>
          <div className="w-full h-screen flex justify-center items-center">
            <h1>
              <span className=" inline-block animate-textFlip">l</span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.1s" }}
              >
                e
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.2s" }}
              >
                e
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.3s" }}
              >
                j
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.4s" }}
              >
                o
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.5s" }}
              >
                h
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.6s" }}
              >
                n
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.7s" }}
              >
                s
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.8s" }}
              >
                o
              </span>
              <span
                className=" inline-block animate-textFlip"
                style={{ animationDelay: "0.9s" }}
              >
                n
              </span>
            </h1>
          </div>
        </>
      ) : (
        <Grid
          items={[
            "header",
            "about",
            "projects",
            "resume",
            "contact",
            "linkedin",
          ]}
        />
      )}
    </main>
  );
}
