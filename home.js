function loadCoupan(){
    document.getElementsByClassName('coupan')[0].style.display = 'block';
    document.getElementById('cBlur').style.opacity ='0.4';
}
const coupanClose = () => {
    document.getElementsByClassName('coupan')[0].style.display = 'none';
    document.getElementById('cBlur').style.opacity ='1';
}

