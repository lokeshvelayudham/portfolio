import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Lokesh';

export const lastName = 'P Velayudham';

export const description =
	'Dedicated software engineer with a passion for creating efficient, scalable solutions. Proficient in full-stack development. In my free time, I enjoy working on hands-on building projects, applying engineering principles to develop creative solutions both in and out of the digital space.';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Email,
		link: 'loki@case.edu'
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
	{
		platform: Platform.Call,
		link: 'tel:+1-216-413-2056'
	},
	{
		platform: Platform.WhatsApp,
		link: 'https://wa.me/12164132056'
	}
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'python', 'ts', 'nodejs' );
