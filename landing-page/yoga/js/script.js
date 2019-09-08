window.addEventListener('DOMContentLoaded',function () {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
               if (target == tab[i]) {
                   hideTabContent(0);
                   showTabContent(i);
                   break;
                  
               }
            }
        }

    });
    // timer
    let deadline = '2019-09-10';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60))),
        days = Math.floor((t/(1000*60*60*24)));
    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds,
        'days' : days
      }; 
    }

    function setClock(id, endtime) {
       let timer = document.getElementById(id),
           days = timer.querySelector('.days'),
           hours = timer.querySelector('.hours'),
           minutes = timer.querySelector('.minutes'),
           seconds = timer.querySelector('.seconds'),
           text = timer.querySelector('.timer-action'),
           timeInterval = setInterval(updateClock,1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days + " days";
            hours.textContent = t.hours + " h";
            minutes.textContent = t.minutes + " min";
            seconds.textContent = t.seconds + " sec";


           if (t.total <=0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

            }
        
        }

    }
    setClock('timer', deadline);

    // modal 
 let desctiptionTab = document.querySelectorAll('.description-btn');
 
    for (let i = 0; i < desctiptionTab.length; i++) {
        desctiptionTab[i].addEventListener('click', function () {
            Modal(this);
        });
    }
function Modal(t) {
        overlay.style.display = 'block';
        t.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    };

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
         close = document.querySelector('.popup-close');

    more.addEventListener('click',function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
    });
  
    close.addEventListener('click', function(){
        overlay.style.display ='none';
        more.classList.remove('more-splash');
    });
 
    let message = {
        loading: "Loading...",
        success:"thank you, see you soon",
        failure: "something went wrong..."
    };
    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

   form.addEventListener('submit', function(event){
     event.preventDefault();
     form.appendChild(statusMessage);

     let request = new XMLHttpRequest();
     request.open('POST','server.php');
     request.setRequestHeader('Content-type','application/json; charset=utf-8');
     let formData = new FormData(form);

     let obj = {};
     formData.forEach(function(value,key) {
        obj[key] = value;
     });
     let json = JSON.stringify(obj);

     request.send(json);

  
     request.addEventListener('readystatechange', function(){
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4 || request.status == 200) { // MUST use === is strictly equal to
            statusMessage.innerHTML = message.success;
        }
          else {
            statusMessage.innerHTML = message.failure;
        }
     });
        for (let i = 0; i < input.length; i++) {
          input[i].value = "";
        }
   });
});