{
    let i = 0;
    function showTime() {
        console.log(new Date());
        i++;
        if (i>2) {
            clearInterval(intervalID)
        }
    }

    const intervalID = setInterval(showTime, 1000);
}