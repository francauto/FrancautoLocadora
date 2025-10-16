# Dockerfile para aplicação React com Vite
# Imagem base para build
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --frozen-lockfile || yarn install --frozen-lockfile

COPY . .
RUN npm run build || yarn build

# Imagem base para servir arquivos estáticos
FROM nginx:alpine AS production

WORKDIR /usr/share/nginx/html

# Remove arquivos padrão do nginx
RUN rm -rf ./*

# Copia arquivos de build do estágio anterior
COPY --from=build /app/dist .

# Copia configuração customizada do nginx, se existir
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
