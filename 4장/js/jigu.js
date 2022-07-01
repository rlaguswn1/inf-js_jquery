    $(document).ready(function(){
        // 이미지 웸요소(노드) 찾아서 저장
        var $jigu = $("#jigu");
        // 버튼에 이벤트 등록. btnStart를 누르면 실행해라
        $("#btnStart")
        .click(function(){
            // $jigu의 왼쪽을 480px에 갖다놔라
            $jigu.animate({
                left:"480px"
            // 1초 동안 이동해라    
            }, 1000);
        });
    });    