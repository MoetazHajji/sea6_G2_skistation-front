FROM node:16.16.0 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4200

# Utilisation d'une image nginx pour servir l'application Angular
FROM nginx:latest

# Copier les fichiers de l'application construite  dans le serveur nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Commande pour démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
