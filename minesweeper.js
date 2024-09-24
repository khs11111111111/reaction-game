// 게임 상태
let board = [];
let rows = 10;
let columns = 10;
let minesCount = 20;

// 게임 보드 생성
function createBoard() {
    const boardElement = document.getElementById("board");
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            tile.classList.add("tile");
            boardElement.append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    document.getElementById("mines-count").innerText = minesCount;
}

// 타일 클릭 이벤트
function clickTile() {
    console.log("Tile clicked:", this.id);
    // 여기에 게임 로직을 추가할 예정입니다.
}

// 게임 초기화
window.onload = function() {
    createBoard();
}
