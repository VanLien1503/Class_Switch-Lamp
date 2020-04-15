// khởi tạo class nút bấm
let SwitchButton = function () {
    this.status = false;
    this.tunrOn = function () {
        this.status = true;
    };
    this.tunrOff = function () {
        this.status = false;
    };
    this.toLamp = function (lamp) {
        this.lamp = lamp;
    }
};
//khởi tạo lớp ElechtricLamp:
let ElechtricLamp = function () {
    this.status = false;
    this.tunrOn = function () {
        this.status = true;
    };
    this.tunrOff = function () {
        this.status = false;
    }
};
let lamp = new ElechtricLamp();
//khởi tạo đối tượng SwitchButton(công tắc điện)
let congtac = new SwitchButton();
congtac.toLamp(lamp);

function Switch() {
    if (congtac.status) {
        congtac.tunrOff();
        document.getElementById("result").src = "Off.jpg";
        document.getElementById("switch").innerHTML = "TunOFF";
    } else {
        congtac.tunrOn();
        document.getElementById("result").src = "On.jpg";
        document.getElementById("switch").innerHTML = "TunOn";
    }

}
