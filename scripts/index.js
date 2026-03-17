//get all buttons
const staticTotal =document.getElementById("static-total");
const staticInterview = document.getElementById("static-interview");
const staticReject = document.getElementById("static-rejected");

const allBtn = document.getElementById("tab-all");
const interviewBtn = document.getElementById("tab-interview");
const rejectBtn = document.getElementById("tab-reject");

const jobSection = document.getElementById("job-container");
const allSection = document.getElementById("all-container");
const interviewSection = document.getElementById("interview-container");
const rejectedSection = document.getElementById("rejected-container");

//get all the child of All section
staticTotal.innerText = allSection.children.length;
//classes
const active = ['bg-[#002C5C]','text-white'];
const inactive =['text-[#64748B]','bg-white']

//default active
allBtn.classList.add(...active);

//remove active style from all buttons
function removeActive(){
    allBtn.classList.remove(...active);
    interviewBtn.classList.remove(...active);
    rejectBtn.classList.remove(...active);
}

 // hide all sections 
function hideSection(){
     allSection.classList.add('hidden');
     interviewSection.classList.add('hidden');
     rejectedSection.classList.add('hidden');


}

//add function
allBtn.addEventListener('click', function(){
    console.log('All button clicked.');
    removeActive(); //inactive
    allBtn.classList.add(...active);
 //hide all sections
     hideSection(); 

     //show all section
    allSection.classList.remove('hidden'); 
})

interviewBtn.addEventListener('click', function(){
     console.log('Interview button clicked.')
    removeActive(); //inactive
    interviewBtn.classList.add(...active);

    hideSection();
    interviewSection.classList.remove('hidden');
})

rejectBtn.addEventListener('click', function(){
     console.log('Rejected button clicked.')
    removeActive(); //inactive
    rejectBtn.classList.add(...active);

    hideSection();
    rejectedSection.classList.remove('hidden');
})

//function for interview,reject and delete 
// jobSection.addEventListener('click',function(e){
//     const clicked = e.target;

//     if(clicked.classList.contains('interview')){
//         console.log('Interview button clicked');
//     }
// })
