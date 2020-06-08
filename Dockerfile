FROM node12

WORKDIR /src
ADD src src
ADD package.json package.json
ADD package-lock.json package-lock.json

CMD node src/index.js