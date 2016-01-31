// ==UserScript==
// @name        SoberScript
// @namespace   drunkdevs
// @description Here ya go guy
// @include     http://www.twitch.tv/*/chat?popout=
// @version     1
// @grant       none
// ==/UserScript==
//>> SETTINGS <<
settings =
{
    images: {
        'kappaDrunk': 'https://cdn.frankerfacez.com/emoticon/57884/1',
        'drunkApple': 'http://hiddenlol.com/img/emotes/HdK.png',
        'drunkPlease': 'http://mindromp.org/forum/images/smilies/Woot.gif'
    },
    interval: 200
};

replaceMyJunk = function () {
    for (var img in settings.images) {
        $('.message').each(function () {
            var text = $(this).text();
            var content = $(this).html();
            if (text.indexOf(img) > -1) {
                content = content.replace(img, '<img class="emoticon tooltip" srcset="' + settings.images[img] + '" alt="' + settings.images[img] + '" original-title="' + settings.images[img] + '"> </img>');
                $(this).html(content);
            }
        });
    }
};

setInterval(replaceMyJunk, settings.interval);
