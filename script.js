const leftChosenChecks = document.querySelectorAll(".left-chosen h3")
const faqs = document.querySelectorAll(".faq")
const options = document.querySelectorAll(".option")
const lastResult = document.querySelector(".last-result")
const lastResultPara = document.querySelector(".last-result p")
const modalBtn = document.querySelector(".modal-btn")
const modalOverlay = document.querySelector(".modal-overlay");
const modalCon = document.querySelector(".modal-container");


let lastChoice = [];
options.forEach((item) => {
  item.addEventListener("click", (e) => {
    // option select  ،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،،
    const siblings = e.currentTarget.parentNode.children;
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove("option-chosen")
    }
    e.currentTarget.classList.add("option-chosen")
    ////////////////////////////////////////////////////
   const parentIndex = Array.from(faqs).indexOf(e.currentTarget.parentElement.parentElement);
   leftChosenChecks[parentIndex].classList.add("done");
   ///////////////////////////////////////////////////
   const chosenWord = e.currentTarget.childNodes[1].innerText;
   // lastChoice.push(chosenWord);
   lastChoice[parentIndex] = chosenWord;
  orderSummary()
  })
})

function orderSummary()
{
  if (lastChoice.length == faqs.length && !lastChoice.includes(undefined) ) {
    lastResult.classList.add("show")
    lastResultPara.innerHTML = `
    “I drink my coffee as <span>${lastChoice[0]}</span> , with a <span>${lastChoice[1]}</span> type of
      bean. <span>${lastChoice[2]}</span> ground ala <span>${lastChoice[3]}</span>, sent to me
      <span>${lastChoice[4]}</span>.”`
  }
}

modalBtn.addEventListener("click",orderModal)

function orderModal()
{

  if (lastChoice.includes(undefined) || lastChoice.length < faqs.length ) {
    modalCon.innerHTML = "Make sure you have selected everything";
    modalOverlay.classList.add("open-modal");
    setTimeout(()=>{modalOverlay.classList.remove("open-modal");},1000)
  }else
  {
    modalCon.innerHTML = "Your order has been applied  Thank You <br> Enjoy";
    modalOverlay.classList.add("open-modal");
    setTimeout(()=>{
      window.scroll(0, 0)
      location.reload();
    },3000);
  }
}
