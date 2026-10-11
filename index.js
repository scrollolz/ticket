let expire = new Date();

expire.setHours(expire.getHours() + 3);
let expireDate = expire.toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' });
let expireTime = expire.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


var clockElement = document.getElementById("clock");

function updateClock(clock) {
    clock.innerHTML = new Date().toLocaleTimeString();
}

setInterval(function() {
    updateClock(clockElement);
}, 1000);

let expires = "Expires " + expireDate + " at " + expireTime;
document.getElementById("expireSentence").innerText = expires;
