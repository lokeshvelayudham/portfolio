<script lang="ts">
	import { titleSuffix } from '@data/app';
	import { grants, publications, scholarProfile, title } from '@data/publications';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import { useTitle } from '$lib/utils/helpers';
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<main class="publications-page">
	<section class="publication-hero" aria-labelledby="publication-page-title">
		<div class="hero-copy">
			<p class="eyebrow">Research output</p>
			<h1 id="publication-page-title">Publications, grants, and research signals.</h1>
			<p>
				A focused record of first-author biomedical imaging work, public research links, and
				NIH-supported translational R&D funding signals connected to the research portfolio.
			</p>
			<div class="hero-actions">
				<a class="primary-action" href={scholarProfile.to} target="_blank" rel="noreferrer">
					<UIcon icon="i-carbon-education" />
					<span>{scholarProfile.label}</span>
				</a>
				<a href="#featured-publication">
					<UIcon icon="i-carbon-document" />
					<span>Featured paper</span>
				</a>
				<a href="#research-grants">
					<UIcon icon="i-carbon-certificate" />
					<span>Grant</span>
				</a>
			</div>
		</div>

		<div class="metric-panel" aria-label="Research summary">
			<div>
				<strong>{publications.length}</strong>
				<span>publication</span>
			</div>
			<div>
				<strong>{grants.length}</strong>
				<span>grant signal</span>
			</div>
			<div>
				<strong>2026</strong>
				<span>Cytotherapy</span>
			</div>
		</div>
	</section>

	<section class="content-grid" aria-label="Publication and grant details">
		<div class="main-column">
			<section class="section-block" id="featured-publication" aria-labelledby="featured-title">
				<div class="section-heading">
					<p class="eyebrow">Featured publication</p>
					<h2 id="featured-title">First-author work</h2>
				</div>

				{#each publications as publication}
					<article class="research-card" id={publication.slug}>
						<div class="card-head">
							<span class="card-icon">
								<UIcon icon="i-carbon-microscope" />
							</span>
							<div>
								<p>{publication.role} / {publication.venue} / {publication.year}</p>
								<h3>{publication.title}</h3>
							</div>
						</div>
						<p class="summary">{publication.summary}</p>
						<p class="team">{publication.team}</p>
						<div class="tag-row" aria-label="Research areas">
							{#each publication.tags as tag}
								<span>{tag}</span>
							{/each}
						</div>
						<div class="link-row">
							{#each publication.links as link}
								<a href={link.to} target="_blank" rel="noreferrer">
									<span>{link.label}</span>
									<UIcon icon="i-carbon-launch" />
								</a>
							{/each}
						</div>
					</article>
				{/each}
			</section>

			<section class="section-block" id="research-grants" aria-labelledby="grant-title">
				<div class="section-heading">
					<p class="eyebrow">Funding</p>
					<h2 id="grant-title">Grant record</h2>
				</div>

				{#each grants as grant}
					<article class="research-card grant-card" id={grant.slug}>
						<div class="card-head">
							<span class="card-icon">
								<UIcon icon="i-carbon-certificate" />
							</span>
							<div>
								<p>{grant.sponsor}</p>
								<h3>{grant.title}</h3>
							</div>
						</div>
						<div class="grant-number">
							<span>Award number</span>
							<strong>{grant.identifier}</strong>
						</div>
						<p class="summary">{grant.mechanism}</p>
						<p class="team">{grant.summary}</p>
						<div class="link-row">
							{#each grant.links as link}
								<a href={link.to} target="_blank" rel="noreferrer">
									<span>{link.label}</span>
									<UIcon icon="i-carbon-launch" />
								</a>
							{/each}
						</div>
					</article>
				{/each}
			</section>
		</div>

		<aside class="side-column" aria-label="External research profile">
			<div class="scholar-card">
				<span class="scholar-icon">
					<UIcon icon="i-carbon-education" />
				</span>
				<p class="eyebrow">Public profile</p>
				<h2>Google Scholar</h2>
				<p>
					Use the Scholar profile as the canonical external page for citations, indexed papers, and
					publication updates.
				</p>
				<a href={scholarProfile.to} target="_blank" rel="noreferrer">
					<span>Open profile</span>
					<UIcon icon="i-carbon-launch" />
				</a>
			</div>

			<div class="note-card">
				<p class="eyebrow">Research thesis</p>
				<p>
					The publication and grant record points toward the same theme: practical AI systems for
					microscopy, scarce tissue preservation, and translational biomedical imaging workflows.
				</p>
			</div>
		</aside>
	</section>
</main>

<style lang="scss">
	.publications-page {
		--paper: #f5f7f4;
		--panel: #ffffff;
		--ink: #141414;
		--muted: #5d6362;
		--line: rgba(20, 20, 20, 0.12);
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
		padding: 24px 24px 64px;
		width: 100vw;
	}

	.publication-hero,
	.content-grid {
		box-sizing: border-box;
		margin-left: auto;
		margin-right: auto;
		max-width: 1180px;
	}

	.publication-hero {
		align-items: stretch;
		background: linear-gradient(rgba(20, 20, 20, 0.045) 1px, transparent 1px),
			linear-gradient(90deg, rgba(20, 20, 20, 0.045) 1px, transparent 1px), var(--paper);
		background-size: 36px 36px;
		border-bottom: 1px solid var(--line);
		display: grid;
		gap: 28px;
		grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
		padding: 52px 0 38px;
	}

	.hero-copy,
	.section-block,
	.main-column,
	.side-column {
		display: flex;
		flex-direction: column;
	}

	.hero-copy {
		gap: 18px;
		min-width: 0;
	}

	.eyebrow {
		color: var(--teal);
		font-size: 0.78rem;
		font-weight: 900;
		letter-spacing: 0;
		margin: 0;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3,
	p {
		letter-spacing: 0;
		margin: 0;
	}

	h1 {
		font-size: 3.25rem;
		font-weight: 950;
		line-height: 1;
		max-width: 760px;
	}

	h2 {
		font-size: 1.75rem;
		line-height: 1.08;
	}

	h3 {
		font-size: 1.35rem;
		line-height: 1.18;
	}

	.hero-copy > p:not(.eyebrow) {
		color: #303433;
		font-size: 1.05rem;
		line-height: 1.65;
		max-width: 760px;
	}

	.hero-actions,
	.link-row,
	.tag-row {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.hero-actions a,
	.link-row a,
	.scholar-card a {
		align-items: center;
		background: var(--panel);
		border: 1px solid var(--line);
		border-radius: 8px;
		color: var(--ink);
		display: inline-flex;
		font-size: 0.9rem;
		font-weight: 900;
		gap: 8px;
		justify-content: center;
		min-height: 42px;
		padding: 0 14px;
		text-decoration: none;
	}

	.hero-actions a:hover,
	.link-row a:hover,
	.scholar-card a:hover {
		border-color: rgba(20, 20, 20, 0.32);
		transform: translateY(-2px);
	}

	.hero-actions .primary-action {
		background: #111111;
		border-color: #111111;
		color: #ffffff;
	}

	.metric-panel {
		background: #111111;
		border-radius: 8px;
		color: #ffffff;
		display: grid;
		grid-template-columns: 1fr;
		overflow: hidden;
	}

	.metric-panel div {
		border-bottom: 1px solid rgba(255, 255, 255, 0.12);
		display: flex;
		flex-direction: column;
		gap: 8px;
		justify-content: center;
		min-height: 118px;
		padding: 22px;
	}

	.metric-panel div:last-child {
		border-bottom: 0;
	}

	.metric-panel strong {
		color: #e7b84b;
		font-size: 2rem;
		line-height: 1;
	}

	.metric-panel span {
		color: rgba(255, 255, 255, 0.72);
		font-size: 0.86rem;
		font-weight: 800;
		text-transform: uppercase;
	}

	.content-grid {
		align-items: start;
		display: grid;
		gap: 24px;
		grid-template-columns: minmax(0, 1fr) 340px;
		padding-top: 34px;
	}

	.main-column,
	.side-column,
	.section-block {
		gap: 18px;
	}

	.section-heading {
		align-items: end;
		display: flex;
		justify-content: space-between;
		gap: 18px;
	}

	.research-card,
	.scholar-card,
	.note-card {
		background: var(--panel);
		border: 1px solid var(--line);
		border-radius: 8px;
		box-shadow: 0 18px 42px rgba(17, 17, 17, 0.06);
		box-sizing: border-box;
	}

	.research-card {
		display: flex;
		flex-direction: column;
		gap: 18px;
		padding: 24px;
	}

	.card-head {
		align-items: flex-start;
		display: grid;
		gap: 14px;
		grid-template-columns: 48px minmax(0, 1fr);
	}

	.card-head p {
		color: var(--orange);
		font-size: 0.82rem;
		font-weight: 900;
		margin-bottom: 8px;
		text-transform: uppercase;
	}

	.card-icon,
	.scholar-icon {
		align-items: center;
		background: color-mix(in srgb, var(--teal) 12%, #ffffff);
		border: 1px solid color-mix(in srgb, var(--teal) 30%, transparent);
		border-radius: 8px;
		color: var(--teal);
		display: inline-flex;
		font-size: 1.5rem;
		height: 48px;
		justify-content: center;
		width: 48px;
	}

	.summary {
		color: #303433;
		font-size: 1rem;
		line-height: 1.65;
	}

	.team {
		border-left: 4px solid var(--gold);
		color: var(--muted);
		line-height: 1.55;
		padding-left: 14px;
	}

	.tag-row span {
		background: color-mix(in srgb, var(--teal) 9%, #ffffff);
		border: 1px solid color-mix(in srgb, var(--teal) 20%, transparent);
		border-radius: 999px;
		color: #15524d;
		font-size: 0.82rem;
		font-weight: 850;
		padding: 7px 10px;
	}

	.grant-card .card-icon {
		background: color-mix(in srgb, var(--orange) 12%, #ffffff);
		border-color: color-mix(in srgb, var(--orange) 30%, transparent);
		color: var(--orange);
	}

	.grant-number {
		background: #111111;
		border-radius: 8px;
		color: #ffffff;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 18px;
	}

	.grant-number span {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.78rem;
		font-weight: 900;
		text-transform: uppercase;
	}

	.grant-number strong {
		color: #e7b84b;
		font-size: 1.8rem;
		line-height: 1;
	}

	.scholar-card,
	.note-card {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 22px;
	}

	.scholar-card {
		position: sticky;
		top: 74px;
	}

	.scholar-card p:not(.eyebrow),
	.note-card p:not(.eyebrow) {
		color: var(--muted);
		line-height: 1.58;
	}

	.scholar-card a {
		background: #111111;
		border-color: #111111;
		color: #ffffff;
		margin-top: 4px;
	}

	@media (max-width: 980px) {
		.publication-hero,
		.content-grid {
			grid-template-columns: 1fr;
		}

		.metric-panel {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.metric-panel div {
			border-bottom: 0;
			border-right: 1px solid rgba(255, 255, 255, 0.12);
			min-height: 96px;
		}

		.metric-panel div:last-child {
			border-right: 0;
		}

		.scholar-card {
			position: static;
		}
	}

	@media (max-width: 640px) {
		.publications-page {
			padding: 18px 14px 42px;
		}

		.publication-hero {
			gap: 20px;
			padding: 30px 0 26px;
		}

		h1 {
			font-size: 2.1rem;
		}

		h2 {
			font-size: 1.45rem;
		}

		h3 {
			font-size: 1.1rem;
		}

		.metric-panel,
		.card-head {
			grid-template-columns: 1fr;
		}

		.metric-panel div {
			border-bottom: 1px solid rgba(255, 255, 255, 0.12);
			border-right: 0;
			min-height: 84px;
		}

		.metric-panel div:last-child {
			border-bottom: 0;
		}

		.research-card,
		.scholar-card,
		.note-card {
			padding: 18px;
		}

		.grant-number strong {
			font-size: 1.35rem;
		}
	}
</style>
