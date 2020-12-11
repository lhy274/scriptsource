$(function() {
    $("#signupForm").validate({
        // 검증할 규칙 rules 에 명시 - 각 요소의 이름을 사용
        rules: {
            username:{ //필수, 2~4
                required : true,
                minlength : 2,
                maxlength : 4
            },
            password:{//필수,8~15
                required : true,
                rangelength : [8,15]
                // minlength : 8,
                // maxlength : 15

            },
            confirm_password : {//필수,8~15,password와 값이 동일
                required : true,
                rangelength : [8,15],
                equalTo : "#password"
            },// , 안 써서 에러 났었음
            email : {
                required : true,
                email:true
            },
            policy : {
                required : true,
            },
            topic : {//newsletter에 체크를 했으면 최소선택이 2개가 되도록
                required : "#newsletter:checked",
                minlength : 2
            }
        },//rules
        messages: {//개발자가 원하는 메시지 보여주기
            username:{ //필수, 2~4
                required : "이름은 필수 요소입니다.",
                minlength : "이름은 최소 2자리여야 합니다.",
                maxlength : "이름은 최대 4자리까지 허용 됩니다."
            },
            password:{//필수,8~15
                required : "비밀번호는 필수 요소입니다.",
                rangelength : "비밀번호는 8~15 사이로 입력해야 합니다."
                // minlength : 8,
                // maxlength : 15

            },
            confirm_password : {//필수,8~15,password와 값이 동일
                required : "비밀번호는 필수 요소입니다.",
                rangelength : "비밀번호는 8~15 사이로 입력해야 합니다.",
                equalTo : "이전 비밀번호와 다릅니다."
            },// , 안 써서 에러 났었음
            email : {
                required : "이메일은 필수 요소입니다.",
                email: "이메일을 확인해 주세요."
            },
            policy : "우리의 정책에 동의를 필요로 합니다.",
            topic : "관심사는 적어도 2개는 표시해야 합니다."
        },//messages
        errElement : "em",
        errorPlacement : function(error,element) {
            error.addClass("help-block");//<
            if(element.prop("type")=="checkbox") {
                error.insertAfter(element.next("label"));
            }else {
                error.insertAfter(element);
            }
        }
    });//signupForm.validate

    //newsletter 클릭하면 하단에 메일링 리스트 보여주기
    $("#newsletter").click(function() {
        var topics = $("#newsletter_topics")
        if(topics.css("display") === "none"){
            $(topics).css("display","block");
        }else {
            $(topics).css("display","none");
        }
        
    })//"#newsletter").click(


})