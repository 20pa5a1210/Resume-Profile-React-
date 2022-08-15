export default function Education() {
  return (
    <div className="flex">
      <div className="w-1/5 ">
        <h1 className="text-[#2A54F5] text-base font-semibold">EDUCATION</h1>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <a
            className="font-semibold text-lg cursor-pointer"
            href="https://vishnu.edu.in/"
            target="_blank"
          >
            Vishnu institute of Technology
          </a>
          <p className="text-gray-400 text-base">November 2020 - 2023</p>
        </div>
        <p className="font-semibold">B.Tech. in Information Technology</p>
        <ul>
          <li>
            - I have studied basic software engineering subjects like DS,
            Algorithms, DBMS, OS, CN, AI etc.
          </li>
          <li>
            - Apart from this, I have done courses on Linux Administration, Full
            Stack Development.
          </li>
        </ul>
        <div className="flex justify-between">
          <h1 className="font-semibold  text-lg">Smt B. Seetha Polytechnic</h1>
          <p className="text-gray-400 text-base">2016 - 2020</p>
        </div>
        <p className="font-semibold">Diploma in Computer Engineering</p>
        <ul>
          <li>
            - I have studied basic software engineering subjects like
            C,C++,Java,Computer Fudamentals etc.
          </li>
          <li>
            - Apart from this, I have done courses on Cisco CCNA,MS
            Office(PowerPoint,Word).
          </li>
        </ul>
      </div>
    </div>
  );
}
