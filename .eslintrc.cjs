import js from "@eslint/js";
module.exports = [
	{
        files: ["**/*.js"],
        rules: {
            ...js.configs.all.rules,
            "no-unused-vars": "warn"
        } 
    }
];