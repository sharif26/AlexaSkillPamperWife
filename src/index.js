'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = "amzn1.ask.skill.6e3c7830-c5ce-42bf-8fa0-0e149d1c1c9f";

var SKILL_NAME = "Pamper Wife";
var GET_FACT_MESSAGE = "Here's what I wanna say to your wife: ";
var HELP_MESSAGE = "You can say tell me something, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "I may not always understand you, but I’m trying because I love you. Thanks for being patient with me.",
    "You are the perfect dose of love. Love you!",
    "You’re my best reason to go to bed at night and my best reason to get up in the morning. Can’t wait to see you later today!",
    "My life would not be so wonderful if you were not in it.",
    "Hey Honey, I miss you so much!",
    "Hi Sweetu, Thinking of you makes me smile.",
    "Hi Babe, How could you always look so beautiful!",
    "Hey Princess, You are perfect just the way you are!",
    "Hi doll, I think of you every waking moment of my life.",
    "Hey Girl, You are the reason I believe in soulmates.",
    "My wife, life would not be so wonderful if you were not in it.",
    "You are the best thing in my life, sweetheart!",
    "Hey cutie, I would be lost without your support. Thank you!"
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a space fact, or, you can say exit... What can I help you with?"; //HELP_MESSAGE;
        var reprompt = "What can I help you with?"; //HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
