FROM python:3.8
LABEL maintainer="Somesh CHoudhary"

COPY ./app /app
WORKDIR /app
RUN pip install -r backend/requirements.txt

EXPOSE 5000

# command to run on container start
CMD [ "python", "backend/app.py" ]