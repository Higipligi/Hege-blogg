module.exports = (themeConfig, ctx) => {
	const config = {};
	config.extendPageData = pageCtx => {
		const date = pageCtx.path.match(/(\d{4})-(\d{2})-(\d{2})/);
		if (date) {
			const [, y, m, d] = date;
			pageCtx.frontmatter.date = new Date(y, m - 1, d);
		}
	};
	return config;
};
