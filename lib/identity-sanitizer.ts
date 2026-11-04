// Model Identity Sanitizer: strictly removes ChatGPT, OpenAI, and third-party leaks
export function sanitizeModelIdentity(text: string, modelName: string, ownerName?: string): string {
  if (!text) return text;
  let res = text;
  const targetOwner = ownerName || "AI";
  const modelLower = modelName.toLowerCase();
  const isDeepSeek = modelLower.includes("deepseek");
  const isExplicitChatGPT = modelLower === "chatgpt" || modelLower === "chatgpt-4o" || modelLower === "chatgpt-plus";
  const isKimi = modelLower.includes("kimi");
  const isClaude = modelLower.includes("claude");

  // 1. Remove generic ChatGPT / OpenAI leaks whenever the model isn't specifically ChatGPT
  if (!isExplicitChatGPT) {
    res = res.replace(/I['’]m\s+ChatGPT(?:[\s,.-]+(?:your\s+AI\s+coding\s+companion|your\s+AI\s+assistant|a\s+large\s+language\s+model|an\s+AI\s+assistant))?[,\.\s]*/gi, "I'm " + modelName + ", ");
    res = res.replace(/I\s+am\s+ChatGPT(?:[\s,.-]+(?:your\s+AI\s+coding\s+companion|your\s+AI\s+assistant|a\s+large\s+language\s+model|an\s+AI\s+assistant))?[,\.\s]*/gi, "I am " + modelName + ", ");
    res = res.replace(/ChatGPT(?:[\s,.-]+your\s+AI\s+coding\s+companion)/gi, modelName);
    res = res.replace(/your\s+AI\s+coding\s+companion/gi, "your AI assistant");
    res = res.replace(/\bChatGPT\b/gi, modelName);
    res = res.replace(/developed\s+by\s+OpenAI/gi, "developed by " + targetOwner);
    res = res.replace(/created\s+by\s+OpenAI/gi, "developed by " + targetOwner);
    res = res.replace(/by\s+OpenAI/gi, "by " + targetOwner);
    res = res.replace(/OpenAI\s+language\s+model/gi, modelName + " language model");
    if (!modelLower.includes("openai") && !modelLower.includes("gpt-")) {
      res = res.replace(/\bOpenAI\b/gi, targetOwner);
    }
  }

  // 2. Remove Claude / Anthropic leaks if not querying Claude
  if (!isClaude) {
    res = res.replace(/I['’]m\s+Claude(?:[\s,.-]+(?:a\s+large\s+language\s+model\s+created\s+by\s+Anthropic|an\s+AI\s+assistant))?[,\.\s]*/gi, "I'm " + modelName + ", ");
    res = res.replace(/I\s+am\s+Claude(?:[\s,.-]+(?:a\s+large\s+language\s+model\s+created\s+by\s+Anthropic|an\s+AI\s+assistant))?[,\.\s]*/gi, "I am " + modelName + ", ");
    res = res.replace(/\bClaude\b/gi, modelName);
    res = res.replace(/\bAnthropic\b/gi, targetOwner);
  }

  // 3. Remove DeepSeek leaks when the user is NOT explicitly querying a DeepSeek model
  if (!isDeepSeek) {
    res = res.replace(/developed\s+by\s+DeepSeek(?:\s+AI)?/gi, "developed by " + targetOwner);
    res = res.replace(/created\s+by\s+DeepSeek(?:\s+AI)?/gi, "developed by " + targetOwner);
    res = res.replace(/by\s+DeepSeek(?:\s+AI)?/gi, "by " + targetOwner);
    res = res.replace(/I['’]m\s+DeepSeek(?:-[A-Za-z0-9.]+|[\s_-]+V\d+(?:\.\d+)?(?:-[A-Za-z0-9]+)?|\s+Chat|\s+Coder|\s+AI)?[,\.\s]*/gi, "I'm " + modelName + ", ");
    res = res.replace(/I\s+am\s+DeepSeek(?:-[A-Za-z0-9.]+|[\s_-]+V\d+(?:\.\d+)?(?:-[A-Za-z0-9]+)?|\s+Chat|\s+Coder|\s+AI)?[,\.\s]*/gi, "I am " + modelName + ", ");
    res = res.replace(/DeepSeek(?:-[A-Za-z0-9.]+|[\s_-]+V\d+(?:\.\d+)?(?:-[A-Za-z0-9]+)?|\s+Chat|\s+Coder|\s+AI)?/gi, modelName);
  }

  // 4. Remove generic "I don't have a specific name" answers
  res = res.replace(/I don['’]t have a specific name(?:, but you can call me whatever you (?:like|prefer)!)?/gi, "I am " + modelName + ", developed by " + targetOwner + ".");

  // 5. Remove Kimi leaks when the user is NOT explicitly querying a Kimi model
  if (!isKimi) {
    res = res.replace(/Kimi\s*K3\s*by\s*Moonshot\s*AI/gi, modelName + " by " + targetOwner);
    res = res.replace(/Kimi\s*by\s*Moonshot\s*AI/gi, modelName + " by " + targetOwner);
    res = res.replace(/Moonshot\s*AI/gi, targetOwner);
    res = res.replace(/I['’]m\s+Kimi\s*K3/gi, "I'm " + modelName);
    res = res.replace(/I\s+am\s+Kimi\s*K3/gi, "I am " + modelName);
    res = res.replace(/I['’]m\s+Kimi/gi, "I'm " + modelName);
    res = res.replace(/I\s+am\s+Kimi/gi, "I am " + modelName);
  }

  return res;
}
