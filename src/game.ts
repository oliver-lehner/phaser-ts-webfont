import "phaser";
import WebFontFile from "./webfontfile";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("demo");
  }

  preload() {
    this.load.addFile(new WebFontFile(this.load, "Press Start 2P"));
  }

  create() {
    const title = this.add.text(400, 300, "Hello World!", {
      fontFamily: '"Press Start 2P"',
      fontSize: "50px",
    });

    title.setOrigin(0.5, 0.5);
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  scene: Demo,
};

const game = new Phaser.Game(config);
