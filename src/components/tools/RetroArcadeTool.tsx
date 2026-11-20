import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Gamepad2,
  Trophy,
  Volume2,
  VolumeX,
  RotateCcw,
  Play,
  Pause,
  Vibrate,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Sparkles,
  Zap,
  Target,
  Shield,
  Activity,
  Boxes,
} from 'lucide-react';

interface RetroArcadeToolProps {
  nightVision: boolean;
}

type GameType = 'viper' | 'civblocks' | 'brickbreaker' | 'starimpact';
type DisplayTheme = 'lcd' | 'obsidian' | 'night';

interface HighScores {
  viper: number;
  civblocks: number;
  brickbreaker: number;
  starimpact: number;
}

const HIGH_SCORE_KEY = 'civzero_retro_arcade_scores_v1';
const SOUND_MUTE_KEY = 'civzero_retro_arcade_muted';

// ==========================================
// 8-Bit Web Audio Procedural Synthesizer
// ==========================================
class SoundSynth {
  private ctx: AudioContext | null = null;
  public muted: boolean = false;

  constructor() {
    this.muted = localStorage.getItem(SOUND_MUTE_KEY) === 'true';
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  playTone(freq: number, durationMs: number, type: OscillatorType = 'square', gainVal: number = 0.1) {
    if (this.muted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + durationMs / 1000);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + durationMs / 1000);
    } catch {
      // Audio restrictions or unsupported
    }
  }

  move() {
    this.playTone(180, 20, 'square', 0.04);
  }

  eat() {
    this.playTone(480, 40, 'square', 0.1);
    setTimeout(() => this.playTone(720, 50, 'square', 0.1), 40);
  }

  hit() {
    this.playTone(320, 30, 'triangle', 0.12);
  }

  brickBreak() {
    this.playTone(580, 35, 'square', 0.12);
    setTimeout(() => this.playTone(880, 45, 'triangle', 0.12), 35);
  }

  shoot() {
    if (this.muted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch {}
  }

  explode() {
    this.playTone(130, 140, 'sawtooth', 0.18);
    setTimeout(() => this.playTone(70, 160, 'square', 0.15), 50);
  }

  clearLine() {
    [523, 659, 784, 1046].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 60, 'square', 0.12), i * 50);
    });
  }

  gameOver() {
    [320, 260, 200, 140].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 100, 'sawtooth', 0.15), i * 90);
    });
  }
}

const soundSynth = new SoundSynth();

// ==========================================
// Tetromino Definitions
// ==========================================
const SHAPES: number[][][] = [
  // I (type 1)
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  // O (type 2)
  [
    [1, 1],
    [1, 1],
  ],
  // T (type 3)
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // S (type 4)
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  // Z (type 5)
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  // J (type 6)
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // L (type 7)
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
];

const TETRIS_COLORS = [
  '#38bdf8', // 1: Cyan (I)
  '#fbbf24', // 2: Amber (O)
  '#c084fc', // 3: Purple (T)
  '#34d399', // 4: Emerald (S)
  '#f87171', // 5: Rose (Z)
  '#60a5fa', // 6: Blue (J)
  '#fb923c', // 7: Orange (L)
];

export const RetroArcadeTool: React.FC<RetroArcadeToolProps> = ({ nightVision }) => {
  const [selectedGame, setSelectedGame] = useState<GameType>('viper');
  const [theme, setTheme] = useState<DisplayTheme>(nightVision ? 'night' : 'lcd');
  const [isMuted, setIsMuted] = useState<boolean>(() => soundSynth.muted);
  const [hapticsEnabled, setHapticsEnabled] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [newHighScore, setNewHighScore] = useState<boolean>(false);

  // High Scores
  const [highScores, setHighScores] = useState<HighScores>(() => {
    try {
      const saved = localStorage.getItem(HIGH_SCORE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { viper: 0, civblocks: 0, brickbreaker: 0, starimpact: 0 };
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Haptic Feedback Helper
  const triggerHaptic = useCallback(
    (duration: number = 12) => {
      if (hapticsEnabled && typeof navigator !== 'undefined' && navigator.vibrate) {
        try {
          navigator.vibrate(duration);
        } catch {}
      }
    },
    [hapticsEnabled]
  );

  // Update sound synth mute
  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundSynth.muted = next;
    try {
      localStorage.setItem(SOUND_MUTE_KEY, String(next));
    } catch {}
    triggerHaptic(15);
  };

  // High score checker
  const updateScoreAndCheckHigh = useCallback(
    (newVal: number) => {
      setScore(newVal);
      setHighScores((prev) => {
        if (newVal > prev[selectedGame]) {
          const updated = { ...prev, [selectedGame]: newVal };
          try {
            localStorage.setItem(HIGH_SCORE_KEY, JSON.stringify(updated));
          } catch {}
          setNewHighScore(true);
          return updated;
        }
        return prev;
      });
    },
    [selectedGame]
  );

  // Game Engine State Refs
  const viperState = useRef<{
    snake: { x: number; y: number }[];
    dir: { x: number; y: number };
    nextDir: { x: number; y: number };
    food: { x: number; y: number };
    speed: number;
    lastTick: number;
    wrapBorders: boolean;
  }>({
    snake: [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ],
    dir: { x: 1, y: 0 },
    nextDir: { x: 1, y: 0 },
    food: { x: 15, y: 10 },
    speed: 120,
    lastTick: 0,
    wrapBorders: true,
  });

  const blocksState = useRef<{
    grid: number[][]; // 20 rows x 10 cols
    currentPiece: { shape: number[][]; x: number; y: number; type: number };
    lastDrop: number;
    dropInterval: number;
    linesCleared: number;
  }>({
    grid: Array.from({ length: 20 }, () => Array(10).fill(0)),
    currentPiece: { shape: SHAPES[0], x: 3, y: 0, type: 1 },
    lastDrop: 0,
    dropInterval: 650,
    linesCleared: 0,
  });

  const breakerState = useRef<{
    paddleX: number;
    paddleW: number;
    paddleH: number;
    ballX: number;
    ballY: number;
    ballVx: number;
    ballVy: number;
    ballRadius: number;
    bricks: { x: number; y: number; w: number; h: number; hp: number; maxHp: number; type: string }[];
    lives: number;
    launched: boolean;
  }>({
    paddleX: 130,
    paddleW: 60,
    paddleH: 8,
    ballX: 160,
    ballY: 280,
    ballVx: 2.8,
    ballVy: -3.2,
    ballRadius: 4,
    bricks: [],
    lives: 3,
    launched: false,
  });

  const starState = useRef<{
    playerX: number;
    playerY: number;
    playerSpeed: number;
    bullets: { x: number; y: number; vx: number }[];
    enemies: { x: number; y: number; vx: number; vy: number; hp: number; maxHp: number; type: string; size: number }[];
    stars: { x: number; y: number; speed: number; size: number }[];
    lastSpawn: number;
    lastFire: number;
    lives: number;
    invincibleTimer: number;
  }>({
    playerX: 25,
    playerY: 100,
    playerSpeed: 4,
    bullets: [],
    enemies: [],
    stars: [],
    lastSpawn: 0,
    lastFire: 0,
    lives: 3,
    invincibleTimer: 0,
  });

  // Color Palettes
  const getColors = useCallback(() => {
    if (nightVision || theme === 'night') {
      return {
        bg: '#140000',
        grid: '#2b0000',
        ink: '#ef4444',
        accent: '#dc2626',
        secondary: '#7f1d1d',
        text: '#fecaca',
      };
    }
    if (theme === 'obsidian') {
      return {
        bg: '#070a0f',
        grid: '#111827',
        ink: '#38bdf8',
        accent: '#f59e0b',
        secondary: '#10b981',
        text: '#f8fafc',
      };
    }
    // Authentic Dot-Matrix LCD Green Monochrome
    return {
      bg: '#9bbc0f',
      grid: '#8bac0f',
      ink: '#0f380f',
      accent: '#306230',
      secondary: '#0f380f',
      text: '#0f380f',
    };
  }, [nightVision, theme]);

  // ==========================================
  // GAME INITIALIZERS
  // ==========================================
  const initViper = useCallback(() => {
    viperState.current = {
      snake: [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 },
      ],
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      food: { x: 15, y: 10 },
      speed: 120,
      lastTick: performance.now(),
      wrapBorders: true,
    };
    setScore(0);
    setGameOver(false);
    setNewHighScore(false);
    setIsPaused(false);
  }, []);

  const spawnRandomPiece = useCallback(() => {
    const shapeIdx = Math.floor(Math.random() * SHAPES.length);
    const shape = SHAPES[shapeIdx];
    return {
      shape,
      x: Math.floor(5 - shape[0].length / 2),
      y: 0,
      type: shapeIdx + 1,
    };
  }, []);

  const initCivBlocks = useCallback(() => {
    blocksState.current = {
      grid: Array.from({ length: 20 }, () => Array(10).fill(0)),
      currentPiece: spawnRandomPiece(),
      lastDrop: performance.now(),
      dropInterval: 600,
      linesCleared: 0,
    };
    setScore(0);
    setGameOver(false);
    setNewHighScore(false);
    setIsPaused(false);
  }, [spawnRandomPiece]);

  const initBreaker = useCallback(() => {
    const bricks: typeof breakerState.current.bricks = [];
    const cols = 8;
    const rows = 4;
    const w = 34;
    const h = 10;
    const padding = 5;
    const offsetX = 8;
    const offsetY = 30;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let type = 'clay';
        let maxHp = 1;
        if (r === 0) {
          type = 'titanium';
          maxHp = 3;
        } else if (r === 1) {
          type = 'iron';
          maxHp = 2;
        } else if (r === 2) {
          type = 'timber';
          maxHp = 1;
        }

        bricks.push({
          x: offsetX + c * (w + padding),
          y: offsetY + r * (h + padding),
          w,
          h,
          hp: maxHp,
          maxHp,
          type,
        });
      }
    }

    breakerState.current = {
      paddleX: 130,
      paddleW: 60,
      paddleH: 8,
      ballX: 160,
      ballY: 250,
      ballVx: 2.8,
      ballVy: -3.2,
      ballRadius: 4,
      bricks,
      lives: 3,
      launched: false,
    };
    setScore(0);
    setGameOver(false);
    setNewHighScore(false);
    setIsPaused(false);
  }, []);

  const initStar = useCallback(() => {
    const stars = Array.from({ length: 30 }, () => ({
      x: Math.random() * 320,
      y: Math.random() * 220,
      speed: 0.5 + Math.random() * 1.5,
      size: Math.random() > 0.8 ? 2 : 1,
    }));

    starState.current = {
      playerX: 25,
      playerY: 100,
      playerSpeed: 4,
      bullets: [],
      enemies: [],
      stars,
      lastSpawn: performance.now(),
      lastFire: 0,
      lives: 3,
      invincibleTimer: 60,
    };
    setScore(0);
    setGameOver(false);
    setNewHighScore(false);
    setIsPaused(false);
  }, []);

  // Switch game handler
  const switchGame = (game: GameType) => {
    setSelectedGame(game);
    triggerHaptic(15);
    if (game === 'viper') initViper();
    if (game === 'civblocks') initCivBlocks();
    if (game === 'brickbreaker') initBreaker();
    if (game === 'starimpact') initStar();
  };

  // Restart current game
  const restartCurrentGame = () => {
    triggerHaptic(20);
    if (selectedGame === 'viper') initViper();
    if (selectedGame === 'civblocks') initCivBlocks();
    if (selectedGame === 'brickbreaker') initBreaker();
    if (selectedGame === 'starimpact') initStar();
  };

  // Initial mount
  useEffect(() => {
    initViper();
  }, [initViper]);

  // ==========================================
  // INPUT CONTROLLERS & VIRTUAL D-PAD ACTIONS
  // ==========================================
  const handleDirection = useCallback(
    (action: 'up' | 'down' | 'left' | 'right' | 'action' | 'drop') => {
      triggerHaptic(10);
      if (gameOver) {
        restartCurrentGame();
        return;
      }

      if (selectedGame === 'viper') {
        const v = viperState.current;
        if (action === 'up' && v.dir.y === 0) v.nextDir = { x: 0, y: -1 };
        if (action === 'down' && v.dir.y === 0) v.nextDir = { x: 0, y: 1 };
        if (action === 'left' && v.dir.x === 0) v.nextDir = { x: -1, y: 0 };
        if (action === 'right' && v.dir.x === 0) v.nextDir = { x: 1, y: 0 };
        soundSynth.move();
      } else if (selectedGame === 'civblocks') {
        const b = blocksState.current;
        const p = b.currentPiece;

        const checkCollision = (targetPiece: typeof p, offsetX: number, offsetY: number, shapeOverride?: number[][]) => {
          const shape = shapeOverride || targetPiece.shape;
          for (let r = 0; r < shape.length; r++) {
            for (let c = 0; c < shape[r].length; c++) {
              if (shape[r][c]) {
                const newX = targetPiece.x + c + offsetX;
                const newY = targetPiece.y + r + offsetY;
                if (newX < 0 || newX >= 10 || newY >= 20) return true;
                if (newY >= 0 && b.grid[newY][newX] !== 0) return true;
              }
            }
          }
          return false;
        };

        if (action === 'left' && !checkCollision(p, -1, 0)) {
          p.x -= 1;
          soundSynth.move();
        } else if (action === 'right' && !checkCollision(p, 1, 0)) {
          p.x += 1;
          soundSynth.move();
        } else if (action === 'down') {
          if (!checkCollision(p, 0, 1)) {
            p.y += 1;
            soundSynth.move();
          }
        } else if (action === 'action' || action === 'up') {
          const N = p.shape.length;
          const rotated = Array.from({ length: N }, (_, r) =>
            Array.from({ length: N }, (_, c) => p.shape[N - 1 - c][r])
          );
          if (!checkCollision(p, 0, 0, rotated)) {
            p.shape = rotated;
            soundSynth.hit();
          }
        } else if (action === 'drop') {
          while (!checkCollision(p, 0, 1)) {
            p.y += 1;
          }
          soundSynth.hit();
          b.lastDrop = 0;
        }
      } else if (selectedGame === 'brickbreaker') {
        const br = breakerState.current;
        if (!br.launched && (action === 'action' || action === 'up')) {
          br.launched = true;
          soundSynth.hit();
        }
        if (action === 'left') {
          br.paddleX = Math.max(5, br.paddleX - 22);
          soundSynth.move();
        } else if (action === 'right') {
          br.paddleX = Math.min(320 - br.paddleW - 5, br.paddleX + 22);
          soundSynth.move();
        }
      } else if (selectedGame === 'starimpact') {
        const s = starState.current;
        if (action === 'up') s.playerY = Math.max(10, s.playerY - 14);
        if (action === 'down') s.playerY = Math.min(200, s.playerY + 14);
        if (action === 'left') s.playerX = Math.max(10, s.playerX - 14);
        if (action === 'right') s.playerX = Math.min(180, s.playerX + 14);
        if (action === 'action') {
          const now = performance.now();
          if (now - s.lastFire > 170) {
            s.bullets.push({ x: s.playerX + 22, y: s.playerY + 6, vx: 8 });
            s.bullets.push({ x: s.playerX + 22, y: s.playerY + 14, vx: 8 });
            soundSynth.shoot();
            s.lastFire = now;
          }
        }
      }
    },
    [gameOver, restartCurrentGame, selectedGame, triggerHaptic]
  );

  // Hold-to-repeat continuous controls for smooth mobile play
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const stopContinuousDirection = useCallback(() => {
    if (holdTimeoutRef.current) {
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
    }
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
  }, []);

  const startContinuousDirection = useCallback(
    (action: 'up' | 'down' | 'left' | 'right' | 'action' | 'drop') => {
      handleDirection(action);
      stopContinuousDirection();

      holdTimeoutRef.current = setTimeout(() => {
        holdIntervalRef.current = setInterval(() => {
          handleDirection(action);
        }, 90);
      }, 200);
    },
    [handleDirection, stopContinuousDirection]
  );

  useEffect(() => {
    return () => stopContinuousDirection();
  }, [stopContinuousDirection]);

  // Keyboard controls listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'KeyW', 'KeyS', 'KeyA', 'KeyD'].includes(
          e.code
        )
      ) {
        e.preventDefault();
      }

      if (e.code === 'ArrowUp' || e.code === 'KeyW') handleDirection('up');
      if (e.code === 'ArrowDown' || e.code === 'KeyS') handleDirection('down');
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') handleDirection('left');
      if (e.code === 'ArrowRight' || e.code === 'KeyD') handleDirection('right');
      if (e.code === 'Space' || e.code === 'KeyZ' || e.code === 'Enter') handleDirection('action');
      if (e.code === 'KeyX') handleDirection('drop');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDirection]);

  // Touch paddle dragging for Brick Breaker
  const handlePaddleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (selectedGame !== 'brickbreaker') return;
    const br = breakerState.current;
    if (!br.launched) br.launched = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, touchX / rect.width));
    br.paddleX = Math.max(5, Math.min(320 - br.paddleW - 5, ratio * 320 - br.paddleW / 2));
  };

  // ==========================================
  // MAIN ANIMATION LOOP (HTML5 Canvas 60 FPS)
  // ==========================================
  useEffect(() => {
    let animId: number;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const renderLoop = (time: number) => {
      const colors = getColors();

      // Clear Screen
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // LCD Pixel Matrix / Scanline Texture
      if (theme === 'lcd') {
        ctx.fillStyle = colors.grid;
        const step = 4;
        for (let x = 0; x < canvas.width; x += step) {
          ctx.fillRect(x, 0, 1, canvas.height);
        }
        for (let y = 0; y < canvas.height; y += step) {
          ctx.fillRect(0, y, canvas.width, 1);
        }
      }

      // ----------------------------------------
      // GAME 1: VIPER 97
      // ----------------------------------------
      if (selectedGame === 'viper') {
        const v = viperState.current;
        const gridSize = 20;
        const cellSize = 16;

        if (!isPaused && !gameOver) {
          if (time - v.lastTick > v.speed) {
            v.lastTick = time;
            v.dir = v.nextDir;
            const head = v.snake[0];
            let newX = head.x + v.dir.x;
            let newY = head.y + v.dir.y;

            if (v.wrapBorders) {
              if (newX < 0) newX = gridSize - 1;
              if (newX >= gridSize) newX = 0;
              if (newY < 0) newY = gridSize - 1;
              if (newY >= gridSize) newY = 0;
            } else if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) {
              setGameOver(true);
              soundSynth.gameOver();
              return;
            }

            // Self-collision
            if (v.snake.some((seg) => seg.x === newX && seg.y === newY)) {
              setGameOver(true);
              soundSynth.gameOver();
              return;
            }

            const newHead = { x: newX, y: newY };
            v.snake.unshift(newHead);

            // Eat Food
            if (newX === v.food.x && newY === v.food.y) {
              soundSynth.eat();
              const newScore = score + 10;
              updateScoreAndCheckHigh(newScore);

              let fx = Math.floor(Math.random() * gridSize);
              let fy = Math.floor(Math.random() * gridSize);
              while (v.snake.some((s) => s.x === fx && s.y === fy)) {
                fx = Math.floor(Math.random() * gridSize);
                fy = Math.floor(Math.random() * gridSize);
              }
              v.food = { x: fx, y: fy };

              v.speed = Math.max(55, v.speed - 2);
            } else {
              v.snake.pop();
            }
          }
        }

        // Draw Food (Pellet / Fruit)
        ctx.fillStyle = theme === 'obsidian' ? '#f59e0b' : colors.ink;
        ctx.fillRect(v.food.x * cellSize + 2, v.food.y * cellSize + 2, cellSize - 4, cellSize - 4);
        ctx.fillStyle = colors.bg;
        ctx.fillRect(v.food.x * cellSize + 5, v.food.y * cellSize + 5, cellSize - 10, cellSize - 10);

        // Draw Snake
        v.snake.forEach((seg, idx) => {
          ctx.fillStyle = theme === 'obsidian' ? (idx === 0 ? '#38bdf8' : '#10b981') : colors.ink;
          ctx.fillRect(seg.x * cellSize + 1, seg.y * cellSize + 1, cellSize - 2, cellSize - 2);
          if (idx === 0) {
            // Eyes
            ctx.fillStyle = colors.bg;
            ctx.fillRect(seg.x * cellSize + 4, seg.y * cellSize + 4, 3, 3);
            ctx.fillRect(seg.x * cellSize + cellSize - 7, seg.y * cellSize + 4, 3, 3);
          }
        });
      }

      // ----------------------------------------
      // GAME 2: CIVBLOCKS
      // ----------------------------------------
      else if (selectedGame === 'civblocks') {
        const b = blocksState.current;
        const p = b.currentPiece;
        const cellSize = 16;
        const startX = 80;

        const checkCollision = (targetPiece: typeof p, offsetX: number, offsetY: number, shapeOverride?: number[][]) => {
          const shape = shapeOverride || targetPiece.shape;
          for (let r = 0; r < shape.length; r++) {
            for (let c = 0; c < shape[r].length; c++) {
              if (shape[r][c]) {
                const newX = targetPiece.x + c + offsetX;
                const newY = targetPiece.y + r + offsetY;
                if (newX < 0 || newX >= 10 || newY >= 20) return true;
                if (newY >= 0 && b.grid[newY][newX] !== 0) return true;
              }
            }
          }
          return false;
        };

        if (!isPaused && !gameOver) {
          if (time - b.lastDrop > b.dropInterval) {
            b.lastDrop = time;
            if (!checkCollision(p, 0, 1)) {
              p.y += 1;
            } else {
              for (let r = 0; r < p.shape.length; r++) {
                for (let c = 0; c < p.shape[r].length; c++) {
                  if (p.shape[r][c]) {
                    const gy = p.y + r;
                    const gx = p.x + c;
                    if (gy < 0) {
                      setGameOver(true);
                      soundSynth.gameOver();
                      return;
                    }
                    b.grid[gy][gx] = p.type;
                  }
                }
              }

              // Check line clears
              let cleared = 0;
              for (let r = 19; r >= 0; r--) {
                if (b.grid[r].every((cell) => cell !== 0)) {
                  b.grid.splice(r, 1);
                  b.grid.unshift(Array(10).fill(0));
                  cleared++;
                  r++;
                }
              }

              if (cleared > 0) {
                soundSynth.clearLine();
                const pts = cleared === 4 ? 800 : cleared === 3 ? 450 : cleared === 2 ? 250 : 100;
                b.linesCleared += cleared;
                b.dropInterval = Math.max(120, 600 - Math.floor(b.linesCleared / 10) * 50);
                updateScoreAndCheckHigh(score + pts);
              } else {
                soundSynth.hit();
              }

              // Spawn next block at top and verify game over only if top entry is blocked
              b.currentPiece = spawnRandomPiece();
              if (checkCollision(b.currentPiece, 0, 0)) {
                setGameOver(true);
                soundSynth.gameOver();
                return;
              }
            }
          }
        }

        // Draw Boundary
        ctx.strokeStyle = colors.ink;
        ctx.lineWidth = 2;
        ctx.strokeRect(startX - 2, 0, 10 * cellSize + 4, 20 * cellSize);

        // Draw Settled Blocks
        for (let r = 0; r < 20; r++) {
          for (let c = 0; c < 10; c++) {
            const cellVal = b.grid[r][c];
            if (cellVal !== 0) {
              ctx.fillStyle = theme === 'obsidian' ? TETRIS_COLORS[(cellVal - 1) % TETRIS_COLORS.length] : colors.ink;
              ctx.fillRect(startX + c * cellSize + 1, r * cellSize + 1, cellSize - 2, cellSize - 2);
              ctx.fillStyle = colors.bg;
              ctx.fillRect(startX + c * cellSize + 3, r * cellSize + 3, cellSize - 6, cellSize - 6);
            }
          }
        }

        // Draw Ghost Piece Shadow
        let ghostY = p.y;
        while (!checkCollision(p, 0, ghostY - p.y + 1)) {
          ghostY++;
        }
        for (let r = 0; r < p.shape.length; r++) {
          for (let c = 0; c < p.shape[r].length; c++) {
            if (p.shape[r][c]) {
              ctx.strokeStyle = colors.grid;
              ctx.strokeRect(
                startX + (p.x + c) * cellSize + 2,
                (ghostY + r) * cellSize + 2,
                cellSize - 4,
                cellSize - 4
              );
            }
          }
        }

        // Draw Current Falling Piece
        for (let r = 0; r < p.shape.length; r++) {
          for (let c = 0; c < p.shape[r].length; c++) {
            if (p.shape[r][c]) {
              ctx.fillStyle = theme === 'obsidian' ? TETRIS_COLORS[(p.type - 1) % TETRIS_COLORS.length] : colors.ink;
              ctx.fillRect(startX + (p.x + c) * cellSize + 1, (p.y + r) * cellSize + 1, cellSize - 2, cellSize - 2);
              ctx.fillStyle = colors.bg;
              ctx.fillRect(startX + (p.x + c) * cellSize + 4, (p.y + r) * cellSize + 4, cellSize - 8, cellSize - 8);
            }
          }
        }
      }

      // ----------------------------------------
      // GAME 3: BRICK BREAKER
      // ----------------------------------------
      else if (selectedGame === 'brickbreaker') {
        const br = breakerState.current;

        if (!isPaused && !gameOver) {
          if (!br.launched) {
            br.ballX = br.paddleX + br.paddleW / 2;
            br.ballY = 280;
          } else {
            br.ballX += br.ballVx;
            br.ballY += br.ballVy;

            // Bounce off walls
            if (br.ballX - br.ballRadius <= 0) {
              br.ballX = br.ballRadius;
              br.ballVx = Math.abs(br.ballVx);
              soundSynth.hit();
            } else if (br.ballX + br.ballRadius >= canvas.width) {
              br.ballX = canvas.width - br.ballRadius;
              br.ballVx = -Math.abs(br.ballVx);
              soundSynth.hit();
            }

            if (br.ballY - br.ballRadius <= 0) {
              br.ballY = br.ballRadius;
              br.ballVy = Math.abs(br.ballVy);
              soundSynth.hit();
            }

            // Paddle Collision
            const paddleTop = 290;
            if (
              br.ballY + br.ballRadius >= paddleTop &&
              br.ballY - br.ballRadius <= paddleTop + br.paddleH &&
              br.ballX >= br.paddleX &&
              br.ballX <= br.paddleX + br.paddleW
            ) {
              br.ballVy = -Math.abs(br.ballVy);
              const hitOffset = (br.ballX - (br.paddleX + br.paddleW / 2)) / (br.paddleW / 2);
              br.ballVx = hitOffset * 4.5;
              soundSynth.hit();
            }

            // Brick Collisions
            for (let i = br.bricks.length - 1; i >= 0; i--) {
              const b = br.bricks[i];
              if (
                br.ballX >= b.x &&
                br.ballX <= b.x + b.w &&
                br.ballY - br.ballRadius <= b.y + b.h &&
                br.ballY + br.ballRadius >= b.y
              ) {
                b.hp -= 1;
                br.ballVy = -br.ballVy;
                if (b.hp <= 0) {
                  soundSynth.brickBreak();
                  br.bricks.splice(i, 1);
                  const pts = b.type === 'titanium' ? 40 : b.type === 'iron' ? 25 : 10;
                  updateScoreAndCheckHigh(score + pts);
                } else {
                  soundSynth.hit();
                }
                break;
              }
            }

            // Ball Out of Bounds
            if (br.ballY > canvas.height) {
              br.lives -= 1;
              if (br.lives <= 0) {
                setGameOver(true);
                soundSynth.gameOver();
              } else {
                br.launched = false;
                br.ballVx = 2.8;
                br.ballVy = -3.2;
                soundSynth.hit();
              }
            }

            // Level Clear
            if (br.bricks.length === 0) {
              soundSynth.clearLine();
              updateScoreAndCheckHigh(score + 500);
              initBreaker();
            }
          }
        }

        // Draw Bricks
        br.bricks.forEach((b) => {
          let brickColor = colors.ink;
          if (theme === 'obsidian') {
            brickColor =
              b.type === 'titanium' ? '#e2e8f0' : b.type === 'iron' ? '#38bdf8' : b.type === 'timber' ? '#f59e0b' : '#f87171';
          }
          ctx.fillStyle = brickColor;
          ctx.fillRect(b.x, b.y, b.w, b.h);
          if (b.hp === 1 && b.maxHp > 1) {
            ctx.fillStyle = colors.bg;
            ctx.fillRect(b.x + 4, b.y + 2, b.w - 8, b.h - 4);
          } else if (b.maxHp === 3 && b.hp === 2) {
            ctx.fillStyle = colors.bg;
            ctx.fillRect(b.x + 2, b.y + 2, 4, 4);
          }
        });

        // Draw Paddle
        ctx.fillStyle = theme === 'obsidian' ? '#f59e0b' : colors.ink;
        ctx.fillRect(br.paddleX, 290, br.paddleW, br.paddleH);
        ctx.fillStyle = colors.bg;
        ctx.fillRect(br.paddleX + 4, 292, br.paddleW - 8, 4);

        // Draw Ball
        ctx.fillStyle = theme === 'obsidian' ? '#ffffff' : colors.ink;
        ctx.beginPath();
        ctx.arc(br.ballX, br.ballY, br.ballRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw Lives HUD
        for (let l = 0; l < br.lives; l++) {
          ctx.fillStyle = theme === 'obsidian' ? '#f59e0b' : colors.ink;
          ctx.fillRect(10 + l * 12, 10, 6, 6);
        }
      }

      // ----------------------------------------
      // GAME 4: STAR IMPACT
      // ----------------------------------------
      else if (selectedGame === 'starimpact') {
        const s = starState.current;

        if (!isPaused && !gameOver) {
          s.stars.forEach((st) => {
            st.x -= st.speed;
            if (st.x < 0) {
              st.x = canvas.width;
              st.y = Math.random() * canvas.height;
            }
          });

          // Spawn Enemies
          if (time - s.lastSpawn > 900) {
            s.lastSpawn = time;
            const isDrone = Math.random() > 0.6;
            s.enemies.push({
              x: canvas.width + 10,
              y: 20 + Math.random() * (canvas.height - 40),
              vx: isDrone ? 3.0 : 1.8 + Math.random() * 1.5,
              vy: isDrone ? Math.sin(time / 200) * 1.2 : 0,
              hp: isDrone ? 2 : 1,
              maxHp: isDrone ? 2 : 1,
              type: isDrone ? 'drone' : 'asteroid',
              size: isDrone ? 16 : 14,
            });
          }

          // Update Bullets
          for (let bIdx = s.bullets.length - 1; bIdx >= 0; bIdx--) {
            const b = s.bullets[bIdx];
            b.x += b.vx;
            if (b.x > canvas.width) {
              s.bullets.splice(bIdx, 1);
              continue;
            }

            // Bullet vs Enemy Hit
            for (let eIdx = s.enemies.length - 1; eIdx >= 0; eIdx--) {
              const enemy = s.enemies[eIdx];
              if (
                b.x >= enemy.x &&
                b.x <= enemy.x + enemy.size &&
                b.y >= enemy.y &&
                b.y <= enemy.y + enemy.size
              ) {
                enemy.hp -= 1;
                s.bullets.splice(bIdx, 1);
                if (enemy.hp <= 0) {
                  soundSynth.explode();
                  s.enemies.splice(eIdx, 1);
                  updateScoreAndCheckHigh(score + (enemy.type === 'drone' ? 30 : 15));
                } else {
                  soundSynth.hit();
                }
                break;
              }
            }
          }

          // Update Enemies
          if (s.invincibleTimer > 0) s.invincibleTimer--;

          for (let eIdx = s.enemies.length - 1; eIdx >= 0; eIdx--) {
            const enemy = s.enemies[eIdx];
            enemy.x -= enemy.vx;
            enemy.y += enemy.vy;

            // Player Collision
            if (
              s.invincibleTimer === 0 &&
              enemy.x < s.playerX + 22 &&
              enemy.x + enemy.size > s.playerX &&
              enemy.y < s.playerY + 18 &&
              enemy.y + enemy.size > s.playerY
            ) {
              soundSynth.explode();
              s.lives -= 1;
              s.invincibleTimer = 90;
              s.enemies.splice(eIdx, 1);
              if (s.lives <= 0) {
                setGameOver(true);
                soundSynth.gameOver();
                return;
              }
              continue;
            }

            if (enemy.x < -20) {
              s.enemies.splice(eIdx, 1);
            }
          }
        }

        // Draw Starfield
        ctx.fillStyle = theme === 'obsidian' ? '#475569' : colors.ink;
        s.stars.forEach((st) => {
          ctx.fillRect(st.x, st.y, st.size, st.size);
        });

        // Draw Player Ship
        if (s.invincibleTimer === 0 || Math.floor(time / 80) % 2 === 0) {
          ctx.fillStyle = theme === 'obsidian' ? '#38bdf8' : colors.ink;
          ctx.beginPath();
          ctx.moveTo(s.playerX + 22, s.playerY + 10);
          ctx.lineTo(s.playerX, s.playerY);
          ctx.lineTo(s.playerX + 6, s.playerY + 10);
          ctx.lineTo(s.playerX, s.playerY + 20);
          ctx.closePath();
          ctx.fill();
        }

        // Draw Bullets
        ctx.fillStyle = theme === 'obsidian' ? '#34d399' : colors.ink;
        s.bullets.forEach((b) => {
          ctx.fillRect(b.x, b.y - 1, 6, 3);
        });

        // Draw Enemies
        s.enemies.forEach((enemy) => {
          if (enemy.type === 'drone') {
            ctx.fillStyle = theme === 'obsidian' ? '#f43f5e' : colors.ink;
            ctx.fillRect(enemy.x, enemy.y + 4, enemy.size, 8);
            ctx.fillRect(enemy.x + 4, enemy.y, 8, enemy.size);
            ctx.fillStyle = colors.bg;
            ctx.fillRect(enemy.x + 6, enemy.y + 6, 4, 4);
          } else {
            ctx.fillStyle = theme === 'obsidian' ? '#94a3b8' : colors.ink;
            ctx.beginPath();
            ctx.arc(enemy.x + enemy.size / 2, enemy.y + enemy.size / 2, enemy.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = colors.bg;
            ctx.fillRect(enemy.x + 4, enemy.y + 4, 3, 3);
          }
        });

        // Draw Lives HUD
        for (let l = 0; l < s.lives; l++) {
          ctx.fillStyle = theme === 'obsidian' ? '#38bdf8' : colors.ink;
          ctx.beginPath();
          ctx.moveTo(15 + l * 14 + 8, 14);
          ctx.lineTo(15 + l * 14, 8);
          ctx.lineTo(15 + l * 14 + 2, 14);
          ctx.lineTo(15 + l * 14, 20);
          ctx.closePath();
          ctx.fill();
        }
      }

      // ----------------------------------------
      // OVERLAY: GAME OVER OR PAUSED
      // ----------------------------------------
      if (gameOver) {
        ctx.fillStyle = theme === 'lcd' ? 'rgba(155, 188, 15, 0.90)' : 'rgba(7, 10, 15, 0.90)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = colors.ink;
        ctx.font = 'bold 20px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 20);

        ctx.font = '14px monospace';
        ctx.fillText(`SCORE: ${score}`, canvas.width / 2, canvas.height / 2 + 10);

        ctx.font = '11px monospace';
        ctx.fillText('TAP [ACTION] OR SCREEN TO RETRY', canvas.width / 2, canvas.height / 2 + 38);
      } else if (isPaused) {
        ctx.fillStyle = theme === 'lcd' ? 'rgba(155, 188, 15, 0.85)' : 'rgba(7, 10, 15, 0.85)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = colors.ink;
        ctx.font = 'bold 18px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('TACTICAL PAUSE', canvas.width / 2, canvas.height / 2);
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animId);
  }, [getColors, gameOver, isPaused, nightVision, score, selectedGame, spawnRandomPiece, theme, updateScoreAndCheckHigh]);

  const currentHighScore = highScores[selectedGame];

  return (
    <div className="space-y-4 max-w-xl mx-auto select-none pb-20">
      {/* Game Selector Tabs */}
      <div className="grid grid-cols-4 gap-1.5 p-1.5 rounded-xl bg-zinc-950/80 border border-zinc-800">
        {[
          { id: 'viper' as GameType, name: 'Viper 97', icon: Activity, color: 'text-emerald-400' },
          { id: 'civblocks' as GameType, name: 'CivBlocks', icon: Boxes, color: 'text-sky-400' },
          { id: 'brickbreaker' as GameType, name: 'Breaker', icon: Shield, color: 'text-amber-400' },
          { id: 'starimpact' as GameType, name: 'Star Impact', icon: Zap, color: 'text-violet-400' },
        ].map((tab) => {
          const IconComp = tab.icon;
          const isCurrent = selectedGame === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => switchGame(tab.id)}
              className={`py-2 px-1 rounded-lg text-center transition-all flex flex-col items-center gap-1 ${
                isCurrent
                  ? nightVision
                    ? 'bg-red-950 border border-red-600 text-red-200'
                    : 'bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-sm'
                  : 'bg-zinc-900/60 border border-transparent text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <IconComp className={`w-4 h-4 ${isCurrent ? 'text-amber-300' : tab.color}`} />
              <span className="text-[10px] font-bold font-mono tracking-tight leading-tight">{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Retro Phone Bezel Frame */}
      <div
        className={`relative p-4 sm:p-5 rounded-3xl border-4 transition-colors shadow-2xl flex flex-col items-center ${
          nightVision
            ? 'bg-[#120202] border-red-900/80 shadow-red-950/40'
            : theme === 'lcd'
            ? 'bg-[#404c24] border-[#293215] shadow-zinc-950/80'
            : 'bg-[#0b0f17] border-zinc-800 shadow-black'
        }`}
      >
        {/* Top Status & Brand Strip */}
        <div className="w-full flex items-center justify-between px-2 mb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span
              className={`text-[10px] font-mono tracking-widest font-black uppercase ${
                theme === 'lcd' ? 'text-[#0f380f]' : 'text-zinc-400'
              }`}
            >
              RETRO FIELD COMM // {selectedGame.toUpperCase()}
            </span>
          </div>

          {/* Score & Trophy */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono font-bold text-zinc-300">SCORE:</span>
              <span className="text-xs font-mono font-black text-amber-400">{score}</span>
            </div>
            <div className="flex items-center gap-1">
              <Trophy className="w-3 h-3 text-amber-500" />
              <span className="text-xs font-mono font-black text-amber-400">{currentHighScore}</span>
            </div>
          </div>
        </div>

        {/* Authentic Curved LCD Glass Screen Container */}
        <div
          className={`relative rounded-2xl overflow-hidden border-4 shadow-inner flex items-center justify-center p-1 ${
            theme === 'lcd'
              ? 'bg-[#9bbc0f] border-[#8bac0f]'
              : theme === 'night' || nightVision
              ? 'bg-[#140000] border-red-900'
              : 'bg-[#070a0f] border-zinc-800'
          }`}
          style={{ width: '100%', maxWidth: '340px' }}
        >
          {/* Subtle Screen Reflection Glare */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-10" />

          {/* HTML5 Canvas Screen */}
          <canvas
            ref={canvasRef}
            width={320}
            height={320}
            onClick={() => {
              if (gameOver) restartCurrentGame();
            }}
            className="w-full max-w-[320px] h-auto aspect-square block rounded-lg cursor-pointer"
            style={{ imageRendering: 'pixelated' }}
          />

          {/* New High Score Pill */}
          {newHighScore && (
            <div className="absolute top-3 right-3 bg-amber-500 text-black text-[10px] font-mono font-black px-2 py-0.5 rounded shadow-lg animate-bounce z-20">
              NEW RECORD!
            </div>
          )}
        </div>

        {/* Quick Utility Controls Bar */}
        <div className="w-full flex items-center justify-between mt-3 px-2">
          {/* Theme Switcher */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setTheme('lcd')}
              title="Classic Dot-Matrix Green LCD"
              className={`px-2 py-1 rounded text-[10px] font-mono font-bold border ${
                theme === 'lcd'
                  ? 'bg-[#9bbc0f] text-[#0f380f] border-[#8bac0f]'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800'
              }`}
            >
              LCD
            </button>
            <button
              onClick={() => setTheme('obsidian')}
              title="Obsidian Dark AMOLED Vector Glow"
              className={`px-2 py-1 rounded text-[10px] font-mono font-bold border ${
                theme === 'obsidian'
                  ? 'bg-sky-500/20 text-sky-400 border-sky-500/40'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800'
              }`}
            >
              AMOLED
            </button>
          </div>

          {/* Sound & Haptics & Pause */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              title={isMuted ? 'Unmute 8-Bit Audio' : 'Mute Sound'}
              className="p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => {
                setHapticsEnabled(!hapticsEnabled);
                triggerHaptic(20);
              }}
              title="Toggle Haptic Button Vibration"
              className={`p-1.5 rounded-lg border ${
                hapticsEnabled
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                  : 'bg-zinc-900/80 border-zinc-800 text-zinc-500'
              }`}
            >
              <Vibrate className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setIsPaused(!isPaused);
                triggerHaptic(10);
              }}
              className="p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-zinc-400" />}
            </button>

            <button
              onClick={restartCurrentGame}
              title="Restart Game"
              className="p-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Brick Breaker Drag Slider Strip */}
        {selectedGame === 'brickbreaker' && (
          <div
            onTouchMove={handlePaddleTouchMove}
            className="w-full mt-3 py-2 px-3 rounded-xl bg-zinc-900/90 border border-amber-500/30 text-center cursor-ew-resize touch-none select-none flex items-center justify-between"
          >
            <ChevronLeft className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-amber-300 tracking-wider uppercase">
              TOUCH &amp; DRAG SLIDER TO STEER PADDLE
            </span>
            <ChevronRight className="w-4 h-4 text-amber-400 animate-pulse" />
          </div>
        )}

        {/* Tactical Touch Controller Pad (Touchscreen Mobile First) */}
        <div className="w-full mt-4 pt-3 border-t border-zinc-800/80 grid grid-cols-2 gap-4">
          {/* LEFT THUMB: Ergonomic Cross D-Pad */}
          <div className="flex flex-col items-center justify-center select-none">
            <div className="relative w-44 h-44 flex items-center justify-center select-none touch-none">
              {/* D-Pad Tactile Cross Background Silhouettes */}
              <div className="absolute w-40 h-14 bg-zinc-950/90 rounded-2xl border border-zinc-800 shadow-inner pointer-events-none" />
              <div className="absolute w-14 h-40 bg-zinc-950/90 rounded-2xl border border-zinc-800 shadow-inner pointer-events-none" />

              {/* Center Hub Pivot */}
              <div className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-700 shadow-inner flex items-center justify-center z-10 pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700/60" />
              </div>

              {/* UP BUTTON */}
              <button
                type="button"
                onPointerDown={(e) => {
                  e.preventDefault();
                  startContinuousDirection('up');
                }}
                onPointerUp={stopContinuousDirection}
                onPointerCancel={stopContinuousDirection}
                onPointerLeave={stopContinuousDirection}
                onContextMenu={(e) => e.preventDefault()}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-t-2xl bg-zinc-800/95 hover:bg-zinc-700 border-2 border-zinc-600 text-zinc-100 flex items-center justify-center shadow-xl active:bg-amber-500 active:border-amber-400 active:text-black active:scale-95 transition-all touch-none select-none z-20 cursor-pointer"
                aria-label="Up"
              >
                <ChevronUp className="w-7 h-7" />
              </button>

              {/* DOWN BUTTON */}
              <button
                type="button"
                onPointerDown={(e) => {
                  e.preventDefault();
                  startContinuousDirection('down');
                }}
                onPointerUp={stopContinuousDirection}
                onPointerCancel={stopContinuousDirection}
                onPointerLeave={stopContinuousDirection}
                onContextMenu={(e) => e.preventDefault()}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-b-2xl bg-zinc-800/95 hover:bg-zinc-700 border-2 border-zinc-600 text-zinc-100 flex items-center justify-center shadow-xl active:bg-amber-500 active:border-amber-400 active:text-black active:scale-95 transition-all touch-none select-none z-20 cursor-pointer"
                aria-label="Down"
              >
                <ChevronDown className="w-7 h-7" />
              </button>

              {/* LEFT BUTTON */}
              <button
                type="button"
                onPointerDown={(e) => {
                  e.preventDefault();
                  startContinuousDirection('left');
                }}
                onPointerUp={stopContinuousDirection}
                onPointerCancel={stopContinuousDirection}
                onPointerLeave={stopContinuousDirection}
                onContextMenu={(e) => e.preventDefault()}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-l-2xl bg-zinc-800/95 hover:bg-zinc-700 border-2 border-zinc-600 text-zinc-100 flex items-center justify-center shadow-xl active:bg-amber-500 active:border-amber-400 active:text-black active:scale-95 transition-all touch-none select-none z-20 cursor-pointer"
                aria-label="Left"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              {/* RIGHT BUTTON */}
              <button
                type="button"
                onPointerDown={(e) => {
                  e.preventDefault();
                  startContinuousDirection('right');
                }}
                onPointerUp={stopContinuousDirection}
                onPointerCancel={stopContinuousDirection}
                onPointerLeave={stopContinuousDirection}
                onContextMenu={(e) => e.preventDefault()}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-r-2xl bg-zinc-800/95 hover:bg-zinc-700 border-2 border-zinc-600 text-zinc-100 flex items-center justify-center shadow-xl active:bg-amber-500 active:border-amber-400 active:text-black active:scale-95 transition-all touch-none select-none z-20 cursor-pointer"
                aria-label="Right"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 mt-2 uppercase font-bold tracking-wider">
              TACTILE D-PAD (HOLD TO GLIDE)
            </span>
          </div>

          {/* RIGHT THUMB: Action Buttons */}
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-3">
              {/* Secondary / Drop Button (for CivBlocks hard drop) */}
              {selectedGame === 'civblocks' && (
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    handleDirection('drop');
                  }}
                  className="w-14 h-14 rounded-full bg-zinc-800 border-2 border-zinc-600 text-zinc-300 flex flex-col items-center justify-center shadow-xl active:bg-zinc-700 active:scale-95 touch-none"
                >
                  <ChevronDown className="w-5 h-5 text-sky-400" />
                  <span className="text-[9px] font-mono font-bold">DROP</span>
                </button>
              )}

              {/* Primary Action Button (Fire / Rotate / Launch) */}
              <button
                type="button"
                onPointerDown={(e) => {
                  e.preventDefault();
                  if (selectedGame === 'starimpact') {
                    startContinuousDirection('action');
                  } else {
                    handleDirection('action');
                  }
                }}
                onPointerUp={stopContinuousDirection}
                onPointerCancel={stopContinuousDirection}
                onPointerLeave={stopContinuousDirection}
                onContextMenu={(e) => e.preventDefault()}
                className="w-20 h-20 p-3 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 border-2 border-amber-300 text-black font-black flex flex-col items-center justify-center shadow-2xl active:scale-95 active:brightness-90 touch-none select-none cursor-pointer"
              >
                {selectedGame === 'starimpact' ? (
                  <Zap className="w-7 h-7 text-black" />
                ) : selectedGame === 'civblocks' ? (
                  <Sparkles className="w-7 h-7 text-black" />
                ) : (
                  <Target className="w-7 h-7 text-black" />
                )}
                <span className="text-[10px] font-mono tracking-tight font-black mt-0.5">
                  {selectedGame === 'starimpact'
                    ? 'FIRE'
                    : selectedGame === 'civblocks'
                    ? 'ROTATE'
                    : selectedGame === 'brickbreaker'
                    ? 'LAUNCH'
                    : 'ACTION'}
                </span>
              </button>
            </div>

            <div className="text-center">
              <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold tracking-wider block">
                {selectedGame === 'starimpact'
                  ? 'PLASMA CANNONS'
                  : selectedGame === 'civblocks'
                  ? 'ROTATE 90° / HARD DROP'
                  : 'ACTION / LAUNCH'}
              </span>
              <span className="text-[9px] font-mono text-zinc-600 block mt-0.5">
                (Keyboard: Arrows, Space, Z, X)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Field Morale & Copyright Safety Information Card */}
      <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 text-xs font-mono text-zinc-400 space-y-1.5">
        <div className="flex items-center gap-2 text-zinc-200 font-bold">
          <Gamepad2 className="w-4 h-4 text-amber-400" />
          <span>EXPEDITION MORALE &amp; NEURO-COGNITIVE MAINTENANCE</span>
        </div>
        <p className="text-[11px] leading-relaxed text-zinc-400">
          In prolonged survival or off-grid operations, mental fatigue and isolation severely degrade decision-making. These 4 air-gapped retro mini-games provide low-power cognitive reflex training and morale stabilization.
        </p>
        <div className="flex flex-wrap gap-3 pt-1 text-[10px] text-zinc-500">
          <span>• 100% Offline &amp; Air-Gapped</span>
          <span>• Zero Battery Drain Web Audio Synth</span>
          <span>• Local High Score Storage</span>
          <span>• Original Mechanics &amp; Visuals</span>
        </div>
      </div>
    </div>
  );
};
