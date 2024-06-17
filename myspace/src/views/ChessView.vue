<template>
  <ContentBase>
    <p>棋局</p>

    <div class="card-body">
      <div class="row">
        <div class="col-7 img-field" style="position: relative;" @click="placeChessPiece">
          <!-- Keep the chess image -->
          <img src="../../public/chess.jpg" alt="" style="width: 80%; height: auto;">

          <!-- Position the chess pieces using absolute positioning -->
          <div
  v-for="(chessPiece, index) in chessPieces"
  :key="index"
  :style="chessPiece.style"
  class="chess-piece"
  :class="{ 'black-piece': chessPiece.color === 1, 'white-piece': chessPiece.color === 2 }"
>
  {{ chessPiece.number }}
</div>
        </div>
        <div class="col-2">
           <div class="card">
            <button type="button" class="btn btn-outline-primary" @click="startNewGame">重新记录棋局</button>
          </div>
          <p></p>
          <div class="card">
            <button type="button" class="btn btn-warning" @click="stopTime">保存当前记录</button>
          </div><p></p>
          <div class="card">
            <select class="form-select" aria-label="Disabled select example">
              <option selected>先手棋子颜色</option>
              <option value="1">黑子先手</option>
              <option value="2">白子先手</option>
            </select>
          </div>
          <p></p>
          <div class="card">
            <button type="button" class="btn btn-danger" @click="exitGame">退出棋局</button>
          </div>
          <p></p>
          <div class="card">
            <p class="fs-4">时间：</p>
            <p class="fs-5">{{ formattedTime }}</p>
          </div>
          <p></p>
          <div class="card">
              <p class="fs-5">本局监督记录人员id：CC</p>
          </div>
          
          <p></p>
          <div class="card">
            <select v-model="chessPieceColor" class="form-select" aria-label="Disabled select example" @change="updateChessPieceColor">
  <option disabled value="">选择执子棋子颜色</option>
  <option value="1">黑子执子</option>
  <option value="2">白子执子</option>
</select>
          </div>
          <p>
        
          </p>
          <div class="card">
          <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">备注</label>
</div>
</div>
        </div>
      </div>
    </div>
  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase';

export default {
  name: 'ChessView',
  components: {
    ContentBase,
  },
  data() {
  return {
    elapsedTime: 0,
    formattedTime: '0 小时 0 分钟 0 秒',
    chessPieceColor: 1, // 设置默认值为 1 或 2
    chessPieces: [],
    timedelta: 0,
  };
},

  created() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timedelta = 1;
      setInterval(() => {
        this.elapsedTime += this.timedelta;
        this.formatTime();
      }, 1000);
    },
    formatTime() {
      const hours = Math.floor(this.elapsedTime / 3600);
      const minutes = Math.floor((this.elapsedTime % 3600) / 60);
      const seconds = this.elapsedTime % 60;

      this.formattedTime = `${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
    },
    stopTime(){
      this.timedelta = 0;
    },
    startNewGame() {
  this.elapsedTime = 0;
  this.timedelta = 1;
  this.formattedTime = '0 小时 0 分钟 0 秒';

    this.chessPieces = [];
},updateChessPieceColor() {
    this.chessPieceColor = parseInt(this.chessPieceColor); // 确保为数字
  },

    exitGame() {
      this.$router.push('chesslist');
    },
    placeChessPiece(event) {
      if (this.chessPieceColor === null || this.chessPieceColor === undefined) {
    return;
  }
      const imgRect = event.target.getBoundingClientRect();
      const x = event.clientX - imgRect.left + 84;
      const y = event.clientY - imgRect.top;

      const chessboardWidth = imgRect.width;
      const chessboardHeight = imgRect.height;
      const chessPieceSize = 1.5; 

      if (x >= 0 && x <= chessboardWidth && y >= 0 && y <= chessboardHeight) {
        const adjustedX = x - chessPieceSize / 2;
        const adjustedY = y - chessPieceSize / 2;

        this.chessPieces.push({
          number: this.chessPieces.length + 1, 
          color: this.chessPieceColor,
          style: {
            position: 'absolute',
            left: `${adjustedX}px`,
            top: `${adjustedY}px`,  
            width: `${chessPieceSize}rem`,
            height: `${chessPieceSize}rem`,
            transform: 'translate(-50%, -50%)', 
            color: this.chessPieceColor === 1 ? 'white' : 'black', 
          },
        });

        this.chessPieceColor = this.chessPieceColor === 1 ? 2 : 1;
      }
    },
  },
};
</script>

<style scoped>
.img-field {
  position: relative;
}

.chess-piece {
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.black-piece {
  background-color: black;
  color: white;
  /* Add other styles for the black piece as needed */
}

.white-piece {
  background-color: white;
  color: black;
  /* Add other styles for the white piece as needed */
}

#floatingTextarea2{
  background-color: rgba(240,248,255,0.6);
}
</style>
