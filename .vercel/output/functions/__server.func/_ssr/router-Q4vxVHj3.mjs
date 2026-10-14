import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Q4vxVHj3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-lg",
				children: "Algo se interrumpió"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var CONTACT = {
	phoneDisplay: "+52 322 139 9650",
	phoneWa: "523221399650",
	email: "contacto@labohemiaquartet.com",
	instagram: "https://www.instagram.com/labohemiaquartet_music",
	instagramHandle: "@labohemiaquartet_music",
	city: "Puerto Vallarta, Jal."
};
var TRACKS = [
	{
		index: "01",
		title: "Cínica",
		note: "Material original",
		url: "https://open.spotify.com/track/413Dx6zDqP44aSnKlAnYke"
	},
	{
		index: "02",
		title: "Soy",
		note: "Material original",
		url: "https://open.spotify.com/track/52Gy5pL5ELxKB5lsF1YPxA"
	},
	{
		index: "03",
		title: "Fiebre de amor",
		note: "Material original",
		url: "https://open.spotify.com/track/4L3ot6z8V3yxV3hL2lUiX7"
	}
];
var GALLERY = [
	{
		src: "/bohemia/hero.jpg",
		alt: "Escenario vacío con guitarras, bajo y batería bajo una luz cálida",
		caption: "Sala",
		place: "Noche de hotel"
	},
	{
		src: "/bohemia/guitar.jpg",
		alt: "Detalle de guitarra electroacústica y micrófono vintage",
		caption: "Cuerda",
		place: "Primer plano"
	},
	{
		src: "/bohemia/terraza.jpg",
		alt: "Terraza nocturna frente al mar con luces y un escenario pequeño",
		caption: "Terraza",
		place: "Evento privado"
	},
	{
		src: "/bohemia/vino.jpg",
		alt: "Copa de vino, partitura y clavijas sobre madera oscura",
		caption: "Mesa",
		place: "Antes del set"
	},
	{
		src: "/bohemia/club.jpg",
		alt: "Batería y bajo en silueta dentro de un club oscuro",
		caption: "Club",
		place: "Sesión cerrada"
	}
];
var STYLES = [
	"Bohemio",
	"Jazz & Standards",
	"Pop latino",
	"Pop en inglés",
	"Cumbia acústica",
	"Material original"
];
var STATUS_LABEL = {
	abierto: "Abierto",
	privado: "Privado",
	confirmado: "Confirmado"
};
var INQUIRY_LABEL = {
	nueva: "Nueva",
	en_curso: "En curso",
	cerrada: "Cerrada"
};
var seedShows = [
	{
		id: "show-vie",
		kind: "residencia",
		when: "VIE · Semanal",
		title: "Noche bohemia",
		venue: "Sheraton Buganvilias",
		city: "Puerto Vallarta",
		time: "21:00 — 23:00",
		status: "abierto"
	},
	{
		id: "show-sab",
		kind: "residencia",
		when: "SÁB · Semanal",
		title: "Sesión acústica",
		venue: "Cristal Grand",
		city: "Puerto Vallarta",
		time: "20:00 — 23:00",
		status: "abierto"
	},
	{
		id: "show-nov",
		kind: "especial",
		when: "15 Nov",
		title: "Boda",
		venue: "Marina Vallarta",
		city: "Puerto Vallarta",
		time: "Privado",
		status: "confirmado"
	},
	{
		id: "show-dic",
		kind: "especial",
		when: "20 Dic",
		title: "Posada corporativa",
		venue: "Hotel Mousai",
		city: "Puerto Vallarta",
		time: "Privado",
		status: "privado"
	}
];
var seedMusicians = [
	{
		id: "m-oscar",
		name: "Óscar Rosales",
		role: "Director musical",
		instrument: "Guitarra y voz",
		mark: "ÓR"
	},
	{
		id: "m-carlos",
		name: "Carlos Ledesma",
		role: "Voz",
		instrument: "Guitarra rítmica",
		mark: "CL"
	},
	{
		id: "m-alexis",
		name: "Alexis Macías Jr",
		role: "Bajo",
		instrument: "Bajo eléctrico",
		mark: "AM"
	},
	{
		id: "m-danny",
		name: "Dannyju",
		role: "Batería",
		instrument: "Batería",
		mark: "DJ"
	}
];
var seedSongs = [
	{
		id: "s1",
		title: "Bésame mucho",
		style: "Bohemio"
	},
	{
		id: "s2",
		title: "Contigo en la distancia",
		style: "Bohemio"
	},
	{
		id: "s3",
		title: "Sabor a mí",
		style: "Bohemio"
	},
	{
		id: "s4",
		title: "Fly me to the moon",
		style: "Jazz & Standards"
	},
	{
		id: "s5",
		title: "The girl from Ipanema",
		style: "Jazz & Standards"
	},
	{
		id: "s6",
		title: "Autumn leaves",
		style: "Jazz & Standards"
	},
	{
		id: "s7",
		title: "Corazón partío",
		style: "Pop latino"
	},
	{
		id: "s8",
		title: "De música ligera",
		style: "Pop latino"
	},
	{
		id: "s9",
		title: "La bicicleta",
		style: "Pop latino"
	},
	{
		id: "s10",
		title: "Perfect",
		style: "Pop en inglés"
	},
	{
		id: "s11",
		title: "Shallow",
		style: "Pop en inglés"
	},
	{
		id: "s12",
		title: "Can't help falling in love",
		style: "Pop en inglés"
	},
	{
		id: "s13",
		title: "La pollera colorá",
		style: "Cumbia acústica"
	},
	{
		id: "s14",
		title: "Cariñito",
		style: "Cumbia acústica"
	},
	{
		id: "s15",
		title: "Cómo te voy a olvidar",
		style: "Cumbia acústica"
	},
	{
		id: "s16",
		title: "Cínica",
		style: "Material original"
	},
	{
		id: "s17",
		title: "Soy",
		style: "Material original"
	},
	{
		id: "s18",
		title: "Fiebre de amor",
		style: "Material original"
	}
];
function waLink(text) {
	return `https://wa.me/${CONTACT.phoneWa}?text=${encodeURIComponent(text)}`;
}
var fresh = () => ({
	shows: seedShows,
	musicians: seedMusicians,
	songs: seedSongs,
	inquiries: []
});
var useBohemia = create()(persist((set) => ({
	...fresh(),
	addShow: (show) => set((s) => ({ shows: [...s.shows, {
		...show,
		id: crypto.randomUUID()
	}] })),
	updateShow: (id, patch) => set((s) => ({ shows: s.shows.map((item) => item.id === id ? {
		...item,
		...patch
	} : item) })),
	removeShow: (id) => set((s) => ({ shows: s.shows.filter((item) => item.id !== id) })),
	updateMusician: (id, patch) => set((s) => ({ musicians: s.musicians.map((item) => item.id === id ? {
		...item,
		...patch
	} : item) })),
	addSong: (song) => set((s) => ({ songs: [...s.songs, {
		...song,
		id: crypto.randomUUID()
	}] })),
	removeSong: (id) => set((s) => ({ songs: s.songs.filter((item) => item.id !== id) })),
	addInquiry: (input) => set((s) => ({ inquiries: [{
		...input,
		id: crypto.randomUUID(),
		status: "nueva",
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	}, ...s.inquiries] })),
	setInquiryStatus: (id, status) => set((s) => ({ inquiries: s.inquiries.map((item) => item.id === id ? {
		...item,
		status
	} : item) })),
	removeInquiry: (id) => set((s) => ({ inquiries: s.inquiries.filter((item) => item.id !== id) })),
	reset: () => set(fresh())
}), {
	name: "bohemia-aire-v1",
	skipHydration: true
}));
var styles_default = "/assets/styles-BQN3ak0E.css";
var Route$2 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "La Bohemia Quartet" },
			{
				name: "theme-color",
				content: "#100c0a"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500;1,9..144,600&family=Outfit:wght@300;400;500;600&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: Root
});
function Root() {
	(0, import_react.useEffect)(() => {
		useBohemia.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$1 = () => import("./routes-B1FgrH7P.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "La Bohemia Quartet · Música que respira" }, {
		name: "description",
		content: "Cuarteto de Puerto Vallarta. Boleros, jazz, pop y material original. Residencias en Sheraton Buganvilias y Cristal Grand."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./estudio-C2D-K040.mjs");
var Route = createFileRoute("/estudio")({
	head: () => ({ meta: [{ title: "Estudio · La Bohemia Quartet" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	EstudioRoute: Route.update({
		id: "/estudio",
		path: "/estudio",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { INQUIRY_LABEL as a, TRACKS as c, GALLERY as i, waLink as l, useBohemia as n, STATUS_LABEL as o, CONTACT as r, STYLES as s, router_exports as t };
