const wrapper=document.querySelector(".wrapper")
const login_link =document.querySelector('#login-link')
const register_link =document.querySelector('#registter')
const login_block=document.querySelector('.login-block')
const register_block=document.querySelector('.register-block')
const btn_login=document.querySelector('#login-btn')
const btn_register=document.querySelector('#register-btn')
const home=document.querySelector('#Home-page')
const about=document.querySelector('#about-click')
const about_data=document.querySelector('.about')
const service=document.querySelector('#service-click')
const service_data=document.querySelector('.service')
const contact=document.querySelector('#contact-click')
const contact_data=document.querySelector('.Contact')
const close_login=document.querySelector('#CLOSE')
const close_login2=document.querySelector('#CLOSE2')


close_login.addEventListener('click',()=>{
    login_block.classList.add('danger')
    register_block.classList.add('danger')
})
close_login2.addEventListener('click',()=>{
    login_block.classList.add('danger')
    register_block.classList.add('danger')
})


btn_login.addEventListener('click',()=>{
    register_block.classList.add('danger')
    login_block.classList.remove('danger')
    wrapper.classList.remove('active')
    about_data.classList.add('DangerAbout')
    contact_data.classList.add('Contactservice')
})
btn_register.addEventListener('click',()=>{
    login_block.classList.add('danger')
    register_block.classList.remove('danger')
    wrapper.classList.add('active')
    about_data.classList.add('DangerAbout')
    contact_data.classList.add('Contactservice')
})
register_link.addEventListener('click',()=>{
    wrapper.classList.add('active')
    register_block.classList.remove('danger')
    login_block.classList.add('danger')
    about_data.classList.add('DangerAbout')
    contact_data.classList.add('Contactservice')
})
home.addEventListener('click',()=>{
    about_data.classList.add('danger')
    register_block.classList.add('danger')
    login_block.classList.add('danger')
    about_data.classList.add('DangerAbout')
    service_data.classList.add('Dangerservice')
    contact_data.classList.add('Contactservice')
    
})
login_link.addEventListener('click',()=>{
    wrapper.classList.remove('active')
    login_block.classList.remove('danger')
    register_block.classList.add('danger')
    about_data.classList.add('DangerAbout')
    contact_data.classList.add('Contactservice')
})
about.addEventListener('click',()=>{
    register_block.classList.add('danger')
    login_block.classList.add('danger')
    about_data.classList.remove('DangerAbout')
    service_data.classList.add('Dangerservice')
    contact_data.classList.add('Contactservice')
})
service.addEventListener('click',()=>{
    register_block.classList.add('danger')
    login_block.classList.add('danger')
    about_data.classList.add('DangerAbout')
    service_data.classList.remove('Dangerservice')
    contact_data.classList.add('Contactservice')
})
contact.addEventListener('click',()=>{
    contact_data.classList.remove('Contactservice')
    register_block.classList.add('danger')
    login_block.classList.add('danger')
    about_data.classList.add('DangerAbout')
    service_data.classList.add('Dangerservice')
})