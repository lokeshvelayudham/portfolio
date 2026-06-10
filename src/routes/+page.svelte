<script lang="ts">
	import { base } from '$app/paths';
	import { titleSuffix } from '@data/app';
	import { description, lastName, name } from '@data/home';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { useTitle } from '$lib/utils/helpers';

	type IconName = `i-${string}-${string}`;
	type TrackName = 'Research' | 'Builder';
	type CompareImageId = 'input' | 'ai' | 'gt';

	const fullName = `${name} ${lastName}`;
	const resumeHref = `${base}/PoluruVelayudham_Lokesh_Resume.pdf`;

	let stainReveal = 50;
	let activeTrack: TrackName = 'Research';
	let activeSystemName = 'StainViz';
	let activePairId = 'input-ai';
	let compareStage: HTMLDivElement;
	let isCompareDragging = false;

	const actions: Array<{ label: string; href: string; icon: IconName; kind?: 'primary' }> = [
		{
			label: 'Publication',
			href: `${base}/publications`,
			icon: 'i-carbon-document',
			kind: 'primary'
		},
		{
			label: 'Resume',
			href: resumeHref,
			icon: 'i-carbon-result'
		}
	];

	const compareImages: Array<{
		id: CompareImageId;
		label: string;
		shortLabel: string;
		src: string;
		accent: string;
	}> = [
		{
			id: 'input',
			label: 'Brightfield input',
			shortLabel: 'Brightfield',
			src: `${base}/screenshots/stainviz-bf.webp`,
			accent: '#e7b84b'
		},
		{
			id: 'ai',
			label: 'AI inferred H&E',
			shortLabel: 'AI H&E',
			src: `${base}/screenshots/stainviz-ai-he.webp`,
			accent: '#52a8ff'
		},
		{
			id: 'gt',
			label: 'Ground truth H&E',
			shortLabel: 'Ground truth',
			src: `${base}/screenshots/stainviz-ground-truth-he.webp`,
			accent: '#ef6f9a'
		}
	];

	const comparePairs: Array<{
		id: string;
		label: string;
		left: CompareImageId;
		right: CompareImageId;
	}> = [
		{
			id: 'input-ai',
			label: 'Input vs AI',
			left: 'input',
			right: 'ai'
		},
		{
			id: 'ai-gt',
			label: 'AI vs Truth',
			left: 'ai',
			right: 'gt'
		},
		{
			id: 'input-gt',
			label: 'Input vs Truth',
			left: 'input',
			right: 'gt'
		}
	];

	const tracks: Array<{
		eyebrow: TrackName;
		title: string;
		accent: string;
		body: string;
		items: Array<string>;
	}> = [
		{
			eyebrow: 'Research',
			title: 'AI systems for biomedical imaging',
			accent: '#0f766e',
			body: 'I build inference pipelines and imaging tools for stain-free histology, cardiac CT perfusion, and 3D microscopy review.',
			items: [
				'StainViz virtual staining for histology and fluorescence microscopy',
				'IschemiaViz clinical-grade CCTP imaging submitted under FDA-aligned QMS processes',
				'CryoViz Web for microscopic-resolution, mouse-sized specimen exploration'
			]
		},
		{
			eyebrow: 'Builder',
			title: 'Autonomous products with production discipline',
			accent: '#cf4f32',
			body: 'I ship full-stack systems where product behavior, telemetry, and infrastructure are designed together from the start.',
			items: [
				'Stratum Labs autonomous CRM and revenue-agent operating layer',
				'AI-assisted event matching for 1,500 students and 250 judges',
				'B2B SaaS, mobility, and enterprise workflow platforms used by real operators'
			]
		}
	];

	const systems: Array<{
		name: string;
		category: TrackName;
		type: string;
		text: string;
		detail: string;
		metric: string;
		metricLabel: string;
		points: Array<string>;
		href: string;
		accent: string;
		icon: IconName;
	}> = [
		{
			name: 'StainViz',
			category: 'Research',
			type: 'AI virtual staining',
			text: 'Stain-free histology and fluorescence microscopy workflows.',
			detail:
				'Transforms scarce tissue-section microscopy inputs into stain-like histology views with production-grade inference optimizations.',
			metric: '40%',
			metricLabel: 'latency reduction',
			points: [
				'First-author Cytotherapy publication',
				'FP16 inference, batching, and memory tuning',
				'Designed for scarce tissue and translational research workflows'
			],
			href: `${base}/projects/stainviz`,
			accent: '#0f766e',
			icon: 'i-carbon-microscope'
		},
		{
			name: 'CryoViz Web',
			category: 'Research',
			type: '3D microscopy platform',
			text: 'Web-based volumetric review for large cryo datasets.',
			detail:
				'Streams large specimen datasets into interactive web review with volumetric rendering, annotation, and sub-second slice retrieval.',
			metric: '800MB+',
			metricLabel: 'datasets streamed',
			points: [
				'React, Next.js, WebGL, and vtk.js viewer',
				'Chunked cloud streaming from imaging storage',
				'Annotation workflows for microscopy review'
			],
			href: `${base}/projects/cryo-viz-web`,
			accent: '#b8860b',
			icon: 'i-carbon-cube-view'
		},
		{
			name: 'Stratum Labs',
			category: 'Builder',
			type: 'Autonomous CRM',
			text: 'Revenue agents, telemetry, lead scoring, and ROI controls.',
			detail:
				'An autonomous CRM and enterprise operating layer for deploying GTM agents, tracking telemetry, and reallocating capital by performance.',
			metric: 'ROI',
			metricLabel: 'agent operating loop',
			points: [
				'Autonomous agents with budgets and quotas',
				'Lead scoring, memory, inbox classification, and attribution',
				'Ruthless termination and force-optimization loops'
			],
			href: 'https://www.stratumlabs.app/',
			accent: '#cf4f32',
			icon: 'i-carbon-network-4'
		},
		{
			name: 'Intersection',
			category: 'Builder',
			type: 'AI event platform',
			text: 'Judge-student matching and event-day coordination.',
			detail:
				'AI-assisted operations platform that matched 1,500 students with 250 judges and compressed setup from days to minutes.',
			metric: '1,500',
			metricLabel: 'students matched',
			points: [
				'MERN platform deployed for CWRU research events',
				'ML-based match scoring and admin workflows',
				'Real-time status tracking and notifications'
			],
			href: `${base}/projects/intersection`,
			accent: '#8a4f84',
			icon: 'i-carbon-events'
		}
	];

	const setReveal = (value: number) => {
		stainReveal = Math.min(80, Math.max(20, value));
	};

	const handleRevealInput = (event: Event) => {
		setReveal(Number((event.currentTarget as HTMLInputElement).value));
	};

	const updateRevealFromClientX = (clientX: number) => {
		if (!compareStage) return;

		const rect = compareStage.getBoundingClientRect();
		const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);

		setReveal((x / rect.width) * 100);
	};

	const handleComparePointerDown = (event: PointerEvent) => {
		isCompareDragging = true;
		(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
		updateRevealFromClientX(event.clientX);
	};

	const handleComparePointerMove = (event: PointerEvent) => {
		if (!isCompareDragging) return;
		updateRevealFromClientX(event.clientX);
	};

	const handleComparePointerUp = (event: PointerEvent) => {
		isCompareDragging = false;
		(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId);
	};

	const selectPair = (pairId: string) => {
		activePairId = pairId;
		stainReveal = 50;
	};

	const selectTrack = (trackName: TrackName) => {
		activeTrack = trackName;
		activeSystemName =
			systems.find((system) => system.category === trackName)?.name ?? activeSystemName;
	};

	$: activePair = comparePairs.find((pair) => pair.id === activePairId) ?? comparePairs[0];
	$: leftCompareImage =
		compareImages.find((image) => image.id === activePair.left) ?? compareImages[0];
	$: rightCompareImage =
		compareImages.find((image) => image.id === activePair.right) ?? compareImages[1];
	$: currentTrack = tracks.find((track) => track.eyebrow === activeTrack) ?? tracks[0];
	$: filteredSystems = systems.filter((system) => system.category === activeTrack);
	$: if (
		filteredSystems.length &&
		!filteredSystems.some((system) => system.name === activeSystemName)
	) {
		activeSystemName = filteredSystems[0].name;
	}
	$: activeSystem =
		systems.find((system) => system.name === activeSystemName) ?? filteredSystems[0] ?? systems[0];
</script>

<svelte:head>
	<title>{useTitle('Home', titleSuffix)}</title>
</svelte:head>

<main class="portfolio-page">
	<section class="hero-shell" aria-labelledby="portfolio-title">
		<div class="hero-copy">
			<div class="mode-toggle" aria-label="Choose portfolio focus">
				{#each tracks as track}
					<button
						type="button"
						class:active={activeTrack === track.eyebrow}
						style={`--accent: ${track.accent};`}
						aria-pressed={activeTrack === track.eyebrow}
						on:click={() => selectTrack(track.eyebrow)}
					>
						{track.eyebrow}
					</button>
				{/each}
			</div>

			<p class="eyebrow">Researcher / Builder</p>
			<h1 id="portfolio-title">{fullName}</h1>
			<p class="lede">{description}</p>

			<div class="action-row" aria-label="Primary links">
				{#each actions as action}
					<a class:primary={action.kind === 'primary'} class="action-link" href={action.href}>
						<UIcon icon={action.icon} classes="action-icon" />
						<span>{action.label}</span>
					</a>
				{/each}
			</div>
		</div>

		<figure class="hero-visual" style={`--reveal: ${stainReveal}%;`}>
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="compare-stage"
				bind:this={compareStage}
				on:pointerdown={handleComparePointerDown}
				on:pointermove={handleComparePointerMove}
				on:pointerup={handleComparePointerUp}
				on:pointercancel={handleComparePointerUp}
				on:pointerleave={() => (isCompareDragging = false)}
			>
				<img
					class="compare-image compare-image-base"
					src={rightCompareImage.src}
					alt={rightCompareImage.label}
					loading="eager"
					decoding="async"
				/>
				<img
					class="compare-image compare-image-overlay"
					src={leftCompareImage.src}
					alt={leftCompareImage.label}
					loading="eager"
					decoding="async"
				/>
				<div class="reveal-line" aria-hidden="true">
					<span>
						<UIcon icon="i-carbon-arrows-horizontal" />
					</span>
				</div>
			</div>

			<div class="comparison-control">
				<label for="stain-reveal">
					<span>Split</span>
					<strong>{Math.round(stainReveal)}% {leftCompareImage.shortLabel}</strong>
				</label>
				<div class="range-row">
					<input
						id="stain-reveal"
						type="range"
						min="20"
						max="80"
						step="1"
						value={stainReveal}
						aria-label={`${leftCompareImage.label} reveal percentage`}
						on:input={handleRevealInput}
					/>
				</div>
				<div class="pair-selector" aria-label="Choose StainViz comparison pair">
					{#each comparePairs as pair}
						<button
							type="button"
							class:active={activePairId === pair.id}
							aria-pressed={activePairId === pair.id}
							on:click={() => selectPair(pair.id)}
						>
							{pair.label}
						</button>
					{/each}
				</div>
			</div>
		</figure>
	</section>

	<section class="work-shell" id="work" aria-labelledby="systems-title">
		<div class="section-header">
			<div>
				<p class="eyebrow">Selected systems</p>
				<h2 id="systems-title">{currentTrack.title}</h2>
			</div>
			<a class="quiet-link" href={`${base}/projects`}>
				<span>Projects</span>
				<UIcon icon="i-carbon-arrow-right" />
			</a>
		</div>

		<div class="work-grid">
			<div class="system-list" aria-label={`${activeTrack} systems`}>
				{#each filteredSystems as item}
					<button
						type="button"
						class:active={activeSystemName === item.name}
						style={`--accent: ${item.accent};`}
						aria-pressed={activeSystemName === item.name}
						on:click={() => (activeSystemName = item.name)}
					>
						<span class="work-type">{item.type}</span>
						<span class="work-title">
							<UIcon icon={item.icon} />
							<strong>{item.name}</strong>
						</span>
						<span>{item.text}</span>
					</button>
				{/each}
			</div>

			<article class="system-detail" style={`--accent: ${activeSystem.accent};`}>
				<div class="detail-topline">
					<span>{activeSystem.category}</span>
					<strong>{activeSystem.metric}</strong>
				</div>
				<div class="detail-head">
					<span class="detail-icon">
						<UIcon icon={activeSystem.icon} />
					</span>
					<div>
						<h3>{activeSystem.name}</h3>
						<p>{activeSystem.metricLabel}</p>
					</div>
				</div>
				<p class="detail-copy">{activeSystem.detail}</p>
				<ul>
					{#each activeSystem.points as point}
						<li>
							<span class="marker" aria-hidden="true" />
							<span>{point}</span>
						</li>
					{/each}
				</ul>
				<a href={activeSystem.href} target="_blank" rel="noreferrer">
					Open {activeSystem.category === 'Builder' && activeSystem.name === 'Stratum Labs'
						? 'product'
						: 'project'}
					<UIcon icon="i-carbon-launch" />
				</a>
			</article>
		</div>
	</section>

	<section class="research-strip" id="publication" aria-label="Publication and funding">
		<a class="research-item" href={`${base}/publications`}>
			<strong>First-author Cytotherapy publication</strong>
			<small>Stain-free histology and fluorescence staining with AI</small>
		</a>
		<a class="research-item" href={`${base}/publications#nih-sbir-phase-ii-r44-gm145205-02`}>
			<strong>NIH SBIR Phase II</strong>
			<small>R44 GM145205-02</small>
		</a>
	</section>
</main>

<style lang="scss">
	.portfolio-page {
		--paper: #f7f8f5;
		--panel: #ffffff;
		--ink: #141414;
		--muted: #626865;
		--line: rgba(20, 20, 20, 0.12);
		--copy: #303433;
		--hover-line: rgba(20, 20, 20, 0.38);
		--primary-surface: #101010;
		--primary-text: #ffffff;
		--stage: #050505;
		--control-surface: #111111;
		--control-text: #ffffff;
		--control-muted: rgba(255, 255, 255, 0.7);
		--control-line: rgba(255, 255, 255, 0.1);
		--selector-surface: rgba(255, 255, 255, 0.07);
		--selector-line: rgba(255, 255, 255, 0.13);
		--selector-text: rgba(255, 255, 255, 0.72);
		--handle-text: #111111;
		--icon-mix: #ffffff;
		--teal: #0f766e;
		--orange: #cf4f32;
		--gold: #b8860b;

		background: var(--paper);
		box-sizing: border-box;
		color: var(--ink);
		letter-spacing: 0;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
		min-height: calc(100vh - 50px);
		overflow: hidden;
		padding: 38px 24px 56px;
		width: 100vw;
	}

	:global(:root[data-theme='dark']) .portfolio-page {
		--paper: #0b0d0c;
		--panel: #111412;
		--ink: #f5f7f4;
		--muted: #a7b0aa;
		--line: rgba(245, 247, 244, 0.16);
		--copy: #d7ddd8;
		--hover-line: rgba(245, 247, 244, 0.38);
		--primary-surface: #f5f7f4;
		--primary-text: #101211;
		--stage: #020303;
		--control-surface: #050606;
		--control-text: #f5f7f4;
		--control-muted: rgba(245, 247, 244, 0.68);
		--control-line: rgba(245, 247, 244, 0.12);
		--selector-surface: rgba(245, 247, 244, 0.08);
		--selector-line: rgba(245, 247, 244, 0.14);
		--selector-text: rgba(245, 247, 244, 0.74);
		--icon-mix: #111412;
	}

	.hero-shell,
	.work-shell,
	.research-strip {
		box-sizing: border-box;
		margin-left: auto;
		margin-right: auto;
		max-width: 1180px;
	}

	.hero-shell {
		align-items: center;
		display: grid;
		gap: 34px;
		grid-template-columns: minmax(0, 0.92fr) minmax(440px, 1.08fr);
	}

	.hero-copy,
	.work-shell,
	.system-detail {
		display: flex;
		flex-direction: column;
	}

	.hero-copy {
		gap: 17px;
		min-width: 0;
	}

	h1,
	h2,
	h3,
	p {
		letter-spacing: 0;
		margin: 0;
	}

	button,
	input {
		font: inherit;
	}

	button {
		letter-spacing: 0;
	}

	.eyebrow,
	.work-type {
		color: var(--teal);
		font-size: 0.72rem;
		font-weight: 900;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	h1 {
		font-size: 4.1rem;
		font-weight: 950;
		line-height: 0.92;
		max-width: 760px;
	}

	h2 {
		font-size: 2rem;
		font-weight: 900;
		line-height: 1.05;
	}

	h3 {
		font-size: 1.4rem;
		line-height: 1.12;
	}

	.lede {
		color: var(--copy);
		font-size: 1.05rem;
		line-height: 1.62;
		max-width: 700px;
	}

	.mode-toggle {
		background: transparent;
		border: 1px solid var(--line);
		border-radius: 8px;
		display: inline-flex;
		padding: 4px;
		width: max-content;
	}

	.mode-toggle button {
		background: transparent;
		border: 0;
		border-radius: 6px;
		color: var(--muted);
		cursor: pointer;
		font-size: 0.84rem;
		font-weight: 900;
		min-height: 34px;
		padding: 0 13px;
	}

	.mode-toggle button.active {
		background: var(--accent);
		color: #ffffff;
	}

	.action-row {
		display: flex;
		flex-wrap: wrap;
		gap: 9px;
	}

	.action-link,
	.quiet-link,
	.system-detail a {
		align-items: center;
		background: transparent;
		border: 1px solid var(--line);
		border-radius: 8px;
		color: var(--ink);
		display: inline-flex;
		font-size: 0.9rem;
		font-weight: 900;
		gap: 8px;
		justify-content: center;
		min-height: 42px;
		padding: 0 13px;
		text-decoration: none;
		width: max-content;
	}

	.action-link:hover,
	.quiet-link:hover,
	.system-detail a:hover,
	.research-item:hover {
		border-color: var(--hover-line);
	}

	.action-link.primary,
	.system-detail a {
		background: var(--primary-surface);
		border-color: var(--primary-surface);
		color: var(--primary-text);
	}

	:global(.action-icon) {
		font-size: 1.12rem;
	}

	.hero-visual {
		background: var(--stage);
		border: 1px solid var(--stage);
		border-radius: 8px;
		margin: 0;
		overflow: hidden;
	}

	.compare-stage {
		background: var(--stage);
		aspect-ratio: 16 / 9;
		cursor: ew-resize;
		overflow: hidden;
		position: relative;
		touch-action: none;
		user-select: none;
	}

	.compare-image {
		display: block;
		height: 100%;
		inset: 0;
		object-fit: contain;
		pointer-events: none;
		position: absolute;
		width: 100%;
	}

	.compare-image-overlay {
		clip-path: inset(0 calc(100% - var(--reveal)) 0 0);
		transition: none;
		will-change: clip-path;
	}

	.reveal-line {
		background: rgba(255, 255, 255, 0.86);
		bottom: 0;
		left: var(--reveal);
		position: absolute;
		top: 0;
		transform: translateX(-50%);
		transition: none;
		will-change: left;
		width: 2px;
	}

	.reveal-line span {
		align-items: center;
		background: rgba(255, 255, 255, 0.94);
		border: 1px solid rgba(0, 0, 0, 0.18);
		border-radius: 999px;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
		color: var(--handle-text);
		display: inline-flex;
		height: 34px;
		justify-content: center;
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 34px;
	}

	.comparison-control {
		align-items: center;
		background: var(--control-surface);
		border-top: 1px solid var(--control-line);
		display: grid;
		gap: 10px;
		grid-template-columns: 112px minmax(0, 1fr);
		padding: 11px 12px;
	}

	.comparison-control label {
		color: var(--control-muted);
		display: flex;
		flex-direction: column;
		font-size: 0.7rem;
		font-weight: 900;
		gap: 4px;
		text-transform: uppercase;
	}

	.comparison-control strong {
		color: var(--control-text);
		font-size: 0.82rem;
		text-transform: none;
	}

	.range-row {
		align-items: center;
		display: flex;
	}

	.comparison-control input {
		accent-color: #e7b84b;
		cursor: pointer;
		width: 100%;
	}

	.pair-selector {
		display: grid;
		gap: 7px;
		grid-column: 1 / -1;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	.pair-selector button {
		background: var(--selector-surface);
		border: 1px solid var(--selector-line);
		border-radius: 8px;
		color: var(--selector-text);
		cursor: pointer;
		font-size: 0.74rem;
		font-weight: 900;
		min-height: 32px;
		padding: 0 8px;
	}

	.pair-selector button.active,
	.pair-selector button:hover,
	.pair-selector button:focus-visible {
		background: #e7b84b;
		border-color: #e7b84b;
		color: #111111;
		outline: none;
	}

	.work-shell {
		gap: 18px;
		padding-top: 58px;
	}

	.section-header {
		align-items: end;
		display: flex;
		gap: 18px;
		justify-content: space-between;
	}

	.section-header > div {
		display: flex;
		flex-direction: column;
		gap: 8px;
		min-width: 0;
	}

	.work-grid {
		align-items: stretch;
		display: grid;
		gap: 16px;
		grid-template-columns: minmax(0, 0.95fr) minmax(330px, 0.6fr);
	}

	.system-list {
		display: grid;
		gap: 12px;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.system-list button,
	.system-detail,
	.research-item {
		box-sizing: border-box;
		min-width: 0;
	}

	.system-list button {
		background: transparent;
		border: 0;
		border-top: 1px solid var(--line);
		color: inherit;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 10px;
		min-height: 144px;
		padding: 18px 0;
		text-align: left;
	}

	.system-list button.active,
	.system-list button:hover,
	.system-list button:focus-visible {
		border-color: var(--accent);
		outline: none;
	}

	.system-list button > span:not(.work-type):not(.work-title) {
		color: var(--muted);
		font-size: 0.88rem;
		line-height: 1.5;
	}

	.work-title {
		align-items: center;
		display: inline-flex;
		gap: 8px;
	}

	.work-title :global(i) {
		color: var(--accent);
		font-size: 1.15rem;
	}

	.work-title strong {
		font-size: 1.12rem;
		line-height: 1.1;
	}

	.system-detail {
		border-left: 1px solid var(--line);
		gap: 16px;
		padding: 0 0 0 22px;
	}

	.detail-topline {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}

	.detail-topline span {
		color: var(--accent);
		font-size: 0.72rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	.detail-topline strong {
		color: var(--accent);
		font-size: 1.45rem;
		line-height: 1;
	}

	.detail-head {
		align-items: center;
		display: flex;
		gap: 12px;
	}

	.detail-icon {
		align-items: center;
		background: color-mix(in srgb, var(--accent, var(--teal)) 12%, var(--icon-mix));
		border: 1px solid color-mix(in srgb, var(--accent, var(--teal)) 28%, transparent);
		border-radius: 8px;
		color: var(--accent, var(--teal));
		display: inline-flex;
		flex: 0 0 auto;
		font-size: 1.2rem;
		height: 42px;
		justify-content: center;
		width: 42px;
	}

	.detail-head p,
	.detail-copy {
		color: var(--muted);
	}

	.detail-copy {
		line-height: 1.58;
	}

	.system-detail ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.system-detail li {
		align-items: flex-start;
		color: var(--copy);
		display: flex;
		font-size: 0.9rem;
		gap: 10px;
		line-height: 1.45;
	}

	.marker {
		background: var(--accent);
		border-radius: 3px;
		flex: 0 0 auto;
		height: 7px;
		margin-top: 7px;
		width: 7px;
	}

	.research-strip {
		display: grid;
		gap: 12px;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		padding-top: 22px;
	}

	.research-item {
		background: transparent;
		border-top: 1px solid var(--line);
		color: var(--ink);
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 16px 0 0;
		text-decoration: none;
	}

	.research-item strong {
		font-size: 0.98rem;
		line-height: 1.25;
	}

	.research-item small {
		color: var(--muted);
		font-size: 0.82rem;
		line-height: 1.35;
	}

	@media (max-width: 1040px) {
		.hero-shell,
		.work-grid {
			grid-template-columns: 1fr;
		}

		.hero-shell {
			align-items: start;
		}
	}

	@media (max-width: 760px) {
		.portfolio-page {
			padding: 20px 14px 42px;
		}

		.hero-shell {
			gap: 20px;
		}

		.hero-copy {
			gap: 12px;
		}

		h1 {
			font-size: 2.25rem;
			line-height: 0.98;
		}

		h2 {
			font-size: 1.45rem;
		}

		.lede {
			font-size: 0.98rem;
		}

		.mode-toggle,
		.action-row,
		.section-header,
		.research-strip {
			width: 100%;
		}

		.mode-toggle button {
			flex: 1;
		}

		.action-row {
			display: grid;
			gap: 6px;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.action-link {
			font-size: 0.72rem;
			gap: 5px;
			min-height: 36px;
			padding: 0 5px;
			width: auto;
		}

		:global(.action-icon) {
			font-size: 1rem;
		}

		.quiet-link,
		.system-detail a {
			width: 100%;
		}

		.compare-stage {
			aspect-ratio: auto;
			height: 116px;
		}

		.comparison-control {
			gap: 7px;
			grid-template-columns: 1fr;
			padding: 9px 10px;
		}

		.comparison-control label {
			align-items: center;
			flex-direction: row;
			justify-content: space-between;
		}

		.pair-selector {
			gap: 5px;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.pair-selector button {
			font-size: 0.66rem;
			min-height: 30px;
			padding: 0 4px;
		}

		.section-header {
			align-items: stretch;
			flex-direction: column;
		}

		.system-list,
		.research-strip {
			grid-template-columns: 1fr;
		}

		.system-list button,
		.system-detail,
		.research-item {
			padding: 18px;
		}

		.system-detail {
			border-left: 0;
			border-top: 1px solid var(--line);
		}

		.research-item {
			padding-left: 0;
			padding-right: 0;
		}
	}
</style>
