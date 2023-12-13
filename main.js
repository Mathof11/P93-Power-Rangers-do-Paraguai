var canvas = new fabric.Canvas("myCanvas")

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Termine de programar a função new_image() para adicionar uma nova imagem
function new_image(get_image)
{
        fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
		block_image_object.scaleToWidth(block_Image_Width);
		block_image_object.scaleToHeigth(block_image.height);
		block_image_object.set({top:block_y,left:block_x});
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	// Utilize keycode para adicionar a imagem do ranger vermelho (red)
	if(keyPressed == '82') 
    {
		block_x= 10;
		new_image('vermelho.png');
		console.log('R')
	}
	if(keyPressed == '71') 
    {
		block_x= 310;
		new_image('verde.png');
		console.log('G')
	}
	if(keyPressed == '89') 
    {
		block_x= 560;
		new_image('amarelo.png');
		console.log('Y')
	}
	if(keyPressed == '80') 
    {
		block_x= 880;
		new_image('rosa.png');
		console.log('P')
	}
	if(keyPressed == '66') 
    {
		block_x= 1040;
		new_image('azul.png');
		console.log('B')
	}
}

