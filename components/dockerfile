FROM registry.cn-hangzhou.aliyuncs.com/ulooo/nodejs:16.14.2-alpine3.15
LABEL org.opencontainers.image.authors="Robin Fu (fusc@ulooo.com)"
ENV HOST 0.0.0.0
RUN mkdir -p /data/frontend/ulooocom_homepage && chown -R www-data:www-data /data/frontend
COPY --chown=www-data:www-data ./ /data/frontend/ulooocom_homepage
WORKDIR /data/frontend/ulooocom_homepage
EXPOSE 3000
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g yarn && yarn add sharp
RUN npm install
#RUN npm run build
CMD ["npm", "start"]
