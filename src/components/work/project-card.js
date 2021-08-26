import Image from 'next/image';

export default function ProjectCard({ project }) {

	return (
		<div>
			<Image src={ project.images[0] } height={200} width={200}/>
			<h2>{ project.title }</h2>
			<p>{ project.problem || project.description }</p>
		</div>
	)

}