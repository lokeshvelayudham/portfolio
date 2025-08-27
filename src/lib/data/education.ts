import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master of Science in Computer and Data Science',
		description: '',
		location: 'Cleveland, Ohio',
		logo: Assets.CWRU,
		name: '',
		organization: 'Case Western Reserve University',
		period: { from: new Date(2023, 8, 26), to: new Date(2025, 5, 1) },
		shortDescription: '',
		slug: 'ms-computer-data-science',
		subjects: [ 'LLM', 'Machine Learning', 'Algorithms and Data structures', 'Computer security', 'High Performance Computing',  'Database Systems',  'Web Development', 'Software Engineering',  'Artificial Intelligence', 'Deep Learning']
	},
	{
		degree: 'Bachelor of Engineering',
		description: '',
		location: 'Chennai, TN',
		logo: Assets.Anna,
		name: '',
		organization: 'Anna University',
		period: { from: new Date(2014, 8, 1), to: new Date(2018, 8, 1) },
		shortDescription: '',
		slug: 'bachelor-engineering',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English', 'Calculus', 'Electronics', 'Digital Logic']
	}

];

export const title = 'Education';
