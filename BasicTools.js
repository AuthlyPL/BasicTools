var loops = [];
var debug = false;

/* DEBUG */
const debugTools = (toggle) =>
{
    debug = toggle;
    console.log('Debug mode: ' + (debug ? "Enabled" : "Disabled"));
};
/* LOOP */
class Loop 
{
    constructor(id, seconds, cb)
    {
        if (debug) console.log('Created loop: ' + id + ' (Seconds: ' + seconds + ')');
        var intv = setInterval(() =>
        {
            cb();
        }, (seconds * 1000));
        loops[loops.length] = {id: id, intv: intv};
    }
};
const stopLoop = (id) =>
{
    var index = -1;
    for (var loop of loops)
    {
        index += 1;
        if (loop.id === id)
        {
            if (debug) console.log('Stopped loop: ' + id);
            clearInterval(loop.intv);
            loops.splice(index, 1);
            break;
        }
    }
};
/* META */
class AnimatedTitle 
{
    constructor(titles, change)
    {
        var index = 0;
        document.title = titles[index];
        if (debug) console.log('Title changed to: INDEX-' + index + " (" + titles[index] + ")");
        index += 1;
        new Loop('BasicTools-Animated-Title', change, () =>
        {
            if (debug) console.log('Title changed to: INDEX-' + index + " (" + titles[index] + ")");
            document.title = titles[index];
            index += 1;
            if (index === titles.length)
            {
                index = 0;
            }
        });
    }
};
class AnimatedIcon
{
    constructor(images, change)
    {
        var index = 0;
        var icon  = document.querySelector("link[rel~='icon']");
        if (!icon)
        {
            icon = document.createElement('link');
            icon.rel = 'icon';
            document.head.appendChild(icon);
        }
        icon.href = images[index];
        if (debug) console.log('Image changed to: INDEX-' + index + " (" + images[index] + ")");
        index += 1;
        new Loop('BasicTools-Animated-Icon', change, () =>
        {
            icon.href = images[index];
            if (debug) console.log('Image changed to: INDEX-' + index + " (" + images[index] + ")");
            index += 1;
            if (index === images.length)
            {
                index = 0;
            }
        });
    }
};
/* USER */
const copyText = (text) =>
{
    if (!document.hasFocus) return;
    navigator.clipboard.writeText(text);
    if (debug) console.log('Copied text: ' + text);
}
const isMobile = () =>
{
    var mobile  = false;
    var ua      = navigator.userAgent;
    var mobiles = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    for (var device of mobiles)
    {
        if (ua.match(device))
        {
            mobile = true;
            break;
        }
    }
    if (debug) console.log('Checked if mobile. (Result: ' + mobile + ")");
    return mobile;
};
/* UI */
class CenterFixed
{
    constructor(inner, idToAppend)
    {
        var elm = document.createElement('div');
        elm.style.position  = 'fixed';
        elm.style.top       = '50%';
        elm.style.left      = '50%';
        elm.style.transform = 'translate(-50%, -50%)';
        elm.innerHTML = inner;
        switch (typeof idToAppend === 'undefined')
        {
            case true:
                document.body.appendChild(elm);
                break;
            case false:
                document.getElementById(idToAppend).appendChild(elm);
                break;
        }
        if (debug) console.log('Created fixed center element.');
    }
}
class FooterFixed
{
    constructor(isCenter, left, translateX, bottom, background, inner, width, height, idToAppend)
    {
        var elm            = document.createElement('footer');
        elm.style.position = 'fixed';
        switch (isCenter)
        {
            case true:
                elm.style.left      = '50%';
                elm.style.transform = 'translateX(-50%)';
                break;
            case false:
                elm.style.left      = left;
                elm.style.transform = 'translateX(' + translateX + ')';
                break;
        }
        elm.style.bottom     = bottom;
        elm.style.background = background;
        elm.style.width      = width;
        elm.style.height     = height;
        elm.innerHTML        = inner;
        switch (typeof idToAppend === 'undefined')
        {
            case true:
                document.body.appendChild(elm);
                break;
            case false:
                document.getElementById(idToAppend).appendChild(elm);
                break;
        }
        if (debug) console.log('Created fixed footer.');
    }
}
/* COOKIES */
const addCookie    = (id, value, days) =>
{
    var timeAddon = '';
    if (typeof days !== 'undefined')
    {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        timeAddon = ';expires=' + date.toUTCString(); + ";path=/";
    }
    document.cookie = `${id}=${value}` + timeAddon;
    if (debug) console.log('Added / Updated cookie. (ID: ' + id + ", Value = " + value + ")");
};
const deleteCookie = (id) =>
{
    document.cookie = `${id}=`;
    if (debug) console.log('Deleted cookie. (ID: ' + id + ")");
};
const getCookieValue = (id) =>
{
    let key   = id + "=";
    let dc    = decodeURIComponent(document.cookie);
    let ca    = dc.split(';');
    var value = '';
    for(let i = 0; i <ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(key) == 0) 
        {
            value = c.substring(key.length, c.length);
        }
    }
    if (debug) console.log('Checked value of cookie. (Result: ' + (value === '' ? 'None' : value) + ")");
    return value;
}
const cookieExists = (id) =>
{
    let key    = id + "=";
    let dc     = decodeURIComponent(document.cookie);
    let ca     = dc.split(';');
    var result = false;
    for(let i = 0; i <ca.length; i++) 
    {
        let c = ca[i];
        while (c.charAt(0) == ' ') 
        {
            c = c.substring(1);
        }
        if (c.indexOf(key) == 0) 
        {
            result = true;
        }
    }
    if (debug) console.log('Checked value of cookie. (Result: ' + result + ')');
    return result;
}