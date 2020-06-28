document.onreadystatechange = function (e) {
    
    if (document.readyState === "interactive") {
        let all = document.getElementsByTagName("*");
        
        for (let i = 0; i < all.length; i++) {
            setEle(all[i]);
        }
    }
}

function checkElement(ele) {
    let all = document.getElementsByTagName("*");
    let percentIncrease = 100 / all.length;

    if ($(ele).on()) {
        let progressWidth = percentIncrease + Number(document.getElementById("progress-width").value);
        document.getElementById("progress-width").value = progressWidth;
        $("#bar1").animate({ width: progressWidth + "%" }, 10, function () {
            if (document.getElementById("bar1").style.width == "100%") {
                $(".progress").fadeOut("slow");
            }
        });
    }

    else {
        setEle(ele);
    }
}

function setEle(setElement) {
    checkElement(setElement);
}



