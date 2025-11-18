// .prettierrc.js
export default {
    semi: true, // Menambahkan titik koma di akhir pernyataan
    trailingComma: "es5", // Menambahkan koma di akhir objek/array multilines
    singleQuote: true, // Menggunakan tanda kutip tunggal
    printWidth: 100, // Lebar maksimum baris kode
    tabWidth: 2, // Jumlah spasi untuk indentasi
    useTabs: false, // Menggunakan spasi alih-alih tab
    plugins: ["prettier-plugin-tailwindcss"], // Menggunakan variabel yang sudah diimpor
};
