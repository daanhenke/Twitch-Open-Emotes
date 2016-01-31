// ==UserScript==
// @name        SoberScript
// @namespace   drunkdevs
// @description Here ya go guy
// @include     http://www.twitch.tv/*
// @version     2
// @grant       none
// ==/UserScript==

//Temporary settings file (Will be replaced by a settings menu thingy)
settings =
{
    emotes:
    {
        "__any__":
        {
            "KappaKush": "https://cdn.frankerfacez.com/emoticon/57884/1"
        }
    },
    classes: [".chat-lines", ".conversation-chat-lines"]
};

function isValidEmote(emote, text)
{
    var place = text.indexOf(emote);

    if(place > -1)
    {
        var place_before = text.charAt(place - 1);
        var place_after = text.charAt(place + emote.length);

        if(place_before == "" || place_before == " ")
        {
            if(place_after == "" || place_after == " ")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

function getImageObject(name, url)
{
    return '<img class="emoticon tooltip" srcset="' + url + '" alt="' + name + '" title="' + name + '" />';
}

function makeObserver(callback, options)
{
    return new MutationObserver(callback, options)
}

function addUpdater(element, observer)
{
    observer.observe(element);
}

function handleUpdate(elem)
{
    //.text = "Banana's";e
    console.log("YASSSSS");
}

function main()
{
    console.log("Started Sober");
    //for(var cl in settings.classes)
    {
        console.log("blub", $(settings.classes[0][0]));
        var observer = makeObserver(handleUpdate, {childList: true});
        addUpdater($(settings.classes[0][0]), observer);
    }
}

$(function() {
    setTimeout(main, 5000);
});