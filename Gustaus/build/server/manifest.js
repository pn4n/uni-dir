const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logo.png","main/hero.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.6acb18ea.js","app":"_app/immutable/entry/app.33898e63.js","imports":["_app/immutable/entry/start.6acb18ea.js","_app/immutable/chunks/scheduler.4be4d217.js","_app/immutable/chunks/singletons.8882d19d.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.33898e63.js","_app/immutable/chunks/scheduler.4be4d217.js","_app/immutable/chunks/index.5e2710db.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-815ebe3b.js')),
			__memo(() => import('./chunks/1-601dfe10.js')),
			__memo(() => import('./chunks/2-9a79c6d8.js')),
			__memo(() => import('./chunks/3-e1ff46a2.js')),
			__memo(() => import('./chunks/4-087b4a4e.js')),
			__memo(() => import('./chunks/5-a312f4f3.js'))
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
