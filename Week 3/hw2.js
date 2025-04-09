/* 컴퓨터가 1부터 100 사이의 숫자를 랜덤으로 정함*/
let computer = Math.floor(Math.random() * 100) + 1;


/* 10번 반복 후 남은 기회가 없고, 실패임을 알려야 하기 때문에 총 11회 반복 */

for (let i = 0 ; i <= 10 ; i++) {

    
    /* 남은 기회 */
    let life = 10-i;


    /* [if: 기회가 남았을 때] 입력값이 1부터 100 사이의 숫자인지 확인 */
   if (life > 0) {

        /*사용자에게 (1부터 100 사이의 숫자)를 10회 입력받음 (반복문)*/
        let input = prompt('1부터 100까지의 숫자를 입력하시오. (남은 기회:'+ life + ')');

        let user = Number(input);
        
        /* 입력값이 1부터 100 사이의 숫자인지 확인 */
        if (user < computer) {
            alert ('UP' + computer);
        } else if (user > computer) {
            alert ('DOWN');
        } else {
            alert ('축하합니다! 정답입니다.');
            break;
        } 
    } else {
        alert ('실패!');
        break;
    }
    
}


