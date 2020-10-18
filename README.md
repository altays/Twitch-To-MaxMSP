
# Twitch-To-MaxMSP

![NODE-MAX/MSP](https://img.shields.io/badge/NODE-MAX/MSP-green)

***

## Description

This project utilizes the [Twitch Messaging Interface package](https://github.com/tmijs/tmi.js), the [datagram](https://nodejs.org/api/dgram.html) module in NodeJS, and the sadam library by [Ádám Siska](http://www.sadam.hu/) to pull messages from Twitch and present them in a readable form in Max/MSP

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Questions](#Questions)
5. [Acknowledgements](#Acknowledgements)

***

## Installation

To install this project, clone the repo and install the modules via npm install. 

Be sure to install the [sadam library](http://www.sadam.hu/hu/node/1), create an app through the [Twitch Developer portal](https://dev.twitch.tv/console), and create a .env file. Set the CHANNEL_NAME, OAUTH_TOKEN, and BOT_USERNAME from Twitch in the .env file.

To start up the app, use npm run start and open up the max/msp patch.

## Usage

The sadam Library uses the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License, except for [sadam.lzo], which is a GPLv2 project. 

## License

Copyright (c) 2020 Alex Taylor. Released under MIT. See the LICENSE file for more details.

## Questions

For any questions, please contact the owner at altays633@gmail.com

![](https://avatars.githubusercontent.com/u/12203157?&s=200)