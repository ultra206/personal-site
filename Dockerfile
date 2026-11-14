# --- Etapa 1: Build de la aplicación ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copilar dependencias
COPY package*.json ./
RUN npm ci

# Copiar el código fuente y construir
COPY . .
RUN npm run build

# --- Etapa 2: Servidor web con Nginx ---
FROM nginx:alpine

# Copiar los archivos compilados desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# (Opcional) Copiar configuración personalizada de Nginx para SPA si usas Vue Router
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]