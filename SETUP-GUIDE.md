# Horta em Casa - Guia de Setup

## 1. Registro do Dominio

1. Acesse [registro.br](https://registro.br)
2. Busque por `minhahortaemcasa.com.br`
3. Registre por R$ 40/ano via PIX

---

## 2. Deploy no Railway (JA FEITO)

O projeto ja esta no Railway em:
- **URL**: https://minhahortaemcasa-production.up.railway.app
- **Dashboard**: https://railway.com/project/1ada0f6f-a427-445e-84df-58f0bde4f0fe

### Variaveis de Ambiente (ja configuradas):

```
HOST=0.0.0.0
PORT=3000
```

### Dominio Customizado:

1. No Railway, va em Settings > Domains
2. Adicione `minhahortaemcasa.com.br`
3. Configure o DNS no Registro.br conforme instrucoes

---

## 3. Setup do Kiwify (Vendas)

### 3.1 Criar Conta:

1. Acesse [kiwify.com.br](https://kiwify.com.br)
2. Crie conta como produtor
3. Complete o cadastro

### 3.2 Criar Produtos:

Crie os seguintes produtos no Kiwify:

| Produto | Preco | Arquivo |
|---------|-------|---------|
| Kit Iniciante: Sua Primeira Horta | R$ 19 | PDF 40 pags |
| Kit 5 Temperos Essenciais | R$ 19 | 5 PDFs |
| Kit Salve Sua Horta | R$ 24 | 3 PDFs |
| Guia Completo do Manjericao | R$ 9 | PDF 25 pags |
| Guia Completo do Alecrim | R$ 9 | PDF 22 pags |
| Guia Completo da Hortela | R$ 9 | PDF 20 pags |
| SOS Folhas Amarelas | R$ 9 | PDF 30 pags |
| Manual Anti-Pragas | R$ 14 | PDF 45 pags |
| Guia Definitivo de Rega | R$ 9 | PDF 28 pags |

### 3.3 Atualizar Links no Site:

Apos criar cada produto, copie o link de checkout e atualize nos arquivos:

```
src/pages/produtos/kit-iniciante.astro
src/pages/produtos/[...slug].astro
```

Substitua `https://kiwify.com.br/PLACEHOLDER` pelo link real.

---

## 4. Setup do Umami Analytics (Opcional)

### Opcao A - Umami Cloud:

1. Acesse [cloud.umami.is](https://cloud.umami.is)
2. Crie conta (gratis ate 10k pageviews/mes)
3. Adicione seu site
4. Copie o script de tracking

### Configurar no Site:

Edite `/src/layouts/Layout.astro` e substitua:

```html
<script defer data-website-id="YOUR_UMAMI_ID" src="https://analytics.yourdomain.com/script.js"></script>
```

Por seu script real do Umami.

---

## 5. Google Search Console

### 5.1 Verificar Propriedade:

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione propriedade: `https://minhahortaemcasa.com.br`
3. Verifique via DNS ou arquivo HTML

### 5.2 Submeter Sitemap:

1. Va em Sitemaps
2. Adicione: `https://minhahortaemcasa.com.br/sitemap-index.xml`
3. Clique em Enviar

---

## 6. Checklist Final

- [ ] Dominio registrado no registro.br
- [ ] Dominio customizado configurado no Railway
- [ ] Kiwify configurado
- [ ] Todos os produtos criados no Kiwify
- [ ] Links de checkout atualizados no codigo
- [ ] Google Search Console verificado
- [ ] Sitemap submetido
- [ ] Umami Analytics instalado (opcional)

---

## Comandos Uteis

### Desenvolvimento Local:

```bash
npm run dev
```

### Build de Producao:

```bash
npm run build
```

### Deploy (via CLI):

```bash
railway up --service minhahortaemcasa --detach
```

---

## Estrutura do Projeto

```
/
├── src/
│   ├── components/     # Componentes reutilizaveis
│   ├── content/        # Conteudo MDX
│   │   ├── guias/      # Guias de cultivo
│   │   ├── plantas/    # Guias de plantas especificas
│   │   ├── problemas/  # Artigos de troubleshooting
│   │   └── produtos/   # Produtos digitais
│   ├── layouts/        # Layouts de pagina
│   ├── pages/          # Rotas do site
│   │   ├── guias/      # Paginas de guias
│   │   ├── plantas/    # Paginas de plantas
│   │   ├── problemas/  # Paginas de problemas
│   │   └── produtos/   # Paginas de produtos
│   └── styles/         # CSS global
├── public/             # Arquivos estaticos
├── astro.config.mjs    # Configuracao do Astro
├── railway.toml        # Configuracao do Railway
└── package.json
```

---

## Proximos Passos

1. Registrar dominio no registro.br
2. Criar PDFs dos produtos no Canva
3. Criar produtos no Kiwify
4. Atualizar links de checkout
5. Configurar dominio customizado
6. Submeter sitemap ao Google

---

## Suporte

Em caso de duvidas:
- Documentacao Astro: [docs.astro.build](https://docs.astro.build)
- Documentacao Railway: [docs.railway.app](https://docs.railway.app)
- Documentacao Kiwify: [ajuda.kiwify.com.br](https://ajuda.kiwify.com.br)
