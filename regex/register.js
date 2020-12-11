// register.html 유효성 검증
// userid : 영,대소문자 허용, 숫자 허용, 6~12 자리 가능
// password : 영,대소문자 허용, 숫자 허용, 특수문자(!@#$%^*) 허용, 8~15
// confirmpasswd : 위의 규칙과 동일하고, 이전 비밀번호와 일치한지 확인
// gender : 무조건 하나 선택
// email : email 형식에 맞는지 확인
// mobile : - 없는 형태로 01065121234
// hobby : 최소 하나 선택


//====================================


function checkPass(password) {
        var regpw = /(?=.*[A-Za-z])(?=.*[\d])(?=.*[!@#$%^*])[A-Za-z\d!@#$%^*]{8,15}$/;


    if(!regpw.test(password)){
        alert("비밀번호를 영,대소문자 허용, 숫자 허용, 특수문자의 조합으로 8~15자리로 만들어 주세요");
        return false;//조건대로 안 만든 경우
    }
    return true; //조건대로 만든 경우
}//checkPass


$(function (){
    $("#userid").change(function() {
        //영,대소문자 허용, 숫자 허용
        //6~12 자리 가능
        var userid =$("#userid");
        var regId = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;


        if(!regId.test(userid.val())){
            alert("아이디를 영대소문자,숫자 조합으로6~12자리로 만들어 주세요");
            $("#userid").select();
            return false; //조건대로 안 만든 경우
        }
    })//userid
    
    $("#userpw").change(function() {
        // password : 영,대소문자 허용, 숫자 허용, 특수문자(!@#$%^*) 허용, 8~15
        var userpw = $("#userpw").val();
        if(!checkPass(userpw)){
            $("#userpw").select();
            return false;
        }
    })//userpw
   
    $("#confirmpwd").change(function() {
        // confirmpasswd : 위의 규칙과 동일하고, 이전 비밀번호와 일치한지 확인
        var confirmpwd = $("#confirmpwd").val();
        if(!checkPass(confirmpwd)){
            $("#confirmpwd").select();
            return false;
        }
       if($("#userpw").val() !== confirmpwd) {
           alert("이전 비밀번호와 다릅니다.");
           $("#confirmpwd").select();
           return false;
       }
    })//confirmpwd 종료


    $(":radio[name='gender']").focusout(function() {
        // gender : 무조건 하나 선택
        if(!$(this).is(":checked")) {
            alert("성별을 확인해 주세요");
            $("#gender_m").prop("checked",true);
            return false;
        }
    })//gender 종료
    
    $("#email").change(function() {
        // email : email 형식에 맞는지 확인
        var email = $("#email").val();
        var regEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;


        
        if(!regEmail.test(email)){
            alert("email 형식에 맞지 않습니다.");
            $("#email").select();
            return false; //조건대로 안 만든 경우
        }


    })//email
    
    $("#mobile").change(function() {
        // mobile : - 없는 형태로 01065121234
        var mobile = $("#mobile").val();
        var regmo = /^\d{3}\d{4}\d{4}$/;


        if(!regmo.test(mobile)){
            alert("핸드폰 번호를 확인해 주세요");
            $("#mobile").select();
            return false; //조건대로 안 만든 경우
        }


    })//mobile
    
    $("#join").submit(function(e){
        e.preventDefault();
        
        if(!$("input[name='hobby']").is(":checked")) { // input도 되고 :checkbox도 되네 / input 빼고 그냥 [na] 해도 되네
            alert("취미는 한개 이상 선택해 주세요");
            return false;
        }
    })//submit


    // $(":checkbox[name='hobby']").change(function() {
    //     // hobby : 최소 하나 선택
    //     if(!$(this).is(":checked")) {
    //         alert("취미을 확인해 주세요");
    //         $("#gender_m").prop("checked",true);
    //         return false;
    // })

})