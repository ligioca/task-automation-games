FROM --platform=linux/amd64 mcr.microsoft.com/playwright:focal
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN apt-get install xvfb
COPY ./ ./
RUN npx playwright install