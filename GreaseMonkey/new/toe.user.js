// ==UserScript==
// @name        SoberScript
// @namespace   drunkdevs
// @description Here ya go guy
// @include     http://www.twitch.tv/*
// @version     2
// @grant       none
// ==/UserScript==

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
    if(name == null || url == null)
    {
        return null;
    }
    else
    {
        return '<img class="emoticon tooltip" srcset="' + url + '" alt="' + name + '" title="' + name + '" />'
    }
}

function getUpdatedMessages()
{
    //Do stuff
}