/*AJAX*/
function request(url, callback) {
    var r = new XMLHttpRequest();
    r.open('GET', url, true);

    r.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                callback(this.responseText);
            } else {
                // Error :(
            }
        }
    };

    r.send();
    r = null;
}

function post(url, data, callback) {
    var r = new XMLHttpRequest();
    r.open('GET', url, true);

    r.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                if (callback !== undefined) {
                    callback(this.responseText)
                }
            } else {
                // Error :(
            }
        }
    };

    r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    r.send(data);
    r = null;
}

/*EFFECTS*/
function fadeIn(el) {
    var opacity = 0;

    el.style.opacity = 0;
    el.style.filter = '';

    var last = +new Date();
    var tick = function() {
        opacity += (new Date() - last) / 400;
        el.style.opacity = opacity;
        el.style.filter = 'alpha(opacity=' + (100 * opacity) | 0 + ')';

        last = +new Date();

        if (opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

function fadeOut(el) {
    var opacity = 1;

    el.style.opacity = 1;
    el.style.filter = '';

    var last = +new Date();
    var tick = function() {
        opacity -= (new Date() - last) / 400;
        el.style.opacity = opacity;
        el.style.filter = 'alpha(opacity=' + (100 * opacity) | 1 + ')';

        last = +new Date();

        if (opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();
}

function hide(el) {
    el.style.display = 'none';
}

function show(el) {
    el.style.display = '';
}

/*ELEMENTS*/
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        var current = el.className,
            found = false;
        var all = current.split(' ');
        for (var i = 0; i < all.length, !found; i++) found = all[i] === className;
        if (!found) {
            if (current === '') el.className = className;
            else el.className += ' ' + className;
        }
    }
}

function after(target, element) {
    target.insertAdjacentElement('afterend', element);
}

function before(target, element) {
    target.insertAdjacentElement('beforebegin', element);
}

function append(target, el) {
    parent.appendChild(el);
}

function children(el) {
    var children = [];
    for (var i = el.children.length; i--;) {
        // Skip comment nodes on IE8
        if (el.children[i].nodeType != 8)
            children.unshift(el.children[i]);
    }
    return children
}

function clone(el) {
    el.cloneNode(true);
}

function contains(el, child) {
    el !== child && el.contains(child);
}

function each(selector, fn) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
}

function empty(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

function filter(selector, filterFn) {
    var elements = document.querySelectorAll(selector);
    var out = [];
    for (var i = elements.length; i--;) {
        if (filterFn(elements[i]))
            out.unshift(elements[i]);
    }
    return out;
}

function find(el, selector) {
    if (selector === undefined) {
        selector = el;
        el = document;
    }
    el.querySelectorAll(selector);
}

function attr(el, a) {
    el.getAttribute(a);
}
