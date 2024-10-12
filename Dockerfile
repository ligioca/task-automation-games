FROM mcr.microsoft.com/playwright:v1.47.2-focal
WORKDIR /app
COPY package.json ./
RUN npm install
RUN apt-get install xvfb
COPY ./ ./
RUN npx playwright install
