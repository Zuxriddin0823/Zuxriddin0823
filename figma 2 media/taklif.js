const murodjon = document.querySelector('.murodjon');
const kattasi = document.querySelector('.kattasi');
const asror = document.querySelector('.asror');
const boshjoy = document.querySelector('.boshjoy');
const submit = document.querySelector('.submit');
const boshi = document.querySelector('.boshi');




murodjon.addEventListener('click', () => {
  kattasi.style.display = 'flex'
})


asror.addEventListener('click', () => {
    kattasi.style.display = 'none'
  })

  const jonat = document.querySelector('.jonat');








  function bosganda() {






    let submit = document.getElementById('submit').value;
   
    event.preventDefault();
    let telegram_bot_id = "6935717264:AAE8yLLPliq63EBQvPLc12EMsjHHSK7P9tg";
    let chat_id = 6193169399; 
    let message = `${submit}`;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
   
   
    });
    document.getElementById('submit').value = '';
  
    return false;
};




