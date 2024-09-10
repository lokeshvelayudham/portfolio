import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Master of Science in Computer Science and Data Science',
		description: '',
		location: 'USA',
		logo: Assets.CWRU,
		name: '',
		organization: 'Case Western Reserve University',
		period: { from: new Date(2023, 8, 26), to: new Date(2025, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [ 'LLM', 'Machine Learning', 'Algorithms and Data structures', 'Computer security', 'High Performance Computing',  'Database Systems',  'Web Development', 'Software Engineering',  'Artificial Intelligence', 'Deep Learning']
	},
	{
		degree: 'Bachelor of Engineering in Electronics and Communication',
		description: '',
		location: 'India',
		logo: Assets.Anna,
		name: '',
		organization: 'Anna University',
		period: { from: new Date(2014, 8, 1), to: new Date(2018, 8, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English', 'Calculus', 'Electronics', 'Digital Logic']
	}

];

export const title = 'Education';
