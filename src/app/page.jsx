import "./globals.css";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="w-screen">
      <Grid
        items={["header", "about", "projects", "resume", "contact", "linkedin"]}
      />
    </main>
  );
}
