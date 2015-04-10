function klingNumClock() {
    var clock = new Date();
    var u = clock.getHours();
    var m = clock.getMinutes();
    var s = clock.getSeconds();

    if (u<10){u = "0" + u};
    if (m<10){m = "0" + m};
    if (s<10){s = "0" + s};

    document.getElementById("numClock").innerHTML = u + " : " + m + " : " + s;
    setTimeout(function(){ klingNumClock();}, 1000);
}

function klingTxtClock(){
    var clock = new Date();
    var u = clock.getHours();
    var m = clock.getMinutes();
    var s = clock.getSeconds();

    var ones = Array('','wa\'','cha\'','wej','loS','vagh','jav','Soch','chorgh','Hut');
    var tens = Array('','wa\'maH','cha\'maH','wejmaH','loSmaH','vaghmaH','','','','');

    function returnU(){
        if (u == 0){
            return "pagh ";
        } else if (u > 0 && u < 10){
            u = ones[u];
            return u + "vatlh ";
        } else {
            u = tens[String(u).charAt(0)] + " " + ones[String(u).charAt(1)];
            return u + "valtlh ";
        }
    }

    function returnM(){
        if (m == 0){
            return "";
        } else if (m > 0 && m < 10){
            m = ones[m];
            return m;
        } else {
            m = tens[String(m).charAt(0)] + " " + ones[String(m).charAt(1)];
            return m;
        }
    }

    function returnS(){
        if (s == 0){
            return "";
        } else if (s > 0 && s < 10){
            s = ones[s];
            return s + " lup";
        } else {
            s = tens[String(s).charAt(0)] + " " + ones[String(s).charAt(1)];
            return s + " lup";
        }
    }

    document.getElementById("txtClock").innerHTML = returnU() + "" + returnM() + " rep " + returnS();
    setTimeout(function(){ klingTxtClock();}, 1000);
}

function loadClocks(){
    klingNumClock();
    klingTxtClock();
}