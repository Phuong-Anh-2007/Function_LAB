let flag = false, i=0;
let sout = "<button onclick='check()'>Kiểm tra số nguyên tố</button>"
            +"<h1 style='text-align:center;'>Các số nguyên tố nhỏ hơn 10 000</h1>"
            +" <table border='1' width='300' cellspacing='0' cellpadding='3' style='margin-left:auto; margin-right:auto;'>";
function snt() {
    sout += '<tr>';
    for (let n=2;n<10000;n++){
        for (let x = 2;x <n;x++) {
            if (n % x == 0) {
                flag = true;
                break;
            }
        }
        if (flag == false) {
            sout += '<td>'+n+'</td>';
            i++;
            if (i == 15) {
                sout += "</tr>";
                sout +='<tr>';
                i =0;
            }
        }
        flag = false;
    }
    sout += "</table>";
    document.write(sout);
}

function check() {
    flag = false;
    sont(+prompt('Nhập vào một số để kiểm tra: '));
    function sont(number) {
        for (let i=2; i<number;i++) {
            if (number % i == 0) {
                flag = true;
                break;
            }
        }
        if (flag) {
            alert('Đây không phải là số nguyên tố');
        } else {
            alert('Đây là số nguyên tố');
        }
    }
}