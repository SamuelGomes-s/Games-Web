module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/prop-types": "off",
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
    },
};
