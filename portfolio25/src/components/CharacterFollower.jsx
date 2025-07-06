// THIS IS A CUSTOM MADE VIBE CODED MOUSE POINTER FOLLOWER ;), vibe-coded by chatgpt

import { useEffect, useRef, useState } from "react";

// sprite sets for 4 directions with 2 frames each
const SPRITE_SETS = {
  S: [[0, 0], [1, 0]], // down
  W: [[0, 1], [1, 1]], // left
  E: [[0, 2], [1, 2]], // right
  N: [[0, 3], [1, 3]], // up
  idle: [[0, 0]],      // first down frame
};

const SPRITE_SIZE = 64;
const CHARACTER_SPEED = 0.009; // smaller = more delay
const FRAME_RATE_DIVISOR = 15; // animation updates every 15 frames

export default function CharacterFollower() {
  const ref = useRef(null);
  const [frameCount, setFrameCount] = useState(0);
  const [charPos, setCharPos] = useState({ x: 100, y: 100 });
  const [mousePos, setMousePos] = useState({ x: 100, y: 100 });
  const animationRef = useRef(null);

  const setSprite = (direction, frame) => {
    const sprite = SPRITE_SETS[direction]
      ? SPRITE_SETS[direction][frame % SPRITE_SETS[direction].length]
      : SPRITE_SETS.idle[0];

    if (ref.current) {
      ref.current.style.backgroundPosition = `-${sprite[0] * SPRITE_SIZE}px -${sprite[1] * SPRITE_SIZE}px`;
    }
  };

  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  const moveCharacter = () => {
    setFrameCount((prev) => prev + 1);

    const dx = mousePos.x - charPos.x;
    const dy = mousePos.y - charPos.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);

    if (distance < 5) {
      setSprite("idle", 0);
      return;
    }

    // Direction logic
    let direction = "";
    if (Math.abs(dx) > Math.abs(dy)) {
      direction = dx > 0 ? "E" : "W";
    } else {
      direction = dy > 0 ? "S" : "N";
    }

    // Smooth animation using reduced frame update
    const animationIndex = Math.floor(frameCount / FRAME_RATE_DIVISOR);
    setSprite(direction, animationIndex);

    const newX = lerp(charPos.x, mousePos.x, CHARACTER_SPEED);
    const newY = lerp(charPos.y, mousePos.y, CHARACTER_SPEED);

    setCharPos({
      x: Math.min(window.innerWidth - SPRITE_SIZE, Math.max(0, newX)),
      y: Math.min(window.innerHeight - SPRITE_SIZE, Math.max(0, newY)),
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const loop = () => {
      moveCharacter();
      animationRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [charPos, mousePos, frameCount]);

  return (
    <div
    className="bg-black"
      ref={ref}
      style={{
        position: "fixed",
        width: SPRITE_SIZE,
        height: SPRITE_SIZE,
        left: charPos.x,
        top: charPos.y,
        backgroundImage: "url('/assets/my-character.png')",
        backgroundRepeat: "no-repeat",
        imageRendering: "pixelated",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
