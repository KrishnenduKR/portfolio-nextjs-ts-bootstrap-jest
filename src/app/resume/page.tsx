import ResumeSession from '@/components/ResumeSession';
import resumeData, { skillData } from './data';
import SkillBar from '@/components/SkillBar';
import SimpleList from '@/components/SimpleList';

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
                    <ResumeSession year="2016 - 2018" title="Master of Technology(MTech)" location="Rajagiri School of Engineering and Technology, Kerala, India" roleSummary="8.2 GPA" />
                </div>
                <div className="col-sm-4">
                    <h5 >Experience</h5>
                    {
                        resumeData.map((data) => (
                            <ResumeSession key={data.id} {...data} />
                        ))
                    }
                </div>
                <div className="col-sm-4">
                    <h5>Coding skills</h5>
                    {
                        skillData.map((data) => (
                            <SkillBar key={data.id} skillName={data.skillName} skillLevel={data.skilLevel} />
                        ))
                    }
                    <h5>Design skills</h5>
                    <SkillBar skillName="Web Design" skillLevel='5' />
                    <SimpleList name='Operating Systems' data={['Mac', 'Linux', 'Windows']} />
                    <SimpleList name='Tools' data={['Git', 'Jira', 'Jenkins', 'Giltlab']} />
                </div>
            </div>
        </div>
    );
}
