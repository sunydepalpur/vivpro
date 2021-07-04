

## Configuration
All the python dependencies are present in  `./app/requirements.txt` file. The dependencies can be installed using pip package manager. 

Modify the `docker-compose.yml` and `Dockerfile` to configure exposed ports, volume mounts, extra files, scripts etc.

## Using the image in development
To not have to rebuild the container each time you have updated your code. If you are using docker-compose, you can run the command:
```console
$ docker-compose build --no-cache && docker compose up --remove-orphans
```

This will build a docker image and with the dependencies in the requirements.txt file, and then run the container with the console attached.

## Using the image in developmentSwagger API Docs
All the api docs are present on endpoint  `localhost:port/apidocs/`

## Python Modules Used
* `flask` for API Development 

* `React` for UI Development 

* `requests` for url payload extraction 

* `flasgger` for Swaggeer Docs 

* `logging` for dev logging 

* `pytest` for app testing 

## Python Testing
For testing developer can use `pytest` module after starting up the server for local api testing
