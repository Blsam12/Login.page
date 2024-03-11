const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')

registerlink.addEventListener('click' , function () {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click' , function () {
    wrapper.classList.remove('active')
})

//=====================================================


const menubtn = document.querySelector('.menu-button')
const sidebar = document.querySelector('.sidebar')

function showSidebar() {
        sidebar.style.display = 'flex'
}

function hideSidebar() {
        sidebar.style.display = "none"
}

//==============================================================

let all = document.querySelector('.all')

// function LoginBtn() {
//     all.style.display = "flex"
// }

function Closebtn(){
    all.style.display = "none"
}