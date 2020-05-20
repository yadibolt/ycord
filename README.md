# YCORD

Don't bother ever again to create Discord Bot project from scratch.
YCORD is here!

# What?

YCORD helps you with your struggle and save you a lot of time configuring your Discord bot project.
Create a new project in couple of seconds.

YCORD is currently supporting only JavaScript projects. TypeScript? Maybe in the future.

## Installation

Get your own YCORD simply by running `npm install -g ycord` on your terminal.  (Global installation)

## Functionality

> Start by generating a new project. Type `ycord` on your terminal and follow the steps.

> Please note that YCORD creates project in directory where you run the command.
  for example: `C:\<Users>\<User>\Desktop>ycord` creates a project with name you've specified on your desktop.

> Once's everything done, you can go in to your project and type `node .` or `node \src\client.js` to start your bot.

> YCORD is not gathering any type of information or data that you provide.

## Command generating

> By running `ycord gc <name> <category>`, new command will be generated with specified category which has its own directory.
  If directory already exists YCORD will ignore creating that directory and creates only command instead.

## Event generating

> Event(s) are generated simply by `ycord ge <event>`. This is case-sensitive.
  If you don't know the event names you can run `ycord lse` and YCORD will output all events.