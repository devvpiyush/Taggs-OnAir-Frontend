// Local Modules
import Navbar from "@component/Navbar";
import Navigator from "@component/Navigator";
import Sidebar from "@component/Sidebar";

function Classic({ excluded = "None", children }) {
  return (
    <div className="w-full md:flex md:flex-row">
      <Sidebar />
      {excluded !== "Header" && (
        <>
          <header className="md:hidden">
            <Navbar />
          </header>
        </>
      )}
      <main className="w-full">
        {children}
        <div className="md:hidden">
          <Navigator />
        </div>
      </main>
    </div>
  );
}

export default Classic;
