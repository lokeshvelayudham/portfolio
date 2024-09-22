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
				src: Assets.AlterCabsScreenshot4
			},
			{
				label: '5',
				src: Assets.AlterCabsScreenshot5
			},
			
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
			'An end to end managament tool for intersection event by undergraduate research office',
		links: [{ to: 'https://github.com/lokeshvelayudham/intersection', label: 'GitHub' }],
		logo: Assets.CWRU,
		name: 'Intersection',
		period: {
			from: new Date(2024, 1, 1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs', 'ts', 'mysql'),
		type: 'Progressive Web Application',
		screenshots: [
			{
				label: '1',
				src: Assets.IntersectionScreenshot1,
			},
			{
				label: '2',
				src: Assets.IntersectionScreenshot2,
			},
			// {
			// 	label: '3',
			// 	src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '4',
			// 	src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '5',
			// 	src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// },
			// {
			// 	label: '6',
			// 	src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			// }
		]
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
		logo: Assets.gitCraft,
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
				src: Assets.gitCraftScreenshot1
			},
			
		]
	},
	{
		slug: 'foox',
		color: '#ff3e00',
		description:
			`Technical Description: \n
Developed a B2B HoReCa supply chain platform using the MERN stack, with integrated Firebase and GoLang microservices to enhance search efficiency.

\n Detailed Brief Description: \n
Co-founded Foox Technologies, a B2B HoReCa supply chain platform, serving 50+ clients. 
1. The application, built using the MERN stack, streamlined procurement, storage, and delivery processes. 
2. By incorporating Firebase and GoLang microservices, the platform improved search functionality by 30%. 
3. Foox Technologies secured ₹4.5M in funding and generated ₹0.75 crore in revenue within 6 months.`,
		shortDescription:
			'Co-founded and developed a B2B HoReCa platform using the MERN stack, improving search efficiency by 30% and generating ₹0.75 crore revenue in 6 months.',
		links: [{ to: 'https://www.instagram.com/foox.in?igsh=dnl5c3l2dTNveGo=', label: 'foox' }, { to: 'https://github.com/lokeshvelayudham', label: 'github' },],
		logo: Assets.FooxTechnologies,
		name: 'foox',
		period: {
			from: new Date(2021, 5, 1), to: new Date(2022, 9 ,1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs'),
		type: 'fullstack Development',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.FooxTechnologiesScreenshot1
			},
			{
				label: '2',
				src: Assets.FooxTechnologiesScreenshot2
			}
		]
	},
	{
		slug: 'go-kart',
		color: '#ff3e00',
		description:
			`	1. Turbo Knights is a Chennai-based go-kart focused on designing and producing high-performance, safe, and reliable go-karts for racing and recreational use. 
				2. Drawing inspiration from Formula One, the team employs innovative and practical design techniques.
				3. The go-karts are engineered for durability, safety, and performance, making them suitable for both enthusiasts and professionals.`,
		shortDescription:
			'Building high-performance go-karts inspired by Formula One as part of the Turbo Knights team, racing across India.',
		links: [{ to: 'https://www.instagram.com/turbo_knights_official/', label: 'turboKnights' }],
		logo: Assets.TurboKnights,
		name: 'Turbo Knights',
		period: {
			from: new Date(2015, 5, 1), to: new Date(2017, 7 ,1)
		},
		skills: getSkills('solidworks'),
		type: 'Manufacturing Design',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.TurboKnightsScreenshot1
			},
			{
				label: '2',
				src: Assets.TurboKnightsScreenshot2
			},
			
		]
	},
	{
		slug: 'gUSD',
		color: '#ff3e00',
		description:
			`1. gUSD is a decentralized, trustless stablecoin backed by synthetic gold, allowing users to lock any token (ETH, BTC, or stablecoins) as collateral, which is then converted into gold pricing. \n
	2. This provides users a stable, low-volatility asset with daily fluctuations less than 0.5%, enabling safe leverage up to 50x at a 102% collateral-to-loan ratio. \n
	3. Users can mint or burn gUSD based on their actions, ensuring transparency and decentralization while avoiding centralized gold-backed tokens.`,
		shortDescription:
			'Mint gUSD, a decentralized stablecoin backed by synthetic gold, allowing users to safely hedge against volatility and leverage up to 50x with minimal risk.',
		links: [{ to: 'https://spiced-drawbridge-1d9.notion.site/gUSD-Litepaper-fbdda3ec043e4c4ebb0c17fc26878ef9', label: 'gUSD White paper' }],
		logo: Assets.gUSD,
		name: 'gUSD',
		period: {
			from: new Date(2018, 5, 1), to: new Date(2019, 7 ,1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs', 'solidity'),
		type: 'Web3 Full stack Development',
		screenshots: [
			// {
			// 	label: 'screen 1',
			// 	src: Assets.gitCraftScreenshot1
			// },
			// {
			// 	label: '2',
			// 	src: Assets.gitCraftScreenshot2
			// },
			// {
			// 	label: '3',
			// 	src: Assets.gitCraftScreenshot3
			// },
		]
	},
	{
		slug: 'Halo Harbour',
		color: '#ff3e00',
		description:
			`Technical Description: \n
Halo Harbor is a decentralized application built with Java, React, Python, and Hyperledger, leveraging federated learning for secure, privacy-focused data management. The system includes:

	•	Database: Stores user’s raw data securely.
	•	Dataplug: Connects to various services to pull user data.
	•	User Controller: Processes data while adhering to user privacy settings.
	•	ACA-py Agent: Ensures secure, decentralized communication between users and service providers.
AWS Nitro Enclaves provide isolated execution environments for secure data computation, enhancing privacy and control.`,
		shortDescription:
			'Halo Harbor is a decentralized application that empowers users with control over their data privacy and usage, utilizing a secure vault for data management.',
		links: [{ to: 'https://haloharbor.io/', label: 'haloHarbour' }, { to: 'https://github.com/cwru-xlab/Consolidated_Progressive', label: 'github' },],
		logo: Assets.HaloHarbour,
		name: 'Halo Harbour',
		period: {
			from: new Date(2024, 7, 1)
		},
		skills: getSkills('mongodb', 'js', 'postgresql' , 'reactjs' , 'java', 'aws' , 'python' ,'docker'),
		type: 'Decentralized Development',
		screenshots: [
			{
				label: ' 1',
				src: Assets.HaloHarbourScreenshot1
			},
			{
				label: '2',
				src: Assets.HaloHarbourScreenshot2
			},
			{
				label: '3',
				src: Assets.HaloHarbourScreenshot3
			},
		]
	},
	{
		slug: 'pct',
		color: '#ff3e00',
		description:
			`Technical Description: \n
	•	Smart Contracts: Developed with Solidity to handle trade copying logic and user interactions on-chain.
	•	Blockchain Integration: Utilizes Ethers.js/Web3.js for interaction with Ethereum and other blockchains.
	•	Backend: Built with Node.js for managing trade execution and liquidator jobs.
	•	Frontend: Developed using React for a user-friendly interface.
	•	Trade Management: Implements liquidator jobs to manage and execute trades based on whale transactions.
	•	Volume Target: Aims to capture 1% of the daily $500M trading volume on DEXs like GMX and DYDX.`,
		shortDescription:
			'A service that allows users to copy trades from top whales across various DEXs and CEX futures, leveraging smart contracts and decentralized technology.',
		links: [{ to: 'https://github.com/lokeshvelayudham/PerpCopyTrading', label: 'github' },],
		logo: Assets.PerpCopyTrading,
		name: 'Perpetual Copy Trading',
		period: {
			from: new Date(2022, 0, 1), to: new Date(2022, 10 ,1)
		},
		skills: getSkills('mongodb', 'js', 'nodejs', 'expressjs', 'reactjs', 'solidity'),
		type: 'Web3 Full stack Development',
		screenshots: [
			
		]
	},
	{
		slug: 'portfolo',
		color: '#ff3e00',
		description:
			`Technical Description: \n
	• 	Frameworks: Developed using Svelte and SvelteKit for a reactive and modern web experience.
	•	Styling: Utilizes UnoCSS for efficient and scalable styling.
	•	Content Management: Incorporates Markdown for easy content management and updates.
	•	TypeScript: Implemented for type safety and improved developer experience.
	•	Deployment: Automated using GitHub Actions for seamless deployment and continuous integration.
`,
		shortDescription:
			'A personal portfolio website built with Svelte and SvelteKit, showcasing projects, skills, and experience.',
		links: [{ to: 'https://lokeshvelayudham.github.io/portfolio/', label: 'lokesh Velayudham' }, { to: 'https://github.com/lokeshvelayudham/portfolio', label: 'github' },],
		logo: Assets.Portfolio,
		name: 'Portfolio Website',
		period: {
			from: new Date(2024, 8, 10), to: new Date(2024, 8 ,15)
		},
		skills: getSkills('svelte', 'js', 'ts', 'html', 'sass'),
		type: 'frontend Development',
		screenshots: [
			{
				label: 'screen 1',
				src: Assets.PortfolioScreenshot1
			},
			{
				label: '2',
				src: Assets.PortfolioScreenshot2
			},
			{
				label: '3',
				src: Assets.PortfolioScreenshot3
			},
		]
	},
	
];

export const title = 'Projects';
