function showtime() {
    const today = new Date();
    let H = today.getHours();
    let M = today.getMinutes();
    let S = today.getSeconds();

    if (S < 10) {
        S = "0" + today.getSeconds();
    }
    if (H > 12) {
        H = H - 12;
    }
    if (M < 10) {
        M = '0' + M;
    }
    // console.log(H + ':' + M + ':' + S);
    document.getElementById('txt').innerHTML = H + ':' + M + ':' + S;
    setTimeout(showtime, 1000);
}
showtime();



