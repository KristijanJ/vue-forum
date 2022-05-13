module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['standard', 'plugin:vue/vue3-recommended'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['vue', 'import'],
    ignorePatterns: [],
    rules: {
        semi: [2, 'always'],
        indent: [2, 4],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/no-v-html': 'off',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 3
                }
            }
        ],
        'import/extensions': ['error', 'always', {
            vue: 'always',
            js: 'never'
        }],
        'vue/attribute-hyphenation': ['error', 'always',
            {
                ignore: [
                    'bodyClass',
                    'headerClass',
                    'headerStyle',
                    'bodyStyle',
                    'selectionMode',
                    'alignFrozen'
                ]
            }
        ]
    }
};
