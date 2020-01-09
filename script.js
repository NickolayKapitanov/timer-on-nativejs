let deadline = '2020-01-10T00:00:00.000+03:00'; // set up deadline

    function getTimeRemaining (endtime) {
        if (Date.parse(endtime) >= Date.parse(new Date)) {
        let t = Date.parse(endtime) - Date.parse(new Date),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)) % 60);

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
        } else {
            return {
                'total' : '00',
                'hours' : '00',
                'minutes' : '00',
                'seconds' : '00'
            };
        }
    }

function setClock (id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours;
            if (hours.textContent <= 9) {
                hours.textContent = '0' + t.hours;
            }

            minutes.textContent = t.minutes;
            if (minutes.textContent <= 9) {
                minutes.textContent = '0' + t.minutes;
            }
           
            seconds.textContent = t.seconds;
            if (seconds.textContent <= 9) {
                seconds.textContent = '0' + t.seconds;
            } 

            if (t.total <= 0 ) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('timer', deadline);
});
