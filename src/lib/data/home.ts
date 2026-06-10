import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Lokesh Poluru';

export const lastName = 'Velayudham';

export const description =
	'Senior Software Engineer building clinical AI imaging systems, large-scale inference pipelines, and autonomous enterprise products.';

export const links: Array<{ platform: Platform; link: string }> = [
	{
		platform: Platform.Email,
		link: 'lokeshvelayudham@gmail.com'
	},
	{
		platform: Platform.Call,
		link: 'tel:+1-216-413-2056'
	},
	{
		platform: Platform.WhatsApp,
		link: 'https://wa.me/12164132056'
	},
	{ platform: Platform.GitHub, link: 'https://github.com/lokeshvelayudham' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/lokeshvelayudham/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/LokeshVelayudha'
	}
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

export const skills = getSkills(
	'js',
	'css',
	'html',
	'reactjs',
	'python',
	'ts',
	'nodejs',
	'cpp',
	'java',
	'aws',
	'docker',
	'fastapi',
	'nextjs'
);
