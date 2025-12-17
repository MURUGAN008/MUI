FROM node:20

WORKDIR /app

# install pnpm
RUN npm install -g pnpm

# copy dependency files
COPY package.json pnpm-lock.yaml ./

# install deps
RUN pnpm install

# copy source code
COPY . .

# build frontend
RUN pnpm build

# vite preview runs on 4173
EXPOSE 4173

# run built app
CMD ["pnpm", "preview", "--host"]
