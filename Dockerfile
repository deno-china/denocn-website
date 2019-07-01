FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html/
COPY ./public /usr/share/nginx/html/
