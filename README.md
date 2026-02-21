# 🎉 Página de Evento — Contagem Regressiva

Projeto desenvolvido durante o módulo de **Front-End** da EBAC com o objetivo de praticar:

* Estruturação semântica com **HTML5**
* Organização de estilos com **SASS (SCSS)**
* Arquitetura de componentes
* Responsividade (Mobile First)
* Animações com **AOS (Animate On Scroll)**
* Lógica de **JavaScript** para contagem regressiva
* Build de projeto com **Parcel**
* Publicação em produção via **Vercel**

---

## 🚀 Preview do Projeto

👉 https://data-aniversario-evento-zitx.vercel.app/

---

## 📚 Objetivo do Projeto

Criar uma landing page temática de evento com:

✔ Hero com imagem de destaque
✔ Informações principais do evento
✔ Seções intercaladas com imagem + texto
✔ Gradientes personalizados entre as seções
✔ Layout responsivo para mobile, tablet e desktop
✔ Timer dinâmico mostrando quanto falta para o evento
✔ Animações ao rolar a página
✔ Estrutura organizada seguindo boas práticas de front-end

---

## 🛠 Tecnologias Utilizadas

* **HTML5**
* **SCSS (SASS)**
* **JavaScript (ES6+)**
* **Parcel (Bundler)**
* **AOS.js** — animações de scroll
* **Vercel** — deploy

---

## 📂 Estrutura do Projeto

```
src/
 ├── images/
 ├── scripts/
 │    └── main.js
 ├── styles/
 │    ├── main.scss
 │    ├── _hero.scss
 │    └── components/
 │         ├── _buttons.scss
 │         ├── _event.scss
 │         ├── _infos_bar.scss
 │         ├── _variables.scss
 │         └── _footer.scss
 └── index.html
```

Organização baseada em **componentização de estilos**, facilitando manutenção e escalabilidade.

---

## ⚙️ Como Rodar o Projeto Localmente

### 1️⃣ Clonar o repositório

```
git clone <url-do-repositorio>
cd pagina-evento
```

### 2️⃣ Instalar dependências

```
npm install
```

### 3️⃣ Rodar ambiente de desenvolvimento

```
npm run dev
```

O projeto será aberto em:

```
http://localhost:1234
```

---

## 📦 Gerar Build de Produção

```
npm run build
```

O Parcel criará a pasta `dist/` pronta para deploy.

---

## ⏳ Funcionamento do Timer

O contador calcula a diferença entre:

```
Data do evento - Data atual
```

Convertendo milissegundos para:

* Dias
* Horas
* Minutos
* Segundos

Atualizando automaticamente a cada **1 segundo** com:

```js
setInterval(() => { ... }, 1000);
```

---

## 🎨 Conceito Visual

O layout segue uma estética **mística/noturna**, utilizando:

* Gradientes escuros
* Tipografia com alto contraste
* Alternância de imagem e texto entre seções
* Sensação de progressão visual conforme o usuário desce a página

---

## 📱 Responsividade

O projeto foi ajustado manualmente para:

✔ Mobile (≤ 640px)
✔ Tablet (641px — 1024px)
✔ Desktop (> 1024px)

Utilizando:

* Flexbox
* Media Queries específicas
* Ajustes de proporção de imagem
* Reorganização de layout vertical → horizontal

---

## ✨ Aprendizados Aplicados

Este projeto consolidou:

✔ Organização real de projeto front-end
✔ Uso correto de variáveis SCSS
✔ Debug de build tools (Parcel)
✔ Controle de responsividade sem frameworks
✔ Manipulação de datas em JavaScript
✔ Deploy profissional

---

## 📌 Autor

Desenvolvido por **Uillian de Freitas**
Durante a formação de **Desenvolvedor Full Stack Java** — EBAC.

---

## 🧠 Projeto Educacional

Este projeto tem fins de estudo e prática de arquitetura front-end moderna.
