import * as THREE from "./three.module.min.js";


// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene();

//Mesh
const geomtery = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "blue"});
const mesh = new THREE.Mesh(geomtery,material);
mesh.position.x =0;
mesh.position.y=0;
mesh.position.z =0;
scene.add(mesh)

//Camera
const aspect ={
    width:window.innerWidth,
    height:window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height,1,2000)
camera.position.z = 3;

scene.add(camera)

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(aspect.width,aspect.height);

//Clock Class
const clock =new THREE.Clock();

//Animation 
const animate =()=>{

    //GetElapsedTime
    const elapsedTime = clock.getElapsedTime();

    //Update Rotation on the mesh
    mesh.rotation.x= elapsedTime; // we can multiple it by MATH.PI, ... if we want to speed up the rotation
    mesh.rotation.y= elapsedTime;
    
    //Renderer on the screen, keeps calling the renderer to render what is on the screen
    renderer.render(scene,camera);

    //RequestAnimationFrame
    window.requestAnimationFrame(animate);
}

animate();