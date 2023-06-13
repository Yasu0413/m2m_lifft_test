function onSubmit(){
    const email = document.getElementById('email').value;
    const orderNumber = document.getElementById('orderNumber').value;

    const msg = "メールアドレス: " + email + "\n注文番号: " + orderNumber;
    console.log(msg);
    sendText(msg);

    return false;
}
