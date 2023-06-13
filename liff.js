$(document).ready(function () {
    var liffId = "1661411011-QOkD3Ye0";
    console.log(`init liff, ID : ${liffId}`);
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントにログインしてください。");
                liff.login({redirectUri: location.href});
            }else{
                console.log('Login Success');
            }
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    if (!liff.isInClient()) {
        shareTargetPicker(text);
    } else {
        sendMessages(text);
    }
}

function sendMessages(text) {
    console.log('in sendMessages()');
    liff.sendMessages([{ 'type': 'text', 'text': text }]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}

function shareTargetPicker(text) {
    console.log('in shareTargetPicker');
    liff.shareTargetPicker([{ 'type': 'text', 'text': text }]).catch((error) => {
        console.log(error);
        window.alert('Failed to send message ' + error);
    });
}
