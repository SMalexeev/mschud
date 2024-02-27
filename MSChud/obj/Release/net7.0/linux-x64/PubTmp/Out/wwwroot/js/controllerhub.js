var connection = new signalR.HubConnectionBuilder().withUrl("/hubs/controllerhub").build();

connection.start().then();

//Thirst Functions
// #region Thirst Func
function thirst1() {
    var value = parseInt(document.getElementById("thirstCount").innerHTML);
    if (value < 100) {
        value++;
    }
    connection.invoke("SetThirst", value);
};

function thirst10() {
    var value = parseInt(document.getElementById("thirstCount").innerHTML);
    if (value < 100) {
        value += 10;
    }
    connection.invoke("SetThirst", value);
};

function thirst100() {
    connection.invoke("SetThirst", 100);
};

function thirst0() {
    connection.invoke("SetThirst", 0);
};

function thirstminus1() {
    var value = parseInt(document.getElementById("thirstCount").innerHTML);
    if (value > 0) {
        value--;
    }
    connection.invoke("SetThirst", value);
};

function thirstminus10() {
    var value = parseInt(document.getElementById("thirstCount").innerHTML);
    if (value > 0) {
        value -= 10;
    }
    connection.invoke("SetThirst", value);
};

function thirstCustom() {
    var value = parseInt(document.getElementById("thirstValue").value);
    connection.invoke("SetThirst", value);
}
// #endregion Thirst Func

//Hunger Functions
// #region Hunger Func
function hunger1() {
    var value = parseInt(document.getElementById("hungerCount").innerHTML);
    if (value < 100) {
        value++;
    }
    connection.invoke("SetHunger", value);
};

function hunger10() {
    var value = parseInt(document.getElementById("hungerCount").innerHTML);
    if (value < 100) {
        value += 10;
    }
    connection.invoke("SetHunger", value);
};

function hunger100() {
    connection.invoke("SetHunger", 100);
};

function hunger0() {
    connection.invoke("SetHunger", 0);
};

function hungerminus1() {
    var value = parseInt(document.getElementById("hungerCount").innerHTML);
    if (value > 0) {
        value--;
    }
    connection.invoke("SetHunger", value);
};

function hungerminus10() {
    var value = parseInt(document.getElementById("hungerCount").innerHTML);
    if (value > 0) {
        value -= 10;
    }
    connection.invoke("SetHunger", value);
};

function hungerCustom() {
    var value = parseInt(document.getElementById("hungerValue").value);
    connection.invoke("SetHunger", value);
}
// #endregion Hunger Func

//Stress Functions
// #region Stress Func
function stress1() {
    var value = parseInt(document.getElementById("stressCount").innerHTML);
    if (value < 100) {
        value++;
    }
    connection.invoke("SetStress", value);
};

function stress10() {
    var value = parseInt(document.getElementById("stressCount").innerHTML);
    if (value < 100) {
        value += 10;
    }
    connection.invoke("SetStress", value);
};

function stress100() {
    connection.invoke("SetStress", 100);
};

function stress0() {
    connection.invoke("SetStress", 0);
};

function stressminus1() {
    var value = parseInt(document.getElementById("stressCount").innerHTML);
    if (value > 0) {
        value--;
    }
    connection.invoke("SetStress", value);
};

function stressminus10() {
    var value = parseInt(document.getElementById("stressCount").innerHTML);
    if (value > 0) {
        value -= 10;
    }
    connection.invoke("SetStress", value);
};

function stressCustom() {
    var value = parseInt(document.getElementById("stressValue").value);
    connection.invoke("SetStress", value);
}
// #endregion Stress Func

//Urine Functions
// #region Urine Func
function urine1() {
    var value = parseInt(document.getElementById("urineCount").innerHTML);
    if (value < 100) {
        value++;
    }
    connection.invoke("SetUrine", value);
};

function urine10() {
    var value = parseInt(document.getElementById("urineCount").innerHTML);
    if (value < 100) {
        value += 10;
    }
    connection.invoke("SetUrine", value);
};

function urine100() {
    connection.invoke("SetUrine", 100);
};

function urine0() {
    connection.invoke("SetUrine", 0);
};

function urineminus1() {
    var value = parseInt(document.getElementById("urineCount").innerHTML);
    if (value > 0) {
        value--;
    }
    connection.invoke("SetUrine", value);
};

function urineminus10() {
    var value = parseInt(document.getElementById("urineCount").innerHTML);
    if (value > 0) {
        value -= 10;
    }
    connection.invoke("SetUrine", value);
};

function urineCustom() {
    var value = parseInt(document.getElementById("urineValue").value);
    connection.invoke("SetUrine", value);
}
// #endregion Urine Func

//Fatigue Functions
// #region Fatigue Func
function fatigue1() {
    var value = parseInt(document.getElementById("fatigueCount").innerHTML);
    if (value < 100) {
        value++;
    }
    connection.invoke("SetFatigue", value);
};

function fatigue10() {
    var value = parseInt(document.getElementById("fatigueCount").innerHTML);
    if (value < 100) {
        value += 10;
    }
    connection.invoke("SetFatigue", value);
};

function fatigue100() {
    connection.invoke("SetFatigue", 100);
};

function fatigue0() {
    connection.invoke("SetFatigue", 0);
};

function fatigueminus1() {
    var value = parseInt(document.getElementById("fatigueCount").innerHTML);
    if (value > 0) {
        value--;
    }
    connection.invoke("SetFatigue", value);
};

function fatigueminus10() {
    var value = parseInt(document.getElementById("fatigueCount").innerHTML);
    if (value > 0) {
        value -= 10;
    }
    connection.invoke("SetFatigue", value);
};

function fatigueCustom() {
    var value = parseInt(document.getElementById("fatigueValue").value);
    connection.invoke("SetFatigue", value);
}
// #endregion Fatigue Func

//Dirtiness Functions
// #region Dirtiness Func
function dirtiness1() {
    var value = parseInt(document.getElementById("dirtinessCount").innerHTML);
    if (value < 100) {
        value++;
    }
    connection.invoke("SetDirtiness", value);
};

function dirtiness10() {
    var value = parseInt(document.getElementById("dirtinessCount").innerHTML);
    if (value < 100) {
        value += 10;
    }
    connection.invoke("SetDirtiness", value);
};

function dirtiness100() {
    connection.invoke("SetDirtiness", 100);
};

function dirtiness0() {
    connection.invoke("SetDirtiness", 0);
};

function dirtinessminus1() {
    var value = parseInt(document.getElementById("dirtinessCount").innerHTML);
    if (value > 0) {
        value--;
    }
    connection.invoke("SetDirtiness", value);
};

function dirtinessminus10() {
    var value = parseInt(document.getElementById("dirtinessCount").innerHTML);
    if (value > 0) {
        value -= 10;
    }
    connection.invoke("SetDirtiness", value);
};

function dirtinessCustom() {
    var value = parseInt(document.getElementById("dirtinessValue").value);
    connection.invoke("SetDirtiness", value);
}
// #endregion Dirtiness Func

//Money Functions
// #region Money Func
function money0() {
    connection.invoke("SetMoney", 0);
};

function money50() {
    var value = parseInt(document.getElementById("moneyCount").innerHTML);
    value += 50
    connection.invoke("SetMoney", value);
};

function money100() {
    var value = parseInt(document.getElementById("moneyCount").innerHTML);
    value += 100
    connection.invoke("SetMoney", value);
};

function money1000() {
    var value = parseInt(document.getElementById("moneyCount").innerHTML);
    value += 1000
    connection.invoke("SetMoney", value);
};

function minusmoney50() {
    var value = parseInt(document.getElementById("moneyCount").innerHTML);
    value -= 50
    connection.invoke("SetMoney", value);
};

function minusmoney100() {
    var value = parseInt(document.getElementById("moneyCount").innerHTML);
    value -= 100
    connection.invoke("SetMoney", value);
};

function minusmoney1000() {
    var value = parseInt(document.getElementById("moneyCount").innerHTML);
    value -= 1000
    connection.invoke("SetMoney", value);
};

function moneyCustom() {
    var value = parseInt(document.getElementById("moneyValue").value);
    connection.invoke("SetMoney", value);
}
// #endregion Money Func

//Task Functions
// #region Task Func
function taskSet() {
    var value = document.getElementById("taskText").value;
    connection.invoke("SetTask", value);
}
// #endregion Task Func

//Thirst Connections
// #region Thirst

connection.on("SetThirst", (value) => {
    document.getElementById("thirstCount").innerHTML = value.toString();
});

connection.on("SetThirst", (value) => {
    if (value <100 && document.getElementById("Thirst").classList.value.includes("maxvalue")) {
        document.getElementById("Thirst").classList.remove("maxvalue")
    }
    if (value === 100) {
        document.getElementById("Thirst").classList.add("maxvalue")
    }
    document.getElementById("Thirst").style.width = value + "%";
});
// #endregion Thirst

//Hunger Connections
// #region Hunger

connection.on("SetHunger", (value) => {
    document.getElementById("hungerCount").innerHTML = value.toString();
});

connection.on("SetHunger", (value) => {
    if (value < 100 && document.getElementById("Hunger").classList.value.includes("maxvalue")) {
        document.getElementById("Hunger").classList.remove("maxvalue")
    }
    if (value === 100) {
        document.getElementById("Hunger").classList.add("maxvalue")
    }
    document.getElementById("Hunger").style.width = value + "%";
});
// #endregion Hunger

//Stress connections
// #region Stress

connection.on("SetStress", (value) => {
    document.getElementById("stressCount").innerHTML = value.toString();
});

connection.on("SetStress", (value) => {
    if (value < 100 && document.getElementById("Stress").classList.value.includes("maxvalue")) {
        document.getElementById("Stress").classList.remove("maxvalue")
    }
    if (value === 100) {
        document.getElementById("Stress").classList.add("maxvalue")
    }
    document.getElementById("Stress").style.width = value + "%";
});
// #endregion Stress

//Urine connections
// #region Urine

connection.on("SetUrine", (value) => {
    document.getElementById("urineCount").innerHTML = value.toString();
});

connection.on("SetUrine", (value) => {
    if (value < 100 && document.getElementById("Urine").classList.value.includes("maxvalue")) {
        document.getElementById("Urine").classList.remove("maxvalue")
    }
    if (value === 100) {
        document.getElementById("Urine").classList.add("maxvalue")
    }
    document.getElementById("Urine").style.width = value + "%";
});
// #endregion Urine

//Fatigue connections
// #region Fatigue
connection.on("SetFatigue", (value) => {
    document.getElementById("fatigueCount").innerHTML = value.toString();
});

connection.on("SetFatigue", (value) => {
    if (value < 100 && document.getElementById("Fatigue").classList.value.includes("maxvalue")) {
        document.getElementById("Fatigue").classList.remove("maxvalue")
    }
    if (value === 100) {
        document.getElementById("Fatigue").classList.add("maxvalue")
    }
    document.getElementById("Fatigue").style.width = value + "%";
});
// #endregion Fatigue

//Dirtiness connections
// #region Dirtiness
connection.on("SetDirtiness", (value) => {
    document.getElementById("dirtinessCount").innerHTML = value.toString();
});

connection.on("SetDirtiness", (value) => {
    if (value < 100 && document.getElementById("Dirtiness").classList.value.includes("maxvalue")) {
        document.getElementById("Dirtiness").classList.remove("maxvalue")
    }
    if (value === 100) {
        document.getElementById("Dirtiness").classList.add("maxvalue")
    }
    document.getElementById("Dirtiness").style.width = value + "%";
});
// #endregion Dirtiness

//Money connections
// #region Money
connection.on("SetMoney", (value) => {
    document.getElementById("moneyCount").innerHTML = value.toString();
});

connection.on("SetMoney", (value) => {
    document.getElementById("Money").innerHTML = value.toString();
});
// #endregion Fatigue

//Task connections
// #region Task
connection.on("SetTask", (value) => {
    document.getElementById("taskText").innerHTML = value.toString();
});

connection.on("SetTask", (value) => {
    document.getElementById("Task").innerHTML = value.toString();
});
// #endregion Task

//DayOfWeek connections
// #region DayOfWeek
function updateDayOfWeek() {
    let day = new Date();
    const weekday = ["ВОСКРЕСЕН.", "ПОНЕДЕЛЬН.", "ВТОРНИК", "СРЕДА", "ЧЕТВЕРГ", "ПЯТНИЦА", "СУББОТА"];
    var dayofweek = weekday[day.getDay()];
    connection.invoke("SetDayOfWeek", dayofweek)
}
setInterval(updateDayOfWeek, 1000);

connection.on("SetDayOfWeek", (value) => {
    document.getElementById("dayofweek").innerHTML = value.toString();
});
// #endregion DayOfWeek