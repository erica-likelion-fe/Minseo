
/* 컴퓨터가 1부터 100 사이의 숫자를 랜덤으로 정함*/
let computer = Math.floor(Math.random() * 100) + 1;
let life = 10;
let gameOver = false;

document.getElementById("attempts").textContent = "🩸 LIFE : " + life;

function checkInput() {
    
        
        if (gameOver) return;
        const input = parseInt(document.getElementById("input").value);
        

        if(isNaN(input)) {
            document.getElementById("result").textContent = "📢 Enter the Number.";
            return;
        } 
        
        if (input <1 || input > 100) {
            document.getElementById("result").textContent = "📢 Enter the Number between 1 and 100.";
            document.getElementById("hint").textContent = "";
            return;
            
        } 

        
        
            
        if(input === computer) {
            document.getElementById("result").textContent = "SUCCESS ✅ " + input;
            document.getElementById("attempts").textContent = "";
            document.getElementById("hint").textContent = "";
            gameOver = true;
        } else {

            life--;

            if(input < computer) {
                document.getElementById("hint").textContent = input + " 🔼 UP!";
            } else if(input > computer) {
                document.getElementById("hint").textContent = input + " 🔽 DOWN!";
            }
            document.getElementById("result").textContent = "";
            document.getElementById("attempts").textContent = "🩸 LIFE: " + life;
        }
            
        if (life === 0) {
            document.getElementById("result").textContent = "FAIL ❌ ";
            document.getElementById("hint").textContent = "😞 The Answer is " + computer + " .";
            gameOver = true;
        }
    
}

function resetGame() {
    computer = Math.floor(Math.random() * 100) + 1;
    life = 10;
    gameOver = false;
    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent = "🩸 LIFE : " + life;
    document.getElementById("hint").textContent = "";
    document.getElementById("input").value = "";
}
        
    
        
    