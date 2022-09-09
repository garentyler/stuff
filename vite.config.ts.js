"use strict";

// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
var vite_config_default = defineConfig({
  clearScreen: false,
  server: {
    strictPort: true
  },
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    target: ["es2021", "chrome100", "safari13"],
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    sourcemap: !!process.env.TAURI_DEBUG
  },
  plugins: [vue()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIC8vIFByZXZlbnQgVml0ZSBmcm9tIG9ic2N1cmluZyBSdXN0IGVycm9yc1xuICBjbGVhclNjcmVlbjogZmFsc2UsXG4gIC8vIFRhdXJpIGV4cGVjdHMgYSBmaXhlZCBwb3J0LCBmYWlsIGlmIHRoYXQgcG9ydCBpcyBub3QgYXZhaWxhYmxlXG4gIHNlcnZlcjoge1xuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gIH0sXG4gIC8vIFRvIG1ha2UgdXNlIG9mIGBUQVVSSV8qYCB2YXJpYWJsZXNcbiAgZW52UHJlZml4OiBbJ1ZJVEVfJywgJ1RBVVJJXyddLFxuICBidWlsZDoge1xuICAgIC8vIFRhdXJpIHN1cHBvcnRzIEVTMjAyMVxuICAgIHRhcmdldDogWydlczIwMjEnLCAnY2hyb21lMTAwJywgJ3NhZmFyaTEzJ10sXG4gICAgLy8gRG9uJ3QgbWluaWZ5IGRlYnVnIGJ1aWxkc1xuICAgIG1pbmlmeTogIXByb2Nlc3MuZW52LlRBVVJJX0RFQlVHID8gJ2VzYnVpbGQnIDogZmFsc2UsXG4gICAgLy8gUHJvZHVjZSBzb3VyY2VtYXBzIGZvciBkZWJ1ZyBidWlsZHNcbiAgICBzb3VyY2VtYXA6ICEhcHJvY2Vzcy5lbnYuVEFVUklfREVCVUcsXG4gIH0sXG4gIHBsdWdpbnM6IFsgdnVlKCkgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7QUFBQTtBQUNBO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFFMUIsYUFBYTtBQUFBLEVBRWIsUUFBUTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUVBLFdBQVcsQ0FBQyxTQUFTLFFBQVE7QUFBQSxFQUM3QixPQUFPO0FBQUEsSUFFTCxRQUFRLENBQUMsVUFBVSxhQUFhLFVBQVU7QUFBQSxJQUUxQyxRQUFRLENBQUMsUUFBUSxJQUFJLGNBQWMsWUFBWTtBQUFBLElBRS9DLFdBQVcsQ0FBQyxDQUFDLFFBQVEsSUFBSTtBQUFBLEVBQzNCO0FBQUEsRUFDQSxTQUFTLENBQUUsSUFBSSxDQUFFO0FBQ25CLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==