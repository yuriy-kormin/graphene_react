FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ["app/backend/pyproject.toml","app/backend/poetry.lock","README.md","/poetry/"]
COPY Docker/backend/docker-entrypoint.sh /
WORKDIR /poetry

RUN python3 -m pip install --upgrade pip &&\
    pip3 install gunicorn poetry && \
    poetry config virtualenvs.create false && \
    poetry install --no-root

CMD ["/docker-entrypoint.sh"]