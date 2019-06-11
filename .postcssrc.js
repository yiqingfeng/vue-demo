// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
	"plugins": {
		"postcss-import": {},
		"postcss-url": {},
		// to edit target browsers: use "browserslist" field in package.json
		"autoprefixer": {},
		"postcss-plugin-px2rem": {
			// 设计稿大小为 750px
			rootValue: 75,
			// remUnit: 37.5
		}
	}
}
