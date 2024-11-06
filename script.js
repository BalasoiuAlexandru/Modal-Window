

const modalHiden = document.querySelector('.modal')
const btnShowModal = document.querySelectorAll('.show-modal')
const closeModal = document.querySelector('.close-modal')
const overlay =document.querySelector('.overlay')

console.log(modalHiden)
console.log(btnShowModal)
console.log(closeModal)
console.log(overlay)


for (let i=0 ; i < btnShowModal.length ; i++)

 btnShowModal[i].addEventListener('click' , function(){
modalHiden.classList.remove('hidden')
overlay.classList.remove('hidden')
})


      
const dispare = function(){
modalHiden.classList.add('hidden')
overlay.classList.add('hidden')


}

modalHiden.addEventListener('click', dispare)
overlay.addEventListener('click' , dispare)



    document.addEventListener("keydown" , function (e){
    console.log(e.key)
   

     if(e.key === 'Escape'  && !modalHiden.classList.contains('hidden')) {
     dispare()                        }

 

})