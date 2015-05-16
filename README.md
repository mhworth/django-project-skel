# Introduction
django-project-skel is useful both for kicking off new projects and learning about django and/or ReactJS. It unifies Django, ReactJS, and Webpack to allow for hot code updates, both in the UI (using the excellent webpack-dev-server) and in the backend (using Django's native reloading capability). Django is also configured to use [dj_static](https://github.com/kennethreitz/dj-static), which allows for reasonable production performance when serving static assets without the additional hassle of configuring a secondary webserver.

# Requirements
django-project-skel has the following requirements to get started (installing them is described in the following section):
* The [Anaconda python distribution](https://store.continuum.io/cshop/anaconda/)
* nodejs + npm

# Setting up development environment

First, install the [anaconda python distribution](https://store.continuum.io/cshop/anaconda/). You can confirm that python is correctly installed by looking at the output of the following command:

```
$ python -V
Python 2.7.9 :: Continuum Analytics, Inc.
```
You should see Continuum Analytics in the version string.

Next, install Django and Matt's binstar repository (for a couple of packages not natively available in Anaconda):

```
conda config --add channels https://conda.binstar.org/mhworth
conda install Django==1.8.1
```

You can test that django is installed correctly by running

```
$ django-admin --version
1.8.1
```

Install nodejs, npm, and grunt. nodejs and npm can be installed from the node js website, https://nodejs.org/. After node and npm are installed, you can install grunt with the following command:

```
npm install -g grunt
```

Once both of those are installed, run the following commands to install the dev dependencies:

```
cd <your project root>
conda install --file requirements.ana
cd <project_name>/ui
npm install
```

That's it!

# Developing

Run the following two commands in separate terminals to start up the development servers:

```
./manage.py runserver
```

```
cd <project_name>/ui
grunt webpack-dev-server
```

That will start the django dev server, running on port 8000 and the Webpack dev server running on 8080.

