import { createStateProvider } from '../utils';

export enum Paws {
  left = 'left',
  right = 'right',
  both = 'both',
  none = 'none',
}

export const PawLabels: Record<Paws, string> = {
  [Paws.left]: 'Left',
  [Paws.right]: 'Right',
  [Paws.both]: 'Both',
  [Paws.none]: 'Off',
};

export enum Stroke {
  up = 'up',
  down = 'down',
}

export enum GamePhase {
  warmup = 'warmup',
  active = 'active',
  climax = 'climax',
  pause = 'pause',
}

export interface GameState {
  pace: number;
  intensity: number;
  currentImage: number;
  paws: Paws;
  stroke: Stroke;
  phase: GamePhase;
  edged: boolean;
}

export const initialGameState: GameState = {
  pace: 0,
  intensity: 0,
  currentImage: 0,
  paws: Paws.none,
  stroke: Stroke.down,
  phase: GamePhase.active,
  edged: false,
};

export const {
  Provider: GameProvider,
  useProvider: useGame,
  useProviderSelector: useGameValue,
} = createStateProvider<GameState>({
  defaultData: initialGameState,
});
