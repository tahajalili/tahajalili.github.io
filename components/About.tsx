import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p>
						I am an undergrad student studying Computer Science
						at the <ExtLink href= {personalInfo.about.college.link}>{personalInfo.about.college.name.replace(/ /g, "\u00a0")} </ExtLink> 
						with a passion in cryptography, algorithms, and anything related to theoretical computer science.
						 
					</p>
					<br/>
					<p>
						I would like to continue my education with the aim of joining academia as a researcher.
						I plan to find a graduate position in Computer Science that focuses on my areas of interest
						once I'm done with my undergraduate studies.
						<br/><br/><a className = "text-sm">✉️: {personalInfo.about.email}</a>
					</p>

					<p className = "text-sm text-gray-600">
						Research Interest: {personalInfo.about.interest}
					</p>
					
				</div>
			</div>
		</section>
	);
};

export default About;
