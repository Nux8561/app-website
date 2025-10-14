'use client';

import { useEffect, useRef, useState } from 'react';
import { Renderer, Camera, Transform, Geometry, Program, Mesh, Color } from 'ogl';

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec3 normal;
  
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform mat3 normalMatrix;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  void main() {
    vec3 normal = normalize(vNormal);
    
    float fresnel = pow(1.0 - abs(dot(normal, vec3(0.0, 0.0, 1.0))), 2.0);
    
    float pattern = sin(vPosition.x * 3.0 + uTime) * 
                    sin(vPosition.y * 3.0 + uTime * 0.7) * 
                    sin(vPosition.z * 3.0 + uTime * 0.5);
    
    vec3 color = mix(uColor1, uColor2, pattern * 0.5 + 0.5);
    color = mix(color, uColor3, fresnel);
    
    gl_FragColor = vec4(color, 0.8);
  }
`;

export function Prism({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';

    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 0, 7);

    const scene = new Transform();

    const geometry = new Geometry(gl, {
      position: {
        size: 3,
        data: new Float32Array([
          // Prism vertices (simplified icosahedron)
          0, 1.618, 1, 1, 1.618, 0, 0, 1.618, -1, -1, 1.618, 0,
          0, -1.618, 1, 1, -1.618, 0, 0, -1.618, -1, -1, -1.618, 0,
        ]),
      },
      normal: {
        size: 3,
        data: new Float32Array([
          0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
          0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
        ]),
      },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new Color('#667eea') },
        uColor2: { value: new Color('#764ba2') },
        uColor3: { value: new Color('#f093fb') },
      },
      transparent: true,
      cullFace: null,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationId: number;
    let time = 0;

    function update() {
      if (!isVisible) {
        animationId = requestAnimationFrame(update);
        return;
      }

      time += 0.01;
      program.uniforms.uTime.value = time;

      mesh.rotation.y += 0.005;
      mesh.rotation.x = Math.sin(time * 0.3) * 0.2;

      renderer.render({ scene, camera });
      animationId = requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const containerElement = containerRef.current;
    if (containerElement) {
      observer.observe(containerElement);
    }

    update();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      if (containerElement?.contains(gl.canvas)) {
        containerElement.removeChild(gl.canvas);
      }
    };
  }, [isVisible]);

  return <div ref={containerRef} className={className} />;
}

