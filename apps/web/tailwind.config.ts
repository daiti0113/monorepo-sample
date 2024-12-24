import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import { tailwindContent } from "@repo/ui/tailwindContent";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ...tailwindContent(),
  ],
  presets: [sharedConfig],
};

export default config;
