/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "/app/**/*.tsx"], // é preciso adicionar essas coisas, onde o App.tsx é onde esta a aplicação e o app/**/*.tsc é um diretório que vai funcionar o tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}

