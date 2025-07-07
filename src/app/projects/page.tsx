import ProjectCard from "@/components/ProjectCard";
import projectData from "./data";

export default function ProjectsPage() {
    return (
        <div className="container">
            <h4>Projects</h4>
            <ul>
                {
                    projectData.map((project) => (
                        <li key={project.id}>
                            <ProjectCard  title={project.title} about={project.about} role={project.role} />
                        </li>
                    ))
                }

            </ul>
        </div>
    );
}
