# Building:
# docker build -t cows .

# Running:
# docker run cows <cow_number>

FROM mhart/alpine-node:4

RUN mkdir -p /code/
WORKDIR /code/
ADD package.json ./
ADD *.js ./
ADD cows.txt ./

ENTRYPOINT ["node", "show_cow.js"]
