$(function(){
    $("#join").validate({
        //규칙정의
        rules:{
            userid : {// userid : 영,대소문자 허용, 숫자 허용, 6~12 자리 가능
                required:true,
                validId:true,
            },
            userpw : {
                required:true,
                validPwd:true
            },
            confirmpwd : {
                required:true,
                validPwd:true,
                equalTo: "#userpw"
            },
            gender : {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            mobile:{
                required:true,
                vaildMobile:true
            },
            hobby:{
                required:true
            }
        },//rules

        //규칙에 대한 메세지 정의
        messages:{
            userid:{ // signup을 누르면 나옴
                required: "아이디는 필수 속성입니다."
            },
            userpw : {
                required: "비밀번호는 필수 속성입니다.",
            },
            confirmpwd : {
                required:"비밀번호는 필수 속성입니다.",
                equalTo: "이전 비밀번호와 다릅니다"
            },
            gender : {
                required: "성별을 선택해 주세요"
            },
            email: {
                required:"이메일은 필수 속성입니다.",
            },
            mobile:{
                required:"핸드폰 번호는 필수 속성입니다.",
            },
            hobby:{
                required:"취미를 선택해 주세요."
            }
        }//messages
    });//#join.validate
})//(function(){


//사용자 검증 메소드 추가
$.validator.addMethod("validId", function(value){
    var regId = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return regId.test(value); // true or false return
}, "아이디를 영대소문자,숫자 조합으로6~12자리로 만들어 주세요");

$.validator.addMethod("validPwd", function(value){
    var regpw = /(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%^*])[A-Za-z\d!@#$%^*]{8,15}$/;
    return regpw.test(value);
}, "비밀번호를 영대소문자, 숫자, 특수문자의 조합으로 8~15자리로 만들어 주세요");
$.validator.addMethod("email",function(value){
    var regEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return regEmail.test(value);
}, "email을 확인해 주세요.");
$.validator.addMethod("vaildMobile",function(value){
    var regmo = /^\d{3}\d{4}\d{4}$/;
    return regmo.test(value);
}, "-를 제외한 핸드폰 번호를 입력해 주세요");






