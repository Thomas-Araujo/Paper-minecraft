var player_objects="";
var block_imageObject="";
var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
player_y=10;
player_x=10;
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_objects=Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_imageObject=Img;
        block_imageObject.scaleToWidth(block_image_width);
        block_imageObject.scaleToHeight(block_image_height);
        block_imageObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imageObject);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if (keypress=="38"){
        up();
    }
    if (keypress=="40"){
        down();
    }
    if (keypress=="39"){
        right();
    }
    if (keypress=="37"){
        left();
    }
    if (keypress=="87"){
        new_image("wall.jpg");
    }
    if (keypress=="71"){
        new_image("ground.png");
    }
    if (keypress=="76"){
        new_image("light_green.png");
    }
    if (keypress=="84"){
        new_image("trunk.jpg");
    }
    if (keypress=="82"){
        new_image("roof.jpg");
    }
    if (keypress=="89"){
        new_image("yellow_wall.png");
    }
    if (keypress=="68"){
        new_image("dark_green.png");
    }
    if (keypress=="67"){
        new_image("cloud.jpg");
    }
    if (e.shiftKey==true && keypress== "80") {
        block_image_width+=10;
        block_image_height+=10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey==true && keypress== "77") {
        block_image_width-=10;
        block_image_height-=10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
}
function up(){
    if (player_y > 0){
        player_y=player_y-block_image_height;
        canvas.remove(player_objects);
        player_update();
    }
}
function down(){
    if (player_y < 500){
        player_y=player_y+block_image_height;
        canvas.remove(player_objects);
        player_update();
    }
}
function left(){
    if (player_x > 0){
        player_x=player_x-block_image_width;
        canvas.remove(player_objects);
        player_update();
    }
}
function right(){
    if (player_x < 800){
        player_x=player_x+block_image_width;
        canvas.remove(player_objects);
        player_update();
    }
}