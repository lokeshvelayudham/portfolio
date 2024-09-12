import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import python from '../md/python.md?raw';
import js from '../md/js.md?raw';
import ts from '../md/ts.md?raw';
import tailwiind from '../md/tailwind.md?raw';
import reactjs from '../md/reactjs.md?raw';
import nodejs from '../md/nodejs.md?raw';
import expressjs from '../md/expressjs.md?raw';
import mongodb from '../md/mongodb.md?raw';
import postgresql from '../md/postgresql.md?raw';
import redis from '../md/redis.md?raw';
import docker from '../md/docker.md?raw';
import fastapi from '../md/fastapi.md?raw';
import django from '../md/django.md?raw';
import aws from '../md/aws.md?raw';
import flask from '../md/flask.md?raw';
import vite from '../md/vite.md?raw';
import pandas from '../md/pandas.md?raw';
import numpy from '../md/numpy.md?raw';
import firebase from '../md/firebase.md?raw';
import solidworks from '../md/solidwroks.md?raw';
import mysql from '../md/mysql.md?raw';
import go from '../md/go.md?raw';
import android from '../md/android.md?raw';
import tensorflow from '../md/tensorflow.md?raw';
import php from '../md/php.md?raw';









import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Environments & Runtime', slug: 'env' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:js,
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:ts,
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Level of Eexpertise : 7/10',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Level of Eexpertise : 8/10',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'sass',
		color: 'pink',
		description:
			'Level of Eexpertise : 6/10',
		logo: Assets.Sass,
		name: 'Sass',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:reactjs,
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description:svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'python',
		color: 'orange',
		description: python,
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'orange',
		description: nodejs,
		logo: Assets.NodeJs,
		name: 'Node Js',
		category: 'env'
	}),
	defineSkill({
		slug: 'expressjs',
		color: 'orange',
		description: expressjs,
		logo: Assets.ExpressJs,
		name: 'Express Js',
		category: 'framework'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'orange',
		description: mongodb,
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'orange',
		description: postgresql,
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'orange',
		description: redis,
		logo: Assets.Redis,
		name: 'Redis',
		category: 'db'
	}),
	defineSkill({
		slug: 'docker',
		color: 'orange',
		description: docker,
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	// defineSkill({
	// 	slug: 'kubernetes',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Kubernetes,
	// 	name: 'Kubernetes',
	// 	category: 'devops'
	// }),
	defineSkill({
		slug: 'aws',
		color: 'orange',
		description: aws,
		logo: Assets.AWS,
		name: 'AWS',
		category: 'devops'
	}),
	defineSkill({
		slug: 'fastapi',
		color: 'orange',
		description: fastapi,
		logo: Assets.FastApi,
		name: 'Fast Api',
		category: 'framework'
	}),
	defineSkill({
		slug: 'django',
		color: 'orange',
		description: django,
		logo: Assets.Django,
		name: 'Django',
		category: 'framework'
	}),
	defineSkill({
		slug: 'flask',
		color: 'orange',
		description: flask,
		logo: Assets.Flask,
		name: 'Flask',
		category: 'framework'
	}),
	defineSkill({
		slug: 'vite',
		color: 'orange',
		description: vite,
		logo: Assets.Vite,
		name: 'Vite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'orange',
		description: tailwiind,
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'orange',
		description: 'Level of Eexpertise : 8/10',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'pandas',
		color: 'orange',
		description: pandas,
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'numpy',
		color: 'orange',
		description: numpy,
		logo: Assets.Numpy,
		name: 'Numpy',
		category: 'library'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description: firebase,
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	}),
	defineSkill({
		slug: 'solidworks',
		color: 'orange',
		description: solidworks,
		logo: Assets.SolidWorks,
		name: 'SolidWorks',
		category: 'design'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'orange',
		description: mysql,
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'go',
		color: 'orange',
		description: go,
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'android',
		color: 'orange',
		description:android,
		logo: Assets.Android,
		name: 'Android',
		category: 'env'
	}),
	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description: tensorflow,
		logo: Assets.Tensorflow,
		name: 'Tensorflow',
		category: 'library'
	}),
	defineSkill({
		slug: 'php',
		color: 'orange',
		description: php,
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	
	
	
	
	
	
	
	
	
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
