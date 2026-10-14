import { pipeline, env } from "@huggingface/transformers";

env.allowLocalModels = false;
env.useBrowserCache = true;
const button = document.querySelector("#translate");
const input = document.querySelector("#menu");
const language = document.querySelector("#lang");
const status = document.querySelector("#status");
const result = document.querySelector("#result");

let translator = null;

button.addEventListener("click", async () => {
  const text = input.value.trim();

  if (!text) {
    status.textContent = "Enter menu text first.";
    return;
  }

  button.disabled = true;
  status.textContent = "Loading AI model...";
  result.textContent = "";

  try {
    if (!translator) {
      translator = await pipeline(
        "translation",
        "Xenova/nllb-200-distilled-600M",
        { dtype: "q8" }
      );
    }

    const codes = {
      Tamil: "tam_Taml",
      English: "eng_Latn",
      Hindi: "hin_Deva"
    };

    const translated = await translator(text, {
      src_lang: "eng_Latn",
      tgt_lang: codes[language.value]
    });

    result.textContent = translated[0].translation_text;
    status.textContent = "Translation complete!";
  } catch (error) {
    console.error(error);
    status.textContent = "AI error: " + error.message;
  } finally {
    button.disabled = false;
  }
});
