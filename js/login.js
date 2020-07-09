function checkParams() {
    let phone = $('#phone').val();
     
    if(phone.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}