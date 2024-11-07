# Bling - Front-end App Template


Este projeto é um template para iniciar o desenvolvimento de aplicações front-end utilizando Vue 3, TypeScript e Vite. Ele inclui uma configuração inicial para linting, formatação de código, testes unitários e gerenciamento de estado.

## Stack Utilizada

- **Framework Frontend**: [Vue 3](https://vuejs.org/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Ferramenta de Build**: [Vite](https://vitejs.dev/)
- **Gerenciamento de Estado**: [Pinia](https://pinia.vuejs.org/)
- **Gerenciamento de Queries**: [Vue Query](https://tanstack.com/query/v3/docs/vue/overview)
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: [ESLint](https://eslint.org/) com plugins para [Prettier](https://prettier.io/) e [Tailwind CSS](https://github.com/francoismassart/eslint-plugin-tailwindcss)
- **Testes**: [Vitest](https://vitest.dev/) e [Vue Test Utils](https://test-utils.vuejs.org/)
- **Transpiler**: [vue-tsc](https://github.com/vuejs/vue-tsc)

## Boas Práticas de Desenvolvimento

Para contribuir com o projeto, siga estas boas práticas:

1. **Consistência de Código**: Utilize o Prettier para formatação de código. As configurações estão definidas no arquivo [.prettierrc](.prettierrc).
2. **Linting**: Execute o ESLint para garantir que o código segue os padrões definidos. Utilize o comando `npm run lint` para corrigir automaticamente problemas de linting.
3. **Testes**: Escreva testes unitários para novos componentes e funcionalidades. Utilize o Vitest para rodar os testes.
4. **Commits**: Faça commits pequenos e descritivos. Utilize mensagens de commit claras e concisas.
5. **Pull Requests**: Antes de abrir um pull request, certifique-se de que todos os testes estão passando e que não há problemas de linting.

## Instruções para Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**:
    ```sh
    git clone https://github.com/seu-usuario/bling-mfe-app-base.git
    cd bling-mfe-app-base
    ```

2. **Instale as dependências**:
    ```sh
    npm install
    ```

3. **Rode o servidor de desenvolvimento**:
    ```sh
    npm run dev
    ```

4. **Build para produção**:
    ```sh
    npm run build
    ```

5. **Rode os testes**:
    ```sh
    npm run test
    ```

6. **Pré-visualize a build de produção**:
    ```sh
    npm run preview
    ```

Para mais detalhes sobre a configuração do projeto e suporte ao IDE, consulte a [documentação do Vue](https://vuejs.org/guide/typescript/overview.html#project-setup).

