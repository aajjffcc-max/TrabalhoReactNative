# MyApp — Componentes Reutilizáveis em React Native

Trabalho acadêmico: criação de 3 componentes reutilizáveis com StyleSheet no React Native usando Expo.

## 📁 Estrutura do Projeto

```
MyApp/
├── components/
│   ├── Header.js     ← Cabeçalho da aplicação
│   ├── Footer.js     ← Rodapé da aplicação
│   └── Botao.js      ← Botão reutilizável com props
├── App.js            ← Tela principal que usa os 3 componentes
├── app.json
├── babel.config.js
├── package.json
└── .gitignore
```

## ▶️ Como rodar o projeto

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar o projeto
```bash
npx expo start
```

### 3. Visualizar
- **No celular**: Baixe o app **Expo Go** (Android/iOS) e escaneie o QR code
- **No navegador**: Pressione `W` no terminal
- **No emulador Android**: Pressione `A`
- **No simulador iOS**: Pressione `I`

## 🧩 Componentes

| Componente | Props | Descrição |
|------------|-------|-----------|
| `Header`   | `titulo` | Cabeçalho azul com título |
| `Footer`   | `texto`  | Rodapé escuro com texto informativo |
| `Botao`    | `label`, `onPress`, `cor` | Botão reutilizável com cor customizável |
