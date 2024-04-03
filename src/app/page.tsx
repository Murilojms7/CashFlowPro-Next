import NavBar from "@/componentes/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

      <NavBar active="dashboard"/>
      <h2>DashBoard</h2>
    </main>
  );
}
