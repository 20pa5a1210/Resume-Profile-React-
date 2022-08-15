import bgImg from "./assets/7495-removebg.png";
import Education from "./components/Education";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ResumeBtn from "./components/ResumeBtn";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex">
      <Profile />
      <div className="w-1/2 h-[100vh]"></div>
      <div className="bg-gray-100 flex-1 p-10 space-y-10   capitalize">
        <Intro />
        <Skills />
        <Education />
        <Projects />
        <div className="text-center">
          <ResumeBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
