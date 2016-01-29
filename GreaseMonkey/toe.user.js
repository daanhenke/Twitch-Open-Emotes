// ==UserScript==
// @name        SoberScript
// @namespace   drunkdevs
// @description Here ya go guy
// @include     http://www.twitch.tv/*
// @version     1
// @grant       none
// ==/UserScript==
//>> SETTINGS <<
settings =
{
    images: {
        'drunkDrunk': 'http://imgur.com/2ErHRz7',
        'drunkApple': 'http://hiddenlol.com/img/emotes/HdK.png'
    },
    interval: 5000
}

replaceMyJunk = function () {
    console.log('Ticking...');
    for (image in settings.images) {
        $('.message').each(function () {
            var text = $(this).text();
            var content = $(this).html();
            if (text.indexOf(image) > -1) {
                content = content.replace(image, '<img class="emoticon tooltip" srcset="' + settings.images[image] + '" alt="' + settings.images[image] + '" original-title="' + settings.images[image] + '"> </img>');
                $(this).html(content);
            }
        });
    }
}
setInterval(replaceMyJunk, settings.interval)
