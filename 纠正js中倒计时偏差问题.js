// 纠正 js 中倒计时偏差问题

// 通常倒计时的实现是由定时器来实现的，但是定时器是将事件加入队列，等执行栈为空才取出事件执行，并不是立即执行的，所以会有时间偏差

// 解决方法：

// 基于系统时间差纠正
class AccurateCountDown {
  constructor(endTime, onUpdate, onEnd) {
    this.endTime = new Date(endTime).getTime();
    this.onUpdate = onUpdate;
    this.onEnd = onEnd;
    this.timer = null;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.update();
  }

  update() {
    if (!this.isRunning) return;
    const now = Date.now();
    const diff = this.endTime - now;
    if (diff <= 0) {
      this.onUpdate(0);
      this.onEnd && this.onEnd();
      this.stop();
      return;
    }

    this.onUpdate(diff);

    const spendTime = Date.now() - now; //耗时
    const nextTick = Math.max(0, 1000 - spendTime); //下次执行是否需要延迟
    this.timer = setTimeout(() => {
      this.update();
    }, nextTick);
  }

  stop() {
    this.isRunning = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

const countDown = new AccurateCountDown(
  Date.now() + 10000, //10s 后结束
  diff => {
    const seconds = Math.floor(diff / 1000);
    console.log(seconds);
  },
  () => {
    console.log("end");
  }
);
countDown.start();
