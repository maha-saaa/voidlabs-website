import Preloader from "./(routes)/(landing)/preloader/preloader";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Preloader />
    </main>
  );
}
