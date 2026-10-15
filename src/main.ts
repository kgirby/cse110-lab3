import Konva from 'konva';

//first we need to create a stage
const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

//then create layer
const layer = new Konva.Layer();
stage.add(layer);

//create our shape
const lemon = new Konva.Line({
    points: [300, 300, 
        305, 305, 
        330, 310,
        350, 325,
        360, 335,
        390, 345,
        410, 350,
        420, 348,
        430, 343,
        450, 340,
        470, 330,
        480, 315,
        490, 307,
        500, 290,
        490, 285,
        480, 270,
        470, 255,
        450, 243,
        430, 235,
        420, 232,
        410, 230,
        390, 235,
        360, 245,
        350, 260,
        330, 280,
        305, 295
    ],
    fill: '#deca31',
    stroke: 'black',
    strokeWidth: 4,
    closed: true,
    draggable: true
});

//add the shape to the layer
layer.add(lemon);

//add the layer to the stage
stage.add(layer);

//change cursor
lemon.on('mouseenter', () => {
    lemon.getStage()!.container().style.cursor = 'pointer';
});
lemon.on('mouseleave', () => {
    lemon.getStage()!.container().style.cursor = 'default';
});

//size up
lemon.on('mousedown', () => {
     lemon.to({
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 0.1
    });

});

lemon.on('mouseup', () => {
    lemon.to({
        scaleX: 1,
        scaleY: 1,
        duration: 0.1,
    });
    
});






