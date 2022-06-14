import React, { useEffect, useRef } from "react"
import * as headerStyles from "./header.module.scss"
import { Typography, Container, Box, Button } from "@mui/material"
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp"
import { Link } from "gatsby"

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import * as THREE from "three"
import { Reflector } from "three/examples/jsm/objects/Reflector.js"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js"
import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js"

import sceneFile from "./models/scene.glb"

import matcapFile1 from "./models/matcap/3E95CC_65D9F1_A2E2F6_679BD4.png"
import matcapFile2 from "./models/matcap/8A6565_2E214D_D48A5F_ADA59C.png"
import matcapFile3 from "./models/matcap/color-6.png"

import bg1 from "../../images/bg_blue.jpg"
import bg2 from "../../images/bg_green.jpg"
import bg3 from "../../images/space.jpg"
const Header = () => {
  const canvasRef = useRef()
  const canvasRoot = useRef()
  // const headerRef = useRef();

  useEffect(() => {
    console.log(canvasRoot)

    const canavs = canvasRef.current

    const root = canvasRoot.current

    let sceneRoot

    let mixer

    const clock = new THREE.Clock()

    const bgImages = [bg1, bg2, bg3]
    let bgImagesIndex = 0

    let composer

    let mouseX = 0
    let mouseY = 0
    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2
    let cameraPosition = new THREE.Vector2()

    let targetPosition = new THREE.Vector2()

    const targetGroup = new THREE.Group()
    const targetQuaternion = new THREE.Quaternion()

    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(
      50,
      root.offsetWidth / root.offsetHeight,
      0.1,
      1000
    )
    var renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: canavs,
      antialias: true,
    })
    renderer.setClearColor(0xffffff, 0)
    const canvas = renderer.domElement
    canvas.style.position = "absolute"
    canvas.style.top = "0"
    canvas.style.zIndex = "-1"

    renderer.setSize(root.offsetWidth, root.offsetHeight)

    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    pmremGenerator.compileEquirectangularShader()
    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture

    // renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setPixelRatio(window.devicePixelRatio * 1)
    // renderer.toneMappingExposure =0.7;

    var geometry = new THREE.BoxGeometry(1, 1, 1)
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    var cube = new THREE.Mesh(geometry, material)
    // scene.add( cube );
    camera.position.z = 5

    window.addEventListener("resize", onWindowResize, false)
    root.addEventListener("pointermove", onPointerMove)
    root.addEventListener("touchmove", onPointerMove)
    onWindowResize()

    function onWindowResize() {
      // background-position

      // root.style.backgroundImage = bg3

      const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2
      const offset = clamp(root.offsetWidth - 900, 0, 300)

      const offsetY = 100 - clamp(root.offsetWidth - 900, 0, 100)

      const cameraFOV = clamp(offsetY, 45, 95)

      camera.setViewOffset(
        root.offsetWidth,
        root.offsetHeight,
        -offset,
        offsetY,
        root.offsetWidth,
        root.offsetHeight
      )
      camera.fov = cameraFOV
      

      camera.aspect = root.offsetWidth / root.offsetHeight
      camera.updateProjectionMatrix()

      // root.style.backgroundPosition = `${offset}px ${-offsetY}px`

      renderer.setSize(root.offsetWidth, root.offsetHeight)
    }

    //     const light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
    // // const helper = new THREE.HemisphereLightHelper( light, 5 );
    // scene.add( light );

    // const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
    // directionalLight.position.set(0,10,5)
    // scene.add( directionalLight );

    // const ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
    // // scene.add( ambientLight );

    // add mesh

    const gltfloader = new GLTFLoader()

    gltfloader.load(
      sceneFile,
      gltf => {
        sceneRoot = gltf.scene
        scene.add(gltf.scene)
        const scale = 10

        gltf.scene.scale.set(scale, scale, scale)
        // gltf.scene.position.set(0,0,1)
        mixer = new THREE.AnimationMixer(gltf.scene)
        const action = mixer.clipAction(gltf.animations[0])
        // action.timeScale = 0.6
        action.play()

        console.log(action._clip.duration)
        const intervalTime = action._clip.duration / 3

        setInterval(()=>{
          bgImagesIndex += 1
          root.style.backgroundImage = `url(${bgImages[bgImagesIndex]})`
          if(bgImagesIndex >1){
            bgImagesIndex = -1
          }
        },intervalTime*1000)
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened")
      }
    )

    var width = window.innerWidth || 1
    var height = window.innerHeight || 1
    var parameters = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      stencilBuffer: false,
    }

    var renderTarget = new THREE.WebGLRenderTarget(width, height, parameters)

    composer = new EffectComposer(renderer, renderTarget)

    // composer = new EffectComposer( renderer,renderTarget );

    composer.addPass(new RenderPass(scene, camera))
    const afterimagePass = new AfterimagePass()
    afterimagePass.uniforms["damp"] = { value: 0.7 }
    // composer.addPass( afterimagePass );

    // renderPass.clear=false

    function onPointerMove(event) {
      if (event.movementX) {
        mouseX -= event.movementX * 0.01
        mouseY += event.movementY * 0.05
        targetPosition.set(clamp(mouseX, -5, 5), clamp(mouseY, -5, 5))
        mouseX = clamp(mouseX, -5, 5)
        mouseY = clamp(mouseY, -5, 5)
      }
    }

    var animate = function () {
      requestAnimationFrame(animate)

      cameraPosition.lerp(targetPosition, 0.05)

      camera.position.x = cameraPosition.x
      camera.position.y = cameraPosition.y

      camera.lookAt(scene.position)

      if (sceneRoot) {
        // sceneRoot.rotation.x += 0.01;
        // sceneRoot.rotation.y += 0.01;
      }
      if (mixer) mixer.update(clock.getDelta())

      // renderer.render( scene, camera );
      composer.render()
    }

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    animate()
  }, [])

  return (
    <header ref={canvasRoot} className={headerStyles.header}>
      <canvas ref={canvasRef}></canvas>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-end", md: "center" },
          alignItems: "flex-start",
          maxWidth: "100vw",
          background:
          {xs:"linear-gradient(180deg, rgb(255 255 255 / 0%) 0%, rgb(0 0 0 / 50%) 99%);",md:"none"},
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "75%" },
            marginBottom: { xs: "60px", md: "-60px" },
            textAlign: { xs: "center", md: "start" },
            padding: { xs: "0 5vw", md: "0" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },

          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: "clash display, sans-serif",
              fontSize: { xs: "2.2rem", md: "4rem" },
              color: "white",
              margin: "10px 0",
              fontWeight: "800",
              letterSpacing: "2px",
              width: { xs: "90vw", md: "100%" },
            }}
          >
            Develop Once.
            <br /> Meta Anywhere
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "0.7rem", md: "1rem" },
              color: "white",
              width: { xs: "100%", md: "70%" },
              lineHeight: { xs: "120%", md: "200%" },
              margin: "10px 0",
            }}
          >
            We build Web based Augmented & Virtual Reality experiences that help
            businesses modernize the way they work and discover new ways to
            engage customers.
          </Typography>
          <Box
            sx={{
              flexWrap: "nowrap",
              margin: "10px 0",
              display: "flex",
            }}
          >
            <Link to="/contact">
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderStyle: "solid",
                  borderColor: "white",
                  borderRadius: 8,
                  margin: "0 10px",
                }}
              >
                Get Started
                <ArrowRightAltSharpIcon
                  sx={{
                    marginLeft: "5px",
                  }}
                ></ArrowRightAltSharpIcon>
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outlined"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "white",
                  borderStyle: "solid",
                  borderColor: "white",
                  borderRadius: 8,
                  margin: "0 10px",
                }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          marginBottom: "-6px",
        }}
      >
        <svg
          width="100%"
          height="50"
          viewBox="0 0 1440 50"
          fill="#ecf3fe"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 24.8273L40 29.0162C80 33.2838 160 41.5436 240 44.7491C320 47.8367 400 45.8701 480 42.6645C560 39.5769 640 35.2504 720 26.9316C800 18.5342 880 5.94783 960 1.75894C1040 -2.50862 1120 1.81794 1200 5.94783C1280 10.0777 1360 14.4043 1400 16.4299L1440 18.5342V50H1400C1360 50 1280 50 1200 50C1120 50 1040 50 960 50C880 50 800 50 720 50C640 50 560 50 480 50C400 50 320 50 240 50C160 50 80 50 40 50H0V24.8273Z" />
        </svg>
      </div>
    </header>
  )
}

export default Header
