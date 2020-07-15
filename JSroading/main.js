'use strict';


(() => {
  class Icon {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.r = 60;

      // E-1何度回転させたいかを指定
      this.angle = 0;
    }

    draw() {
      // F-1描画領域を半透明の白で塗りつぶす
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      // F-2領域全体を塗りつぶす
      this.ctx.fillRect(0, 0, this.width, this.height);
      // G-1描画空間の保存
      this.ctx.save();
      // 基準となる座標の位置を円の中心まで移動
      this.ctx.translate(this.width / 2, this.height /2);
      // E-2回転する角度はラジアン(角度の単位)に変換しないといけない
      this.ctx.rotate(Math.PI / 180 * this.angle);


      // アイコンの基準となる円形(最終的には見えない)
      // G-3この時点でこの円はいらなくなる
      // this.ctx.beginPath();
      // this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
      // this.ctx.stroke();

      // 実際に描画する図形
      this.ctx.beginPath();
      // 描画位置の指定
      this.ctx.moveTo(0, - this.r - 5);
      // 線を引く
      this.ctx.lineTo(0, - this.r + 5);
      this.ctx.strokeStyle ='#55b9f3';
      this.ctx.lineWidth = 6;
      this.ctx.stroke();

      // G-2次の描画時に原点に戻る
      this.ctx.restore();
    }

    update() {
      this.angle += 12;
    }

    run() {
      this.update();
      this.draw();

      setTimeout(() => {
        this.run();
      }, 80);
    }
  }

  const canvas = document.querySelector('canvas');
  // canvasがサポートされていない場合は処理を止める
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const icon = new Icon(canvas);
  icon.run();
})();
