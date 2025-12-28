# Horta em Casa - Guia de Setup

## 1. Registro do Dominio (ACAO HUMANA)

1. Acesse [registro.br](https://registro.br)
2. Busque por `minhahortaemcasa.com.br`
3. Registre por R$ 40/ano via PIX
4. Anote os nameservers que o Railway vai fornecer depois

---

## 2. Setup do Projeto (JA FEITO)

O projeto Astro esta configurado com:
- Tailwind CSS 4.x
- MDX para conteudo
- Sitemap automatico
- SEO otimizado
- Deploy para Railway

---

## 3. Deploy no Railway (ACAO HUMANA)

### 3.1 Primeiro, inicialize o Git:

```bash
git init
git add .
git commit -m "Initial commit: Horta em Casa portal"
```

### 3.2 Crie repositorio no GitHub:

1. Acesse [github.com/new](https://github.com/new)
2. Nome: `hortaemcasa`
3. Privado ou publico (sua escolha)
4. NAO inicialize com README

### 3.3 Conecte e faca push:

```bash
git remote add origin https://github.com/SEU_USUARIO/hortaemcasa.git
git branch -M main
git push -u origin main
```

### 3.4 Configure no Railway:

1. Acesse [railway.app](https://railway.app)
2. Clique em "New Project"
3. Selecione "Deploy from GitHub repo"
4. Escolha o repositorio `hortaemcasa`
5. Railway vai detectar automaticamente as configuracoes

### 3.5 Variaveis de Ambiente no Railway:

Configure estas variaveis em Settings > Variables:

```
HOST=0.0.0.0
PORT=3000
BREVO_API_KEY=sua_chave_api_aqui
BREVO_LIST_ID=2
```

### 3.6 Dominio Customizado:

1. No Railway, va em Settings > Domains
2. Adicione `minhahortaemcasa.com.br`
3. Copie os nameservers fornecidos
4. Configure no Registro.br

---

## 4. Setup do Brevo (Email Marketing)

### 4.1 Criar Conta:

1. Acesse [brevo.com](https://brevo.com)
2. Crie conta gratuita (300 emails/dia)
3. Confirme o email

### 4.2 Obter API Key:

1. Va em Settings > SMTP & API
2. Crie uma nova API Key
3. Copie a chave
4. Adicione como variavel no Railway: `BREVO_API_KEY`

### 4.3 Criar Lista de Contatos:

1. Va em Contacts > Lists
2. Crie lista "Novos Inscritos"
3. Anote o ID da lista (normalmente 2)
4. Adicione como variavel: `BREVO_LIST_ID`

### 4.4 Configurar Automacao:

1. Va em Automations
2. Crie nova automacao "Welcome Sequence"
3. Trigger: "Contact added to list"
4. Adicione os 7 emails conforme arquivo `/src/content/emails/sequencia-welcome.md`

---

## 5. Setup do Umami Analytics (Opcional)

### 5.1 Opcao A - Self-hosted no Railway:

1. No Railway, crie novo servico
2. Use template do Umami ou deploy de [github.com/umami-software/umami](https://github.com/umami-software/umami)
3. Adicione PostgreSQL como servico
4. Configure variaveis de ambiente

### 5.2 Opcao B - Umami Cloud:

1. Acesse [cloud.umami.is](https://cloud.umami.is)
2. Crie conta (gratis ate 10k pageviews/mes)
3. Adicione seu site
4. Copie o script de tracking

### 5.3 Configurar no Site:

Edite `/src/layouts/Layout.astro` e substitua:

```html
<script defer data-website-id="YOUR_UMAMI_ID" src="https://analytics.yourdomain.com/script.js"></script>
```

Por seu script real do Umami.

---

## 6. Setup do Kiwify (Vendas)

### 6.1 Criar Conta:

1. Acesse [kiwify.com.br](https://kiwify.com.br)
2. Crie conta como produtor
3. Complete o cadastro

### 6.2 Criar Produto:

1. Va em Produtos > Novo Produto
2. Titulo: "Kit Iniciante: Sua Primeira Horta em 7 Dias"
3. Preco: R$ 19
4. Tipo: Produto Digital (PDF)
5. Upload do PDF do ebook

### 6.3 Configurar Checkout:

1. Personalize a pagina de checkout
2. Configure emails de entrega
3. Copie o link de checkout

### 6.4 Atualizar no Site:

Edite `/src/pages/produtos/kit-iniciante.astro` e substitua:
```
href="https://kiwify.com.br/PLACEHOLDER"
```
Pelo link real do seu produto no Kiwify.

---

## 7. Google Search Console

### 7.1 Verificar Propriedade:

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione propriedade: `https://minhahortaemcasa.com.br`
3. Verifique via DNS ou arquivo HTML

### 7.2 Submeter Sitemap:

1. Va em Sitemaps
2. Adicione: `https://minhahortaemcasa.com.br/sitemap-index.xml`
3. Clique em Enviar

---

## 8. Checklist Final

- [ ] Dominio registrado no registro.br
- [ ] Projeto no GitHub
- [ ] Deploy funcionando no Railway
- [ ] Dominio customizado configurado
- [ ] Brevo configurado com API Key
- [ ] Lista de contatos criada
- [ ] Automacao de emails configurada
- [ ] Umami Analytics instalado
- [ ] Kiwify configurado
- [ ] Produto criado e link atualizado
- [ ] Google Search Console verificado
- [ ] Sitemap submetido

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

### Preview do Build:

```bash
npm run preview
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
│   │   ├── api/        # Endpoints de API
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

## Proximos Passos Apos Setup

1. Criar imagens para os artigos (Canva, Unsplash)
2. Criar PDF real do lead magnet (Canva)
3. Criar PDF real do ebook Kit Iniciante (Canva)
4. Publicar mais artigos de plantas
5. Monitorar metricas no Umami
6. Ajustar automacoes no Brevo com base em resultados

---

## Suporte

Em caso de duvidas:
- Documentacao Astro: [docs.astro.build](https://docs.astro.build)
- Documentacao Railway: [docs.railway.app](https://docs.railway.app)
- Documentacao Brevo: [developers.brevo.com](https://developers.brevo.com)
