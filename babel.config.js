// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    plugins: [
        'macros', // Ini yang mengaktifkan babel-plugin-macros dan akan membaca config di atas
        // Jika Anda menggunakan styled-components, tambahkan ini
        // ['styled-components', { ssr: false }],
    ],
};
