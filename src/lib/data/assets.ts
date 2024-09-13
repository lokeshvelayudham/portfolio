import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

const gh = (file: string) => `${base}/logos/${file}`;
const sc = (file: string) => `${base}/screenshots/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);
const s = (light: string, dark?: string): Asset =>
	dark ? { dark: sc(dark), light: sc(light) } : sc(light);

const Assets = {
	AWS: a('aws.svg'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi.svg'),
	Flask: a('flask.svg'),
	Go: a('go.svg'),
	Kafka: a('kafka.svg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kubernetes.svg'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.png'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.svg'),
	Jest: a('jest.png'),
	Unocss: a('unocss.svg'),
	Ruvy: a('ruvy.svg'),
	Postcss: a('postcss.svg'),
	CWRU: a('cwru.svg'),
	Anna: a('anna.png'),
	SolidWorks: a('solidworks.png'),
	MySQL: a('Mysql.png'),
	AlterCabs: a('alter.png'),
	Tensorflow: a('Tensorflow.png'),
	BlindCh3mistry: a('BC.png'),
	FooxTechnologies: a('foox.png'),
	GUVI: a('gv.webp'),
	PHP: a('php.png'),
	Beyondx: a('bx.png'),
	gitCraft: a('gitCraft.png'),
	TurboKnights: a('tb.png'),
	gUSD: a('gusd.png'),
	HaloHarbour: a('halo.png'),
	solidity: a('sol.png'),
	PerpCopyTrading: a('pct.png'),
	Portfolio: a('portfolio.png'),



	// Screenshots of Products
	AlterCabsScreenshot1: s('alter1.png'),
	AlterCabsScreenshot2: s('alter2.png'),
	AlterCabsScreenshot3: s('alter3.png'),
	AlterCabsScreenshot4: s('alter4.png'),
	AlterCabsScreenshot5: s('alter5.png'),
	GuviScreeshot1: s('guvi1.png'),
	GuviScreeshot2: s('guvi2.png'),
	GuviScreeshot3: s('guvi3.png'),
	gitCraftScreenshot1: s('gc1.png'),
	gitCraftScreenshot2: s('gc2.png'),
	gitCraftScreenshot3: s('gc3.png'),
	gitCraftScreenshot4: s('gc4.png'),
	IntersectionScreenshot1: s('intersection1.png'),
	IntersectionScreenshot2: s('intersection2.png'),
	IntersectionScreenshot3: s('intersection3.png'),
	FooxTechnologiesScreenshot1: s('foox1.png'),
	FooxTechnologiesScreenshot2: s('foox2.png'),
	TurboKnightsScreenshot1: s('tb1.png'),
	TurboKnightsScreenshot2: s('tb2.png'),
	HaloHarbourScreenshot1: s('halo1.png'),
	HaloHarbourScreenshot2: s('halo2.png'),
	HaloHarbourScreenshot3: s('halo3.png'),
	PortfolioScreenshot1: s('port1.png'),
	PortfolioScreenshot2: s('port2.png'),
	PortfolioScreenshot3: s('port3.png'),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
