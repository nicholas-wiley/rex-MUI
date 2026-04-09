# ReX — Copilot Instructions

## Escopo do projeto
Este projeto é um **refactoring** de um design existente no Figma.
- NÃO estamos criando design novo
- NÃO adicionamos nada que não esteja no Figma
- Se não está no Figma → pergunta antes de implementar

## Regra de ouro
> "estamos refactoring um design existente. se segue o figma, perfeito. se sai do figma, RUIM"

Antes de adicionar qualquer propriedade visual (ícone, cor, sombra, espaçamento), buscar o nó correspondente na API do Figma e confirmar com o usuário.

## Figma API
- **Token**: `FIGMA_TOKEN_REDACTED` (expira 2026-05-13)
- **File ID**: `CmAtBaedooTgME20c0pE7s` — ReX Components
- **Como buscar um nó**:
  ```bash
  curl -s -H "X-Figma-Token: FIGMA_TOKEN_REDACTED" \
    "https://api.figma.com/v1/files/CmAtBaedooTgME20c0pE7s/nodes?ids=NODE_ID"
  ```
- O `node-id` vem da URL do Figma: `?node-id=594-37067` → use `594-37067`

## Stack
- Hugo static site (porta 1473)
- CSS puro em `static/css/rex-theme.css`
- Sem framework CSS — tudo manual

## Convenções CSS estabelecidas
- `.card` tem `border: 1px solid`, `border-radius: 0`, `gap: 15px (--space-3)`
- `.card + .card { border-top: none }` — evita borda dupla
- `.container` tem `gap: 0`
- `h3` = font-weight 400 (text weight, não item weight)
- `.criteria .label` = font-weight 600
- Classes de link são **scoped por componente**: `.header-tenant__link`, `.footer__link` etc.

## Git workflow
- **Commit após cada mudança** — sem acumular. Mensagem descritiva do que mudou e por quê (ex: "fix: locked color #595959 per Figma 496:54").
- Isso permite reverter qualquer erro imediatamente.

## Visualização (paridade)
VS Browser está instalado com proxy mode — ambos (usuário e agente) veem o mesmo output renderizado.
