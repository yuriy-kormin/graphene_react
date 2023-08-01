FROM python:3.11-slim
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY ["app/backend/pyproject.toml","app/backend/poetry.lock","README.md","/poetry/"]
COPY Docker/backend/docker-entrypoint.sh /
COPY app/backend/manage.py /app/
WORKDIR /poetry

RUN apt update && \
    python3 -m pip install --upgrade pip &&\
    pip3 install gunicorn && \
    pip3 install poetry && \
    poetry config virtualenvs.create false && \
    poetry install --no-root && \
    apt-get clean -y \

CMD ["/docker-entrypoint.sh"]