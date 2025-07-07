import './resume.css'
import ResumeSession from '@/components/ResumeSession';
import resumeData from './data';

export default function ResumePage() {
  return (
    <div className="container mt-4">
      <h4>My Resume</h4>
      <p>Download my latest resume:</p>
      <a
        href="/my-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-secondary"
      >
        Download PDF
      </a>

      
     <div className="row mt-4">
        <div className="col-sm-4">
            <h5 >Education</h5>
            <ResumeSession year="2016 - 2018" title="Master of Technology(MTech)" location="Rajagiri School of Engineering and Technology, Kerala, India" roleSummary="8.2 GPA"/>
         </div>
         <div className="col-sm-4">
            <h5 >Experience</h5>
            {
                resumeData.map((data)=> (
                    <ResumeSession key={data.id} {...data} />
                ))
            }  
         </div>
         <div className="col-sm-4">
            <h5>Coding skills</h5>
            <h6>React</h6>
            <div className="skill-container">
                <div className="skill-percentage skill1"></div>
            </div>
            <h6>Typescript/Javascript</h6>
            <div className="skill-container">
                <div className="skill-percentage skill1"></div>
            </div>
            <h6>Angular</h6>
            <div className="skill-container">
                <div className="skill-percentage skill1"></div>
            </div>
            <h6>NodeJs</h6>
            <div className="skill-container">
                <div className="skill-percentage skill1"></div>
            </div>
            <h6>JAVA</h6>
            <div className="skill-container">
                <div className="skill-percentage skill5"></div>
            </div>
            <h6>Jest</h6>
            <div className="skill-container">
                <div className="skill-percentage skill1"></div>
            </div>
            <h6>Python</h6>
            <div className="skill-container">
                <div className="skill-percentage skill3"></div>
            </div>
            <h6>C/C++</h6>
            <div className="skill-container">
                <div className="skill-percentage skill1"></div>
            </div>
            <h6>HTML</h6>
            <div className="skill-container">
                <div className="skill-percentage skill1"></div>
            </div>
            <h6>CSS</h6>
            <div className="skill-container">
                <div className="skill-percentage skill4"></div>
            </div>

            <h5>Design skills</h5>
            <h6>Web Design</h6>
            <div className="skill-container">
                <div className="skill-percentage skill5"></div>
            </div>

            <h5>Operating Systems</h5>
            <p>
                <li>Mac</li>
                <li>Linux</li>
                <li>Windows</li>
            </p>
            <h5>Tools</h5>
            <li>Git</li>
            <li>Jira</li>
            <li>Jenkins</li>
           <li>Giltlab</li>
         </div>
     </div>
    </div>
  );
}
