// vite.config.js
import react from "file:///D:/Me/Project/React-Portofolio-master/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///D:/Me/Project/React-Portofolio-master/node_modules/vite/dist/node/index.js";
var vite_config_default = defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2e5,
    // Batas ukuran chunk untuk peringatan
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          } else if (id.includes("src/utils")) {
            return "utils";
          } else if (id.includes("src/component")) {
            return "component";
          } else if (id.includes("src/hoc")) {
            return "hoc";
          }
          return "main";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNZVxcXFxQcm9qZWN0XFxcXFJlYWN0LVBvcnRvZm9saW8tbWFzdGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxNZVxcXFxQcm9qZWN0XFxcXFJlYWN0LVBvcnRvZm9saW8tbWFzdGVyXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9NZS9Qcm9qZWN0L1JlYWN0LVBvcnRvZm9saW8tbWFzdGVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcblxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDoge1xuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMjAwMDAwLCAvLyBCYXRhcyB1a3VyYW4gY2h1bmsgdW50dWsgcGVyaW5nYXRhblxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAvLyBNZW5nYXR1ciBwZW5nZWxvbXBva2FuIGtvZGUgYmVyZGFzYXJrYW4ga29uZGlzaSB5YW5nIHNlc3VhaVxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9yJzsgLy8gTWVuZ2Vsb21wb2trYW4ga29kZSBkYXJpIG5vZGVfbW9kdWxlcyBrZSBjaHVuayBcInZlbmRvclwiXG4gICAgICAgICAgfSBlbHNlIGlmIChpZC5pbmNsdWRlcygnc3JjL3V0aWxzJykpIHtcbiAgICAgICAgICAgIHJldHVybiAndXRpbHMnOyAvLyBNZW5nZWxvbXBva2thbiBrb2RlIGRhcmkgZGlyZWt0b3JpIFwidXRpbHNcIiBrZSBjaHVuayBcInV0aWxzXCJcbiAgICAgICAgICB9IGVsc2UgaWYgKGlkLmluY2x1ZGVzKCdzcmMvY29tcG9uZW50JykpIHtcbiAgICAgICAgICAgIHJldHVybiAnY29tcG9uZW50J1xuICAgICAgICAgIH0gZWxzZSBpZiAoaWQuaW5jbHVkZXMoJ3NyYy9ob2MnKSkge1xuICAgICAgICAgICAgcmV0dXJuICdob2MnXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE1lbmdlbWJhbGlrYW4gbmlsYWkgZGVmYXVsdCAobWVuZ2Vsb21wb2trYW4ga29kZSBrZSBkYWxhbSBjaHVuayBkZWZhdWx0KVxuICAgICAgICAgIHJldHVybiAnbWFpbic7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIFxuICBcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlTLE9BQU8sV0FBVztBQUMzVCxTQUFTLG9CQUFvQjtBQUk3QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsT0FBTztBQUFBLElBQ0wsdUJBQXVCO0FBQUE7QUFBQSxJQUN2QixlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixhQUFhLElBQUk7QUFFZixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IsbUJBQU87QUFBQSxVQUNULFdBQVcsR0FBRyxTQUFTLFdBQVcsR0FBRztBQUNuQyxtQkFBTztBQUFBLFVBQ1QsV0FBVyxHQUFHLFNBQVMsZUFBZSxHQUFHO0FBQ3ZDLG1CQUFPO0FBQUEsVUFDVCxXQUFXLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDakMsbUJBQU87QUFBQSxVQUNUO0FBRUEsaUJBQU87QUFBQSxRQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBR0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
