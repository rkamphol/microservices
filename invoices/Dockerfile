FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:18 AS build
WORKDIR /srv
ADD package.json .
RUN npm install

FROM --platform=linux/amd64 public.ecr.aws/docker/library/node:18-slim
COPY --from=build /srv .
ADD . . 

CMD ["npm", "start"]

EXPOSE 3001
