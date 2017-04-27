# Angular-Playground

This repository merely serves the purpose of learning Angular (v2/v4). I will document all steps during the learning process which I find worthy to write down.

## Installing the Angular CLI

First of all, you need to have NodeJs installed on your machine in order to install the Angular CLI through npm. Just go to its website and install the latest version of NodeJs:

* https://nodejs.org/en/

The Angular CLI will make your life much simpler if you want to develop Angular applications. 
It has a variety of useful commands built right into it. You can find the official documentation of the Angular CLI right here: 

* https://cli.angular.io/

To install the Angular CLI:
* ``` npm install -g @angular/cli  ```

If you are on a linux machine (i.e. ubuntu) you likely have to use the sudo command to install it globally:

* ``` sudo npm install -g @angular/cli  ``` 

Generating and serving an Angular project via a development server Create and run a new project:
* ```
	ng new my-project
	cd new-project
	ng serve
If you're on an Ubuntu machine and you get an error like this when trying to create a project through ``` ng new my-poject```:

```
vagrant@homestead:~$ ng new my-project
/usr/lib/node_modules/@angular/cli/models/config/config.js:16
    constructor(_configPath, schema, configJson, fallbacks = []) {
                                                           ^

SyntaxError: Unexpected token =
    at exports.runInThisContext (vm.js:53:16)
    at Module._compile (module.js:387:25)
    at Object.Module._extensions..js (module.js:422:10)
    at Module.load (module.js:357:32)
    at Function.Module._load (module.js:314:12)
    at Module.require (module.js:367:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/usr/lib/node_modules/@angular/cli/models/config.js:3:18)
    at Module._compile (module.js:413:34)
    at Object.Module._extensions..js (module.js:422:10)
```
then it's very likely that your node version is too old. Just update it like this (on a Ubuntu machine):

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable

sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/node 
```


Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Additional commands of the Angular CLI can be found on its wiki page:

* https://github.com/angular/angular-cli/wiki
