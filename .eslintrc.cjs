module.exports = {
    env: {
        browser: true,
        es2021: true,
        "cypress/globals": true
    },
    extends: ["plugin:react/recommended", "standard-with-typescript"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "cypress"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-uses-react": "off",
    },
};
