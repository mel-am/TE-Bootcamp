const cookieBtn = document.getElementById("cookieBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const cookieSpan = document.getElementById("cookieSpan");
const cpsSpan = document.getElementById("cpsSpan");


//default starting value
const stats = {
    cookieCount: 0,
    cps: 0, // cookies per second

};

//local storage update
const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
    stats.cookieCount = storageStats.cookieCount;
    stats.cps = storageStats.cps;
    updatePage();

}

function buyCookie() {
    stats.cookieCount++;
    updatePage();
    updateStorage();
}

function buyGrandma() {
    stats.cps++;
    stats.cookieCount -= 10; // shorthand for take away 10
    updatePage();
    updateStorage();

}

function buyMachine() {
    stats.cps++;
    stats.cookieCount -= 10; // shorthand for take away 10
    updatePage();
    updateStorage();

}

function updatePage() {
    cookieSpan.textContent = stats.cookieCount;
    cpsSpan.textContent = stats.cps;
}

function updateStorage() {
    localStorage.setItem("stats", JSON.stringify(stats))
}


cookieBtn.addEventListener("click", buyCookie);
upgradeBtn.addEventListener("click", buyUpgrade);

setInterval(function() {
    stats.cookieCount += stats.cps;
    updatePage();
    updateStorage();
}, 1000);