//get data
const linkdin_form = document.getElementById('linkdin_form');
const msg = document.querySelector('.msg');
const post_list = document.querySelector('.post_list');

//get all post
const getAllPost = ()=>{
    let list = ``;
    let post = readLSData('linkdingData');

    if(!post){
        post_list.innerHTML=`<div class="text-center shadow no-product">No Post Found</div>`;
        return false;
    }
    else{
        post.reverse().map((data)=>{
            list += `<div class="post_top d-flex justify-content-between">
            <div class="post_top_left d-flex align-items-center">
              <img src="${data.aphoto}" alt="">
              <div class="post_details_text d-flex flex-column">
                <p>${data.aname}</p>
              <span>12hr.</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
              <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
            </svg>
          </div>
          <div class="text_box">
            <p>${data.pcontent}</p>
          </div>
          <div class="img-box">
            <img class="w-100" src="${data.pphoto}" alt="">
          </div>
          <hr>
          <div class="feedback_btn d-flex justify-content-between ">
            <div class="like_btn d-flex justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg>
              <p>Like</p>
            </div>
            <div class="comment_btn d-flex justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
              </svg>
              <p>Comments</p>
            </div>
          </div>
          <hr>`
        });
        post_list.innerHTML= list;
    }
}
getAllPost();

//form submit
linkdin_form.onsubmit=(e)=>{
    e.preventDefault();

    //get form data
    let form_data = new FormData(e.target);
    let {aname,aphoto,pcontent,pphoto} = Object.fromEntries(form_data.entries());
    let data = Object.fromEntries(form_data.entries());

    if(!aname || !aphoto || !pcontent || !pphoto){
        msg.innerHTML = setAlert('All feilds are required!');
        return false;
    }
    else{
        createLSData('linkdingData',data);
        linkdin_form.reset();
        getAllPost();
    }
};