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
Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
