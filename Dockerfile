# pakai node image
FROM node:20

# buat working directory di container
WORKDIR /app

# copy package.json dulu
COPY package*.json ./

# install dependencies
RUN npm install

# copy semua file project
COPY . .

# port yang dipakai express
EXPOSE 3000

#port yang dipakai
EXPOSE 5000

# jalankan server
CMD ["npm", "start", "dev"]