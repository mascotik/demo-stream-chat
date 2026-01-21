/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_GROUP_CHAT_URL: string;
  readonly VITE_USER_ID: string;
  readonly VITE_USER_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
