import Welcome from "./(routes)/welcome/welcome";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Welcome />
    </main>
  );
}
