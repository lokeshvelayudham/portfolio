import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'alter-cabs',
		color: '#5e95e3',
		description:
			`Alter Cabs was born—a beacon of change, a tribute to the drivers who weave tales of the road, and a testament to the power of alternatives. The name "Alter" symbolised the transformation they sought to bring, and "Cabs" spoke of the fundamental service they aimed to improve .
			\n To redefine urban travel with premium, reliable, and transparent ride-hailing solutions.`,
		shortDescription:
			`As the app hit the streets, it wasn't just another ride-hailing service. It was a movement—a revolution driven by drivers, embraced by passengers, and admired by all who sought a different kind of ride.`,
		links: [{ to: 'https://www.altercabs.com/', label: 'altercabs' }, { to: 'https://bx-bb-mobile-wrappers.s3.amazonaws.com/546270/master/0.1.94_Android_release.apk', label: 'Android APK' }],
		logo: Assets.AlterCabs,
		name: 'Alter Cabs',
		period: {
			from: new Date(2023, 5, 1)
		},
		skills: getSkills('reactjs', 'ts', 'tailwind', 'js', 'android'),
		type: 'Android and iOS Application',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.AlterCabsScreenshot1,
				// src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: Assets.AlterCabsScreenshot2,
			},
			{
				label: '3',
				src: Assets.AlterCabsScreenshot3,
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'intersection',
		color: '#ff3e00',
		description:
			`Previously, the process of matching students with judges was done manually, which was both time-consuming and labor-intensive, particularly during the event. The manual approach introduced inefficiencies, as the number of participants increased and ensuring accurate matches became challenging. To address these limitations, we decided to build an application that automates the entire process, from registration to student-judge matching and score evaluation. This solution not only reduces the time required but also enhances accuracy and streamlines communication, allowing for a smoother and more efficient event management experience.
			\n The core functionality of the Intersection application revolves around three primary modules: student registration, judge registration, and admin operations.

1. Student Registration: This module allows students to easily register for the competition, providing their details, uploading their poster presentations, and tracking their registration status. This ensures a seamless and organized registration process for participants.
2. Judge Registration: Judges, including post-docs, master’s students, PhD candidates, and staff, can register through this module. They can create profiles, specify areas of expertise, and indicate availability, ensuring they are matched with suitable student presentations.
3. Admin Operations: The admin dashboard manages critical operations such as student-judge matching, mailing, and score evaluation. Using a sophisticated algorithm, the admin can match students with judges based on predefined criteria. The platform also supports bulk mailing to judges regarding their assignments, schedules, and updates. Additionally, the system automates the score evaluation process by computing and averaging scores from judges to facilitate efficient and accurate competition outcomes.
`,
		shortDescription:
			'An end to end managament tool for intersection by undergraduate research office',
		links: [{ to: 'https://github.com/lokeshvelayudham/intersection', label: 'GitHub' }],
		logo: Assets.CWRU,
		name: 'Intersection',
		period: {
			from: new Date(2024, 1, 1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs', 'ts', 'mysql'),
		type: 'Progressive Web Application',
		// screenshots: [
		// 	{
		// 		label: 'screen 1',
		// 		src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '2',
		// 		src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '3',
		// 		src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '4',
		// 		src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '5',
		// 		src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	},
		// 	{
		// 		label: '6',
		// 		src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
		// 	}
		// ]
	},
	{
		slug: 'guvi',
		color: '#ff3e00',
		description:
			'GuviGeek Technologies, an IIT-M and IIM-A incubated EdTech platform, focuses on vernacular upskilling with a global learner base of over 3 million. I contributed by developing a PHP hiring module that streamlined recruitment processes for 50+ employers, improving system performance by 25% and boosting company revenue by 15%.',
		shortDescription:
			'Developed a PHP-based hiring module with integrated microservices, improving system performance and enhancing recruitment processes for 1000+ students.',		
		links: [{ to: 'https://www.guvi.in/', label: 'GVUI' }],
		logo: Assets.GUVI,
		name: 'Guvi - Hiring Module',
		period: {
			from: new Date(2019, 1, 1), to: new Date(2019, 5,1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs', 'ts', 'mysql'),
		type: 'Backend Development',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.GuviScreeshot1
			},
			{
				label: '2',
				src: Assets.GuviScreeshot2
			},
			{
				label: '3',
				src: Assets.GuviScreeshot3
			},
		]
	},
	{
		slug: 'gitCraft',
		color: '#ff3e00',
		description:
			`Technical Description: \n
Developed a full-stack web application using Node.js and Express for the backend, Angular for the frontend, and MongoDB for the database. The platform includes JWT token-based authorization, image file uploads, and a comprehensive testing suite with PlayWright. The application is hosted on Render and Netlify, with CI/CD managed through Netlify. API documentation is provided via Swagger. \n

\n Detailed Brief Description: \n
1. This platform is built with a robust technical stack designed to facilitate user interaction and content management in the crafting community. The backend, developed in Node.js with Express, handles the core functionality, including user authentication using JWT tokens for secure authorization. MongoDB serves as the database, efficiently managing user data, posts, and private collections.

2. On the frontend, Angular is used to create a dynamic and responsive user interface, allowing users to seamlessly navigate between the community feed, profile pages, and private repositories. A key feature is the ability for users to upload images via File Upload middleware when creating new posts, which are then stored and displayed in the community feed or their private collections. Each post is editable, and users can fork existing posts, saving them into their private repository for further customization.

3. The application is hosted with Render for the backend and Netlify for the frontend, ensuring reliable deployment and hosting. CI/CD pipelines are configured using Netlify to automate the build and deployment process. The platform also incorporates PlayWright for end-to-end testing, ensuring a stable and bug-free user experience. API documentation is available through Swagger, providing clear guidelines for integrating and extending the application’s capabilities.`,
		shortDescription:
			'Developed a web-based platform with user authentication, enabling a dynamic community feed for sharing and forking multimedia crafting posts, along with private repositories for personalized post management.',
		links: [{ to: 'https://merry-khapse-6dd1d8.netlify.app', label: 'gitCraft' }, { to: 'https://github.com/cwru-courses/summer2024_csds393_group2', label: 'github' },],
		logo: Assets.Unknown,
		name: 'gitCraft',
		period: {
			from: new Date(2024, 5, 1), to: new Date(2024, 7 ,1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs'),
		type: 'fullstack Development',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.gitCraftScreenshot4
			},
			{
				label: '2',
				src: Assets.gitCraftScreenshot2
			},
			{
				label: '3',
				src: Assets.gitCraftScreenshot3
			},
		]
	},
	{
		slug: 'foox',
		color: '#ff3e00',
		description:
			`Technical Description: \n
Developed a full-stack web application using Node.js and Express for the backend, Angular for the frontend, and MongoDB for the database. The platform includes JWT token-based authorization, image file uploads, and a comprehensive testing suite with PlayWright. The application is hosted on Render and Netlify, with CI/CD managed through Netlify. API documentation is provided via Swagger. \n

\n Detailed Brief Description: \n
1. This platform is built with a robust technical stack designed to facilitate user interaction and content management in the crafting community. The backend, developed in Node.js with Express, handles the core functionality, including user authentication using JWT tokens for secure authorization. MongoDB serves as the database, efficiently managing user data, posts, and private collections.

2. On the frontend, Angular is used to create a dynamic and responsive user interface, allowing users to seamlessly navigate between the community feed, profile pages, and private repositories. A key feature is the ability for users to upload images via File Upload middleware when creating new posts, which are then stored and displayed in the community feed or their private collections. Each post is editable, and users can fork existing posts, saving them into their private repository for further customization.

3. The application is hosted with Render for the backend and Netlify for the frontend, ensuring reliable deployment and hosting. CI/CD pipelines are configured using Netlify to automate the build and deployment process. The platform also incorporates PlayWright for end-to-end testing, ensuring a stable and bug-free user experience. API documentation is available through Swagger, providing clear guidelines for integrating and extending the application’s capabilities.`,
		shortDescription:
			'Developed a web-based platform with user authentication, enabling a dynamic community feed for sharing and forking multimedia crafting posts, along with private repositories for personalized post management.',
		links: [{ to: 'https://merry-khapse-6dd1d8.netlify.app', label: 'gitCraft' }, { to: 'https://github.com/cwru-courses/summer2024_csds393_group2', label: 'github' },],
		logo: Assets.FooxTechnologies,
		name: 'foox',
		period: {
			from: new Date(2024, 5, 1), to: new Date(2024, 7 ,1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs'),
		type: 'fullstack Development',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.gitCraftScreenshot1
			},
			{
				label: '2',
				src: Assets.gitCraftScreenshot2
			},
			{
				label: '3',
				src: Assets.gitCraftScreenshot3
			},
		]
	},
	
];

export const title = 'Projects';
