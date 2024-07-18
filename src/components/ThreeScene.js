import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import starTexture from '../star.png';



const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer;
    let stars, starGeo;

    const init = () => {
      // Inicialização da cena, câmera e renderer
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio); // responsividade
      renderer.setClearColor(0x000000, 1);
      mountRef.current.appendChild(renderer.domElement);

      // Geometria das estrelas
      starGeo = new THREE.BufferGeometry();
      const starCount = 10000;
      const positions = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1000; // Distribuição em x de -500 a 500
        positions[i * 3 + 1] = (Math.random() - 0.5) * 1000; // Distribuição em y de -500 a 500
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1000; // Distribuição em z de -500 a 500
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Textura das estrelas
      const sprite = new THREE.TextureLoader().load(starTexture);
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
        map: sprite
      });

      // Partículas das estrelas
      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      animate();
    };

    const animate = () => {
      // Animação para mover as estrelas
      const vertices = starGeo.attributes.position.array;
      const starCount = vertices.length / 3;

      for (let i = 0; i < starCount; i++) {
        vertices[i * 3 + 2] += 1; // Movimento das estrelas na direção z

        if (vertices[i * 3 + 2] > 500) {
          vertices[i * 3 + 2] = -500; // Reiniciar posição quando atingir o limite
        }
      }

      starGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    init();

    // Redimensionamento da janela
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className='z-20 h-full w-full'/>;
};

export default ThreeScene;
