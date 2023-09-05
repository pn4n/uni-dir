FROM directus/directus:latest

COPY ./database /directus/database
COPY ./uploads /directus/uploads

ENV KEY=111-some-random-value-1
ENV SECRET=333-some-random-value-3
ENV ADMIN_EMAIL=jm51@bk.ru
ENV ADMIN_PASSWORD=fffpTBh9waXqAE_p-8ponk
ENV DB_CLIENT=sqlite3
ENV DB_FILENAME=/directus/database/data.db
ENV WEBSOCKETS_ENABLED=true

EXPOSE 8055 
