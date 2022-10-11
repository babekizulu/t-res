//libs
import * as THREE from 'three';
const {WebGLRenderer, PerspectiveCamera, Scene, BoxGeometry, MeshPhongMaterial, Mesh, DirectionalLight} = THREE;
//dom elements
const canvas = document.querySelector('#canvas');
//style
import './scss/App.scss';
//instantiate a renderer
const renderer = new WebGLRenderer({canvas});
//camera params: field of view, aspect ratio, near clipping, far clipping
const fov = 75;
const a = 2;
const n = 0.1;
const f = 5;
//instantiate a camera
const camera = new PerspectiveCamera(fov, a, n, f);
//set camera position
camera.position.z = 2;
//instantiate a scene
const scene = new Scene();
//geometry params: (box) width, height, depth
const w = 1,
      h = 1, 
      d = 1;
//instantiate a geometry
const geometry = new BoxGeometry(w, h, d);
//material params: color
const color = 0x44aa88;
//instantiate a material
const material = new MeshPhongMaterial({color: color});
//instantiate a mesh
//@params: geometry, material
const cube = new Mesh(geometry, material);
//set mesh position(set to origin by default)
//add mesh to scene 
//@func: add()
scene.add(cube);
//light params: color, intensity
const lightColor = 0xffffff;
const intensity = 1;
//instantiate a light
const light = new DirectionalLight(lightColor, intensity);
//set light position:
//@func: position.set(x, y, z)
light.position.set(-2, 2, 4);
//add light to scene
//@func: add()
scene.add(light)
//resize renderer to display size(if necessary)
//@param: renderer
const resize = (renderer) => {
    //get canvas element
    const canvas = renderer.domElement;
    const {clientWidth, clientHeight} = canvas;
    //get client width and height of canvas element
    const w = clientWidth;
    const h = clientHeight;
    //store a boolean that evaluates:
    // - If Canvas width is not equal to Client Width
    // - If Canvas height is not equal to Client Height
    const needResize = canvas.width !== w || canvas.height !== h;
    //if drawbuffer size is not equal to display size then resize
    if(needResize) {
        //set size to display size
        renderer.setSize(w, h, false);
    }
    //will return true if canvas was resized
    return needResize;
}
//create a render loop
//@param: time
const loop = (t) => {
    //convert time to milliseconds
    t *= 0.001;
    //set rotation of mesh to time
    cube.rotation.x = t;
    cube.rotation.y = t;
    //if the canvas drawbuffer size needs to be resized,
    // then update the aspect ratio to the canvas display size
    if(resize(renderer)) {
        //update aspect ratio to canvas size
        //1. get canvas
        const canvas = renderer.domElement;
        const {clientWidth, clientHeight} = canvas;
        //2. set camera aspect to canvas size
        camera.aspect = clientWidth / clientHeight
        //3. update the cameras projection matrix
    camera.updateProjectionMatrix();
    }
    //render the scene
    //@params: scene, camera
    renderer.render(scene, camera)
    //request animation frame
    //@param: render loop function
    requestAnimationFrame(loop);
}
//initial animation frame request
requestAnimationFrame(loop);

