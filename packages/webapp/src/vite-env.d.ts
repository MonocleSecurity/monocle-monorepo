/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST_SERVER: string
  readonly VITE_BRAND_NAME: string
  readonly VITE_BRAND_ICON: string
  readonly VITE_FEATURE_TIMELINE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}