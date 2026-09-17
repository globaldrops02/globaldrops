# GlobalDrops

Marketplace global de dropshipping para revendedores. Esta versão é um protótipo visual: os formulários ainda não criam contas nem iniciam sessões.

## Preparação

Usar Node.js 22.13 ou superior (recomendado: Node.js 24 LTS) e pnpm 11.19.0.
Executar os comandos nesta pasta, que contém o package.json:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Verificações

```sh
pnpm typecheck
pnpm lint
pnpm audit
pnpm build
pnpm start
```

O comando typecheck gera primeiro os tipos de rotas, permitindo a verificação numa instalação nova. O comando start requer um build concluído.

## Dependências

O pnpm-lock.yaml fixa as versões instaladas. Usar pnpm para respeitar as correções de dependências indiretas definidas em pnpm-workspace.yaml: PostCSS 8.5.28 e Sharp 0.35.4 substituem as versões vulneráveis trazidas pelo Next.js. Rever estas substituições quando o Next.js passar a incluir versões corrigidas.

ESLint 9 é usado por ser compatível com eslint-config-next 15.5. A atualização para ESLint 10 exige rever essa compatibilidade.

## Interface

Os preços de exemplo são guardados em cêntimos. A margem do destaque é calculada como preço de venda menos custo e apresentada como valor antes de despesas.
O acesso Entrar mantém-se visível em ecrãs pequenos; o cabeçalho pode ocupar duas linhas.

## Verificação no GitHub

A branch stabilization-beta tem uma verificação automática em cada envio: instalação com versões fixadas, TypeScript, lint e build de produção, usando Node.js 24 e pnpm 11.19.0 num executor Linux padrão do GitHub Actions.
O workflow não publica a aplicação, não acede a segredos e tem permissões apenas de leitura. Não é executado por envios para main.
