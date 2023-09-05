const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cart.png","en.png","favicon.png","logo.png","main/hero.webp","ru.png"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.a51861c1.js","app":"_app/immutable/entry/app.b296152e.js","imports":["_app/immutable/entry/start.a51861c1.js","_app/immutable/chunks/scheduler.b9582851.js","_app/immutable/chunks/singletons.03378d0c.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.b296152e.js","_app/immutable/chunks/scheduler.b9582851.js","_app/immutable/chunks/index.99c81ec3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-d5d00cbc.js')),
			__memo(() => import('./chunks/1-2c867d21.js')),
			__memo(() => import('./chunks/2-46fa24a1.js')),
			__memo(() => import('./chunks/3-63088359.js')),
			__memo(() => import('./chunks/4-814c3c45.js')),
			__memo(() => import('./chunks/5-45b29146.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/inlang/[language].json",
				pattern: /^\/inlang\/([^/]+?)\.json\/?$/,
				params: [{"name":"language","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-c2897801.js'))
			},
			{
				id: "/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/reserve",
				pattern: /^\/reserve\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/reviews",
				pattern: /^\/reviews\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
