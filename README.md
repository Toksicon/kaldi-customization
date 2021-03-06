# Kaldi Customization
This is the main repository of the IT-Project "Missing Title".
The [report](https://git.informatik.fh-nuernberg.de/kaldi/documentation/blob/master/report/report.pdf) with additional information is stored in the [documentation repository](https://git.informatik.fh-nuernberg.de/kaldi/documentation).

## Quick start & initial setup guide
### Requirements
 * [Docker](https://www.docker.com/)
 * [Docker Compose](https://docs.docker.com/compose/)
 * [Git](https://git-scm.com/) to download this repository
 * [Python3](https://www.python.org/) for the initialization
 * Prerequisites for the python package [mysqlclient](https://pypi.org/project/mysqlclient/) also for the initialization

### Start the compose
 * Open a shell
 * Clone this repository to your local system: `git clone https://git.informatik.fh-nuernberg.de/kaldi/kaldi-customization.git` and switch into the repository folder (first time only)
 * Use the [env.cmd](env.cmd) or [env.sh](env.sh) script in your shell to setup the environment variables for docker-compose
 * Build or import missing docker images (first time only)
    * kaldi-base: See [kaldi/base/README.md](kaldi/base/README.md). Note: Make sure the name of the image matches the name in the corresponding [Dockerfile](worker/kaldi-worker/Dockerfile#L1).
    * Create all other images by starting the docker-compose or by executing `docker-compose build`
 * Start the customization service:
    * Load the compose with `docker-compose up` and have a cup of tea or coffee
    * Wait until the service is online (website is reachable: [localhost:8080](http://localhost:8080))
    * To scale the amount of workers, use the [`--scale` parameter](https://docs.docker.com/compose/reference/up/) for `docker-compose up`, available workers are `text-preparation-worker`, `data-preparation-worker`, `kaldi-worker` and `decode-worker`
 * Use the initialization script [initialization/init.py](initialization/init.py) (first time only):
    * A few [modules](initialization/requirements.txt) are required to execute the script: For example use [pip](https://pip.pypa.io/) and [pipenv](http://docs.pipenv.org/en/latest/basics/#example-pipenv-workflow):
        * Open another shell
        * `pipenv install` and `pipenv shell` to activate the pipenv shell
        * `pip install -r ./initialization/requirements.txt` to install the [requirements](initialization/requirements.txt)
        * Note: If an error occurs, verify that the prerequisites for the python package [mysqlclient](https://pypi.org/project/mysqlclient/) are installed
    * Execute `python ./initialization/init.py` to prepare the database and upload default model data

### The customization service is now available
 * Web Interface: [localhost:8080](http://localhost:8080)
 * Web API: [localhost:8080/api](http://localhost:8080/api)

### Stop the service
 * Make sure that there are no running jobs like a training
 * Use `docker-compose stop` in the repository folder or press `Ctrl + c` in the shell where you startet the compose
 * All data (database, files) are stored persistantly on the local disk
 * Use `docker-compose down` to shut down the service *and delete the database*

## Structure of the repository
### [/docker-compose.yml](docker-compose.yml)
This file defines the service. It is used by docker to build and run the images/containers.
### /api
Definition of the public API. See [api/README.md](api/README.md) for further information.
### /config
Contains some global settings for the docker-compose.
### /dfs
Persistent storage for database (/dfs/mariadb) and file serivce (/dfs/data).  
**Do not touch manually!**  
Use a SQL explorer (e.g. [MySQL Workbench](https://www.mysql.com/products/workbench/)) and the MinIO web client at [localhost:9001](http://localhost:9001) instead.
### /initialization
As the name indicates: Preparation for the first usage. See [initial setup guide](#quick-start-initial-setup-guide).  
Contains also the [pretrained acoustic models](/initialization/acoustic-models).
### /kaldi
Our docker image with a kaldi installation. Use the base image and see the [README](kaldi/base/README.md) there.
### /server
The server components to run the kaldi customization web service.
#### /server/api
This is the API backend. It provides access to the features of the kaldi customization web service and handles authentication.  
See the [README](server/api/README.md).
#### /server/web
This is the web frontend for users. It offers a user interface to train and test user defined ASR.
### /shared
Scripts and resources which are used by several components.
### /worker
The worker directory contains the workers used in the backend to process the user requests via the API.  
See the directories for further information about the workers:
* [text-preparation-worker](worker/text-preparation-worker/README.md): Extract text from uploaded resource files.
* [data-preparation-worker](worker/data-preparation-worker/README.md): Prepares the training process.
* [kaldi-worker](worker/kaldi-worker/README.md): This is the general kaldi-worker to process ASR testing.
* [decode-worker](worker/decode-worker/README.md): Decodes audio to text.


## Further Docker Images
### MariaDB Server
A SQL Server for the persistent data.
### Redis Server
An in memory Redis Server for the task queue.

### API Functions
See [localhost:8080/api/v1/ui](http://localhost:8080/api/v1/ui).
