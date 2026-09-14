setInterval(() => {
    const result = document.getElementById("result");
    const currenTime = Date.now();
    // milisecond
    const olympicTime = new Date(2023, 6, 14).getTime();

    // console.log(currenTime);

    let timer = olympicTime - currenTime;

    const day = Math.floor(timer) / (1000 * 60 * 60 * 24);
    timer %= 1000 * 60 * 24;

    const hour = Math.floor(timer) / (1000 * 60 * 60);
    timer %= 1000 * 60 * 60;

    const minute = Math.floor(timer) / (1000 * 60);
    timer %= 1000 * 60 * 60;

    const second = Math.floor(timer) / 1000;
    timer %= 1000;

    result.textContent = `Days: ${day} Hour: ${hour} Minute: ${minute} Second : ${second}`;
    
}, 1000);


