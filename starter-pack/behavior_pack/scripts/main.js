import { world, system } from '@minecraft/server';

// NOTE:
// This is a starter template only.
// Bedrock does not currently provide a direct gyroscope sensor API in normal add-ons.
// This file shows the structure for a future motion-input integration pattern.

const motionState = {
  pitch: 0,
  yaw: 0,
  roll: 0,
  enabled: false,
};

function updateMotionState() {
  // Placeholder values to simulate a gyroscope stream.
  // Replace this with real motion data from an external app or future API.
  motionState.pitch = Math.sin(Date.now() / 500) * 30;
  motionState.yaw = Math.cos(Date.now() / 750) * 20;
  motionState.roll = Math.sin(Date.now() / 1200) * 15;
  motionState.enabled = true;
}

world.afterEvents.worldInitialize.subscribe(() => {
  console.warn('[Gyroscope Experiment] Pack initialized');

  system.runInterval(() => {
    updateMotionState();

    // Example: print current motion values.
    console.warn(
      `[Gyroscope Experiment] pitch=${motionState.pitch.toFixed(2)} ` +
      `yaw=${motionState.yaw.toFixed(2)} roll=${motionState.roll.toFixed(2)}`
    );
  }, 20);
});

// Future idea:
// - Connect to an external sensor app/server
// - Forward motion values into game logic
// - Map pitch/yaw/roll to camera movement, aiming, or custom mechanics
