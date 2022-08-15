import ProjectsData from "./ProjectsData";
export default function Projects() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/5 ">
          <h1 className="text-[#2A54F5] text-base font-semibold">PROJECTS</h1>
        </div>
        <div className="flex-1 space-y-2">
          {ProjectsData.map((item) => {
            const { Name, Description, Code, Demo } = item;
            return (
              <div key={Name} className="space-y-1 mb-5">
                <div className="flex justify-between">
                  <a
                    href={Demo}
                    className="font-semibold text-lg"
                    target="_blank"
                  >
                    {Name}
                  </a>
                  <a
                    href={Code}
                    target="_blank"
                    className="text-gray-400 text-base"
                  >
                    Source Code
                  </a>
                </div>

                <p className="text-base">{Description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
