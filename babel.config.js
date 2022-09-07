module.exports = {
	presets: [
		['@babel/preset-env', {modules: false}],
		[ "@babel/typescript", { allowDeclareFields: true } ],
		"@babel/react",
	],
	plugins: [
	],
};
