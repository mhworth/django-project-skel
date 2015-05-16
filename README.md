# Setting up development environment

Install anaconda's python distribution and Django. You can test that django is installed correctly by running

```
django-admin --version
```

You'll want at least django 1.7.

Install nodejs, npm, and grunt. nodejs and npm can be installed from the node js website, https://nodejs.org/. Install grunt with

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

