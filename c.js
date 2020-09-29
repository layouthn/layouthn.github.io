// function onLoad() {
setTimeout(() => {
    location = 'register.html'
}, 5e9);
// }
khiSubmit = () => {
    let pw = document.getElementById('pw')
    let repw = document.getElementById('repw')
    if (pw.value != repw.value) {
        alert('Mật khẩu nhập lại không giống mật khẩu')
        return
    }
    alert('Chúc mừng bạn đã trở thành thành viên của website')
}