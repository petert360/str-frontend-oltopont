FROM node:latest

# app könyvtár létrehozása és beállítása munkakönyvtárként
WORKDIR '/app'

# függőségek telepítése
# package.json ÉS package-lock.json átmásolása
COPY package*.json ./
RUN npm install

# az applikáció forrásának átmásolása
COPY . .

EXPOSE 3000

# az npm "start" srcipt indítása
CMD ["npm", "run", "start"]
