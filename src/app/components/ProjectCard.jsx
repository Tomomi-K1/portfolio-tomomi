

export default function ProjectCard({project}){
    return(
        <article>
            <h3>{project.name}</h3>
            <h4>Project Summary</h4>
            <p>{project.description}</p>
            <h4>Technologies Used</h4>
            <ul>
            {project.tech.map(item =>
                <li>{item.tech}</li>
            )}
            </ul>
            <img src="public/self.jpg" alt="" />
        </article>
    );
}