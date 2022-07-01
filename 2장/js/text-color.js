        //heading 선언, h1태그를 저장한 것
        var heading = document.querySelector('#heading');
        
        //h1을 클릭하면 글씨를 빨갛게 바꿔라
        heading.onclick = function() {
            heading.style.color='red';
        }