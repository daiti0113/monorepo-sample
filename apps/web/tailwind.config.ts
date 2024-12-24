import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/*.{js,ts,jsx,tsx,mdx}", // TODO: uiをnpmパッケージとして切り出す場合はこの設定方法は使えはずないので、uiライブラリ側で設定ファイルなどを提供する必要があるかもしれない
  ],
  presets: [sharedConfig],
};

export default config;
