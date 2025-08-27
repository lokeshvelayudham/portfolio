import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Lokesh';

export const lastName = 'Velayudham';

export const description =
	'AI-driven & full-stack Software Engineer with 4+ years\' experience designing and scaling distributed, fault-tolerant systems for healthcare, SaaS, and logistics. Proven in high-performance computing (3× throughput, −40% ops), cloud-native architectures (AWS/GCP), and AI/ML solutions optimizing large-scale workflows. Skilled in system design, performance tuning, and delivering customer-impactful products end-to-end.';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Email,
		link: 'lokesh.beyondx@gmail.com'
	},
	{
		platform: Platform.Call,
		link: 'tel:+1-773-654-8775'
	},
	{
		platform: Platform.WhatsApp,
		link: 'https://wa.me/17736548775'
	},
	{ platform: Platform.GitHub, link: 'https://github.com/lokeshvelayudham' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/lokeshvelayudham/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/LokeshVelayudha'
	},
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// },
	
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'python', 'ts', 'nodejs', 'cpp', 'java', 'aws', 'docker', 'fastapi', 'nextjs' );
