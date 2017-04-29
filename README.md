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
If you are running ``` ng serve ``` inside Vagrant or any other virtual environment then it most likely won't work to access the app from outside the VM. If you want to make it accessible from outside then you have to use the host flag. Depending on the VMs IP address or host name, alter the following command to your needs:
* ```
    ng serve --host homestead.dev
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
```

Depending in your current node location, you have to alter the following step to your needs:

```
# Get node location
which node
# /usr/local/bin/node
sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/local/bin/node
```

There is some particular problem which occurs when you are using **Vagrant with an Ubuntu box on top of Windows**:

```
npm ERR! Linux 3.4.0+
npm ERR! argv "/usr/bin/nodejs" "/usr/bin/npm" "install" "acorn"
npm ERR! node v5.10.1
npm ERR! npm  v3.8.3
npm ERR! path ../acorn/bin/acorn
npm ERR! code EPERM
npm ERR! errno -1
npm ERR! syscall symlink

npm ERR! Error: EPERM: operation not permitted, symlink '../acorn/bin/acorn' -> '/mnt/r/path/node_modules/.bin/acorn'
npm ERR!     at Error (native)
npm ERR!  { [Error: EPERM: operation not permitted, symlink '../acorn/bin/acorn' -> '/mnt/r/path/node_modules/.bin/acorn']
npm ERR!   errno: -1,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'symlink',
npm ERR!   path: '../acorn/bin/acorn',
npm ERR!   dest: '/mnt/r/path/node_modules/.bin/acorn',
npm ERR!   parent: 'myproject' }
npm ERR!
npm ERR! Please try running this command again as root/Administrator.

npm ERR! Please include the following file with any support request:
npm ERR!     /mnt/r/path/npm-debug.log
```

It complains about that it's not able to create symlinks. This happens when your current project location is also part of the shared folder between host and guest. I solved this problem by starting the vagrant box with administrator rights. If you are using Cygwin in Windows or just the simple command prompt to start Vagrant then it is sufficient to start it with "Run as Administrator" and then using ``` vagrant up```.


Navigate to http://<hostname>:4200/. The app will automatically reload if you change any of the source files.

Additional commands of the Angular CLI can be found on its wiki page:

* https://github.com/angular/angular-cli/wiki
