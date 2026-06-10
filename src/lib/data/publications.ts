import Assets from './assets';
import type { Item, Link } from '$lib/types';

export const title = 'Publications';

export const scholarProfile = {
	label: 'Google Scholar',
	to: 'https://scholar.google.com/citations?user=QgPOELsAAAAJ&hl=en'
} satisfies Link;

export const publications = [
	{
		slug: 'stain-free-histology-fluorescence-staining-ai',
		title:
			'Stain-Free Histology and Fluorescence Staining of Microscopy Images Using Artificial Intelligence',
		venue: 'Cytotherapy',
		year: '2026',
		role: 'First author',
		team: 'BioInVision with collaborators at Case Western Reserve University',
		summary:
			'AI-based virtual staining work focused on reducing repeated chemical staining pressure, preserving scarce tissue sections, and making microscopy data more scalable for translational research.',
		tags: ['AI', 'Microscopy', 'Digital Pathology', 'Cancer Research', 'Biomedical Imaging'],
		links: [
			{ label: 'DOI', to: 'https://doi.org/10.1016/j.jcyt.2026.102158' },
			{
				label: 'ScienceDirect',
				to: 'https://www.sciencedirect.com/science/article/abs/pii/S1465324926001192'
			}
		] satisfies Array<Link>
	}
] as const;

export const grants = [
	{
		slug: 'nih-sbir-phase-ii-r44-gm145205-02',
		title: 'NIH SBIR Phase II Grant',
		identifier: 'R44 GM145205-02',
		sponsor: 'National Institutes of Health',
		mechanism: 'Small Business Innovation Research (SBIR), Phase II',
		summary:
			'Grant signal for NIH-supported translational R&D connected to commercialization-focused biomedical innovation.',
		links: [
			{
				label: 'NIH R44 mechanism',
				to: 'https://grants.nih.gov/funding/activity-codes/R44'
			}
		] satisfies Array<Link>
	}
] as const;

export const searchItems: Array<Item> = [
	...publications.map((publication) => ({
		slug: publication.slug,
		name: publication.title,
		logo: Assets.BioInVision,
		shortDescription: `${publication.role} publication in ${publication.venue}.`,
		description: [
			publication.summary,
			publication.team,
			publication.year,
			publication.tags.join(' ')
		].join(' ')
	})),
	...grants.map((grant) => ({
		slug: grant.slug,
		name: `${grant.title} ${grant.identifier}`,
		logo: Assets.BioInVision,
		shortDescription: `${grant.mechanism} award.`,
		description: [grant.summary, grant.sponsor, grant.identifier, grant.mechanism].join(' ')
	}))
];
