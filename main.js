(()  => {
    
    const $nav = document.getElementById("nav");
    let html ="";

    for(const item of items){
        if(item.type === "internal"){
            html += `
            <li class="item">
                <a href="${item.link}">${item.name}</a>
            </li>`
        }
        else{
            html += `
            <li class="item">
                <a href="${item.link}" target="_blank">${item.name}</a>
            </li>`
        }
    }

    $nav.innerHTML = html;
})();
    


(() => {

    const $events = document.getElementById("events");
    let html ="";

    for(const card of cards){

    let $from = new Date(card.from);
    let $to = new Date(card.to);

        html += `
        <div id="${card.id}" class="card">
        <h1>${card.event.name}</h1>
        <h3>${card.stage} / ${$from} - ${$to}<h3>
        <img src="${card.event.image}" alt ="${card.name}" class ="card">
        </div>
        `
    }
    $events.innerHTML = html;

    const generateModalForCard = (info) => {
        let $modal = `
                <div class="modal-content">
                    <h2 id="modalTitle">${card.name}</h2>
                    <p id="modalContent">${card.from} - ${card.to}</p>
                    <button id="closeModal">Close</button>
                </div>
        
        `
        return $modal;
    }

    const $cards = document.getElementsByClassName("card")
    
    for (const $card of $cards) {
        $card.addEventListener('click', (event) => {
            const id = parseInt(event.currentTarget.dataset.id);
            let clickedCard;
            for (const item2 of cards) {
                if (item2.id === id)
                {
                    clickedCard = item2;
                }
            }
            
            if (clickedCard) {
                $modal.innerHTML = generateModalForCard(clickedCard);
                
                $modal.classList.add('visible');
                
            }
            
            const $closeModal = document.querySelector('#closeModal');
            $closeModal.addEventListener('click', () => {
                $modal.classList.remove('visible');
            })
        })
    }

    console.log("hallo");

})();


(() => {
    const $timer = document.getElementById("timer");
    const date = new Date(1755673200000);

    let $second = 1000;
    let $minute = $second * 60;
    let $hour = $minute * 60;
    let $day = $hour * 24;

    function showRemaining() {
        let now = new Date();
        let distance = date - now;
        if (distance < 0) {

            clearInterval($timer);
            document.getElementById('timer').innerHTML = 'ENJOY!';

            return;
        }
        let days2 = Math.floor(distance / $day);
        let hours2 = Math.floor((distance % $day) / $hour);
        let minutes2 = Math.floor((distance % $hour) / $minute);
        let seconds2 = Math.floor((distance % $minute) / $second);

        document.getElementById("timer").innerHTML = days2 + "days ";
        document.getElementById("timer").innerHTML += hours2 + "h ";
        document.getElementById("timer").innerHTML += minutes2 + "m ";
        document.getElementById("timer").innerHTML += seconds2 + "s";

    }

    timer = setInterval(showRemaining, 1000);
})();