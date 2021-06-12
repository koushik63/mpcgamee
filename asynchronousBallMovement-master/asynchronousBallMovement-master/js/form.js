class Form{
    constructor() {
   this.input = createInput("name")
    this.button=createButton('play')
    this.greeting = createElement('h2');
    }  
    hide(){
      this.greeting.hide()
      this.button.hide()
      this.input.hide()
    }
  display(){
      var title=createElement('h2')
      title.html("CAR RACING GAME")
      title.position(480,100)


     
      this.input.position(480,160)
   
      this.button.position(480,200)
      //var greeting=createElement('h3')
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this. button.hide();
 var name = this.input.value();
  playerCount+=1; 
  player.update()
  player.updateCount(playerCount);
  
   this.greeting.html("Hello " + name )
     this.greeting.position(480,300)
     });
  
   }
}