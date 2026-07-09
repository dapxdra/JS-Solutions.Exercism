// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class  Size{
  constructor(width = 80, height= 60){
    this.width = width;
    this.height = height;
  }
  resize(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
  }
}

export class Position {
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }
  move(newX, newY){
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  constructor(){
    this.screenSize= new Size(800,600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(newSize){
    const maxWidth = this.screenSize.width-this.position.x;
    const maxHeight = this.screenSize.height-this.position.y;
    let newWidth = Math.max(1, newSize.width);
    newWidth = Math.min(newWidth, maxWidth);
    let newHeight = Math.max(1, newSize.height);
    newHeight = Math.min(newHeight, maxHeight);
    
    this.size.resize(newWidth, newHeight);
  }
  move(newPos){
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    let newX = Math.max(0, newPos.x);
    newX = Math.min(newX, maxX);
    let newY = Math.max(0, newPos.y);
    newY = Math.min(newY, maxY);
    
    this.position.move(newX, newY);
  }
}

export function changeWindow(newProgramWindow) {
    const newSize = new Size(400, 300);
    const newPosition = new Position(100, 150)
    newProgramWindow.resize(newSize);
    newProgramWindow.move(newPosition);
    return newProgramWindow;
}