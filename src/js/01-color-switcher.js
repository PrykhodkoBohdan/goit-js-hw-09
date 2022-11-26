const refs = {
   startBtn: document.querySelector("[data-start]"),
   stopBtn: document.querySelector("[data-stop]"),
   interval: null
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const onSwithBtn = () =>{
refs.interval = setInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor();
},1000);
console.log(refs.interval)
refs.startBtn.setAttribute("disabled", true);
refs.stopBtn.removeAttribute("disabled");
  };

  
const offSwithBtn = () => {
 clearInterval(refs.interval);
  refs.stopBtn.setAttribute("disabled",true);
  refs.startBtn.removeAttribute("disabled");
};
  
refs.startBtn.addEventListener('click',onSwithBtn);
refs.stopBtn.addEventListener('click',offSwithBtn);