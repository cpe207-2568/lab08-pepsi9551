import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar";
import { TaskInput } from "./components/TaskInput";
import { Task } from "./components/Task";
function App() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header></Header>

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="nuttawat" type="student"></Sidebar>
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
            {/* input ด้านบน*/}
            <TaskInput></TaskInput>
            {/* Card รายการ */}
            <Task id={1} title="Read a Book" description="Vite + React + Bootstrap + TS" isDone={true} ></Task>
            <Task id={2} title="Write code" description="Finish project for class" isDone={true} ></Task>
            <Task id={1} title="Deploy app" description="Push project GitHub Pages" isDone={true} ></Task>
          </main>
        </div>
      </div>

      {/* Footer ด้านล่าง */}
      <Footer year="2006" fullName="Nuttawat Fundeekorakiat" studentId="670610691"></Footer>
    </div>
  );
}


export default App;
