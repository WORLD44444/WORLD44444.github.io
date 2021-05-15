window.onload = function () {
    var desc = ["문산수억고등학교 웹페이지 멘토링입니다.",
    "잘부탁드립니다."]; //문자열 목록
    desc.push("전령이라는 높은 직책임에도 지령에 미쳐사는 검지답지 않게 지령에 부정적이다. 일례로 검지의 비호를 받는 시민들에게 지령이 왔을 때 최대한 탈이 안 나도록 조언과 도움을 주며 아무것도 모르는 사람이 쉬워보이는 지령을 보고 검지 소속으로 들어오려고 하자 다시 한번 생각해보라고 조언하는 등 인간적인 모습을 보인다. 검지 소속이어서 어쩔 수 없이 지령을 따르고 있을 뿐, 본인이 할 수 있는 선에서 최대한 지령에 저항하고 있는 인물이다.");
    var index = 0;

    var interval = setInterval(function() {
        $('#book1_desc').fadeOut(500, function() {
            // 지금 표시된 문자가 사라지면 수행할 작업
            index++;
            if (index === desc.length)
                index = 0;
            $(this).text(desc[index]).fadeIn(500);
        });
}, 4000);

//문자열은 모두 따옴표를 사용해서 입력 "문자별 어쩌구"
//문자열끼리는 쉼표(,)로 구분
//배열 대괄호 [] 꼭 열고 닫아주기


var leftarrow = document.getElementById('left-arrow')
var rightarrow = document.getElementById('right-arrow')

leftarrow.onclick = function () {
    $('#book1_desc').fadeOut(500,function() {
        index--;
        if (index === -1)
            index = 2;
        $(this).text(desc[index]).fadeIn(500);
        clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                });
            }, 4000);
        })
    }
rightarrow.onclick = function () {
    $('#book1_desc').fadeOut(500,function() {
        index++;
        if (index === desc.length)
            index = 0;
        $(this).text(desc[index]).fadeIn(500);
        clearInterval(interval);
            interval = setInterval(function() {
                $('#book1_desc').fadeOut(500, function() {
                    index++;
                    if (index === desc.length)
                        index = 0;
                    $(this).text(desc[index]).fadeIn(500);
                 });
            }, 4000);
        })
    }
}