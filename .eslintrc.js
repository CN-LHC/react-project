module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": ["compat"],
    "env": {
      "browser": true,
      "node": true,
      "es6": true,
      "mocha": true,
      "jest": true,
      "jasmine": true
    },
    "globals": {
      "API": false,
      "API_PORT": false,
      "FILE_PORT": false,
      "OLD_REQUEST_API": false,
      "OLD_REQUEST_PORT": false,
      "LIBID": false,
      "YTTPURL": false,
      "YITU_IP": false,
      "filePath": false,
      "themeColor": false,
      "themeStyle": false,
      "themeStyleType": false,
      "MAPSERVER": false,
      "customConfig": false,
      "envMode": false,
      "isDevelopEnv": false,
      "themeConfigColor": false,
      "themeColorDate": false,
      "catchError": false,
      "RELATION_PORT": false,
      "APPModal": false,
      "showFaceSource": false,
      "PROTOCOL": false,
      "IMAGE_IP": false,
      "IMAGE_PORT": false
    },
    "rules": {
      "no-console": ["error", { "allow": ["warn", "error"] }],
      "no-labels": ["error", { "allowLoop": true }],
      "camelcase": [0],
      "generator-star-spacing": [0],
      "consistent-return": [0],
      "react/forbid-prop-types": [0],
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "global-require": [1],
      "import/prefer-default-export": [0],
      "react/jsx-no-bind": [0],
      "react/prop-types": [0],
      "react/prefer-stateless-function": [0],
      "no-else-return": [0],
      "no-restricted-syntax": [0],
      "import/no-extraneous-dependencies": [0],
      "no-use-before-define": [0],
      "jsx-a11y/no-static-element-interactions": [0],
      "jsx-a11y/no-noninteractive-element-interactions": [0],
      "jsx-a11y/click-events-have-key-events": [0],
      "jsx-a11y/anchor-is-valid": [0],
      "jsx-a11y/media-has-caption": [2, {
        "audio": ["Audio"],
        "video": ["Video"],
        "track": ["Track"]
      }],
      "no-nested-ternary": [0],
      "arrow-body-style": [0],
      "import/extensions": [0],
      "no-bitwise": [0],
      "no-cond-assign": [0],
      "import/no-unresolved": [0],
      "comma-dangle": ["error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }],
      "object-curly-newline": [0],
      "function-paren-newline": [0],
      "no-restricted-globals": [0],
      "require-yield": [1],
      "quotes": [2, "single", {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }],
      "no-param-reassign": ["error", { "props": false }],
      "class-methods-use-this": "off",
      "max-len": ["error", { "code": 150 }],
      "linebreak-style": [0 ,"error", "windows"]
    },
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "legacyDecorators": true
      }
    },
    "settings": {
      "polyfills": ["fetch", "promises"]
    }
};
