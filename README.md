# 🍽️ LocalMenuTranslator

**Understand restaurant menus across languages with AI.**

LocalMenuTranslator is an open-source web application that helps users translate restaurant menu text into Tamil, English, or Hindi using an AI translation model directly from the browser.

## ✨ Features

- Translate menu text into Tamil, English, and Hindi.
- Simple and responsive web interface.
- AI-powered translation using Hugging Face Transformers.js.
- Runs in the browser without requiring a separate Python backend.
- Built with Vite and JavaScript.

## 🛠️ Tech Stack

- JavaScript
- Vite
- Hugging Face Transformers.js
- NLLB-200 distilled translation model

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Internet access to install dependencies and download model files when needed

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/LocalMenuTranslator.git
cd LocalMenuTranslator
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

The production files are generated in the `dist` directory.

## 🌐 Supported Languages

- English
- Tamil
- Hindi

The current translation workflow assumes that the input menu text is in English.

## 🤖 AI Model

This project uses `Xenova/nllb-200-distilled-600M` through Transformers.js.

Model information:
https://huggingface.co/Xenova/nllb-200-distilled-600M

The model may need to download files on first use. Availability and speed depend on your network and browser.

**Important:** The model is published under the CC-BY-NC-4.0 license. Review its terms before any commercial use. This project's MIT license does not change the model's separate license.

## 🤝 Contributing

Contributions, bug reports, and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and test them.
4. Submit a pull request.

## 📄 License

The application source code in this repository is licensed under the MIT License. See [LICENSE](LICENSE).

Third-party models and dependencies remain subject to their own licenses.

---

Made with ❤️ for accessible menus and open-source AI.
