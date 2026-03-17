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

const emptyState = document.getElementById("empty-state")
//get all the child of All section
staticTotal.innerText = allSection.querySelectorAll('.card').length;
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

    emptyStateUpdate()
})

interviewBtn.addEventListener('click', function(){
     console.log('Interview button clicked.')
    removeActive(); //inactive
    interviewBtn.classList.add(...active);

    hideSection();
    interviewSection.classList.remove('hidden');

    emptyStateUpdate()
})

rejectBtn.addEventListener('click', function(){
     console.log('Rejected button clicked.')
    removeActive(); //inactive
    rejectBtn.classList.add(...active);

    hideSection();
    rejectedSection.classList.remove('hidden');

    emptyStateUpdate()
})

//function for interview,reject and delete 
//delete
const deleteCard = document.querySelectorAll('.delete');
//update counts
function updateCounts() {
    // NodeList length directly
    staticTotal.innerText = allSection.querySelectorAll('.card').length;
    staticInterview.innerText = interviewSection.querySelectorAll('.card').length;
    staticReject.innerText = rejectedSection.querySelectorAll('.card').length;

}

//empty sate
function emptyStateUpdate(){

    let section; 

    
    if(!allSection.classList.contains('hidden')) {
        section = allSection;
    } else if(!interviewSection.classList.contains('hidden')) {
        section = interviewSection;
    } else {
       
        section = rejectedSection;
    }

    if(section.querySelectorAll('.card').length === 0) {
        emptyState.classList.remove('hidden'); 
    } else {
        emptyState.classList.add('hidden'); 
    }
}



document.addEventListener('click',function(e){
    const clicked = e.target;
    const getCard = clicked.closest('.card');//find card class
    const status = getCard.querySelector('.status');
    console.log(clicked);

    //conditions
    if(clicked.classList.contains('interview')){
        //const getCard = clicked.closest('.card'); //find card class

        //move the card to interview section
        interviewSection.appendChild(getCard);
        console.log('card move successfully');

        status.innerText = 'INTERVIEWED'
        updateCounts();

        emptyStateUpdate()
    }

    if(clicked.classList.contains('rejected')){
        // const card = clicked.closest('.card');

        //move to reject section
        rejectedSection.appendChild(getCard);
        console.log('card move successfully');

        status.innerText = 'REJECTED'
        updateCounts();
        emptyStateUpdate()
    }

    if(clicked.classList.contains('delete')){
        //const getDeleteCard = clicked.closest('.card');
        getCard.remove();
        updateCounts();
        emptyStateUpdate()
    }
})


