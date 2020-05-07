## Installation
- Open git bash
- Clone repository
```sh
git clone https://github.com/amjedomar/atco-simple-example.git atco-simple-example
```
- Navigate to project
```sh
cd atco-simple-example
```
- Install dependencies
```
yarn
```

## Run Locally
> Open git bash and navigate to `atco-simple-example`
- To start the development server run
```
yarn start:dev
```
- To start the production server, first install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli) then run
```sh
heroku local web
```

## Deploy To Heroku

- [Create Heroku App](https://dashboard.heroku.com/new-app)
- Open git bash and navigate to `atco-simple-example`
- Make sure that you installed [heroku cli](https://devcenter.heroku.com/articles/heroku-cli)
- Login to heroku via cli
```sh
heroku login
```
- Add heroku remote (**note:** make sure to replace `<your-app-name>` with your app name)
```sh
heroku git:remote -a <your-app-name>
```
> 
- Push app to heroku
```sh
git push heroku master
```
