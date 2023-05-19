# capsuleTime

## backend setup:

npm init -y => inicia projeto node;
npm i typescript tsx -D => installa o typescript
npm i @types/node => para o node poder ver o typescript
npx tsc --init => para iniciar o typescript
npm i fastify => installar a ferramenta para criar o servidor
npm i prisma => istallar o ORM
npx prisma init --datasource-provider SQLite => inicializa o prisma com o banco SQLite
npm i @prisma/client => acessar o banco de dados

npx prisma migrate dev => cria migrate para criação de tabela
npx prisma studio => ferramenta para ver o banco de dados.

## frontend setup

npx create-next-app@latest nome_app --use-npm => cria a aplicação nextjs.
npm i prettier-plugin-tailwindcss -D => usar o prettier no arquivo prettier.config ===> deixa as classes do tailwind semantica, conforme adicionamos na className.

## mobile

npx create-expo-app mobile => cria a aplicação no celular
npm i nativewind => instalando tailwind
npm i tailwindcss -D => intall tailwind
npx tailwindcss init => iniciando o tailwind
npm i eslint => instalando eslint


configurar o tailwind, mudanças nos arquivos babel.config.js e tailwind.config.js
para começar usar typescript deve alterar a extensão do app para .tsx