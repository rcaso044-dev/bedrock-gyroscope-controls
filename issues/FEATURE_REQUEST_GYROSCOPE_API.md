# Feature Request: Gyroscope API for Minecraft Bedrock Edition Mobile

**Status:** Community Feature Request  
**Date Created:** 2026-10-07  
**Target Platform:** Bedrock Edition (iOS, Android)  

---

## Summary

Add official support for reading device gyroscope/motion sensor data in Minecraft Bedrock Edition through the Script API, enabling motion-controlled gameplay on mobile devices.

## Problem Statement

Currently, Minecraft Bedrock Edition on mobile devices (iOS, Android) does not expose gyroscope or accelerometer sensor data to add-ons or scripts. This limits gameplay experiences and accessibility options that could enhance mobile play:

- **Motion-controlled camera** — look around using device tilt
- **Gesture-based aiming** — aim weapons or tools with gyroscope input
- **Alternative controls** — accessibility-friendly motion input for players with limited hand mobility
- **Enhanced immersion** — motion-sensitive gameplay mechanics

## Proposed Solution

Add a new **Motion Sensor API** to the Bedrock Script API that allows add-ons to read:

- Gyroscope (rotation rate) — pitch, roll, yaw
- Accelerometer (device acceleration) — x, y, z axes
- Device orientation — landscape, portrait, etc.

### Example API Design (Proposed)

```javascript
import { world, system } from '@minecraft/server';

// Listen for motion events
world.beforeEvents.motionUpdate.subscribe((event) => {
  const gyro = event.gyroscope; // { x, y, z } in degrees per second
  const accel = event.accelerometer; // { x, y, z } in m/s²
  
  // Use this data to control player actions, camera, etc.
  console.log(`Gyro - Pitch: ${gyro.x}, Roll: ${gyro.y}, Yaw: ${gyro.z}`);
});
```

## Use Cases

1. **Mobile Gaming Enhancement**
   - Look-around by tilting device
   - Aim by rotating device
   - Throw/launch projectiles with motion gestures

2. **Accessibility**
   - Hand-free control for players with mobility constraints
   - Alternative input method for diverse player needs

3. **Educational & Experimental Projects**
   - Motion-controlled mini-games
   - Physics demonstrations using real sensor data

## Technical Considerations

- **Platform availability:** iOS and Android both support standard motion sensors
- **Privacy:** User should explicitly allow sensor access (OS-level permissions)
- **Performance:** Motion events should be throttleable to reduce frame impact
- **Backwards compatibility:** API should be optional and gracefully unavailable on non-mobile platforms

## Related Issues / References

- Community feedback: [Add Gyroscope API to Bedrock Edition for mobile & add-ons](https://feedback.minecraft.net/hc/en-us/community/posts/42777871142925-Add-Gyroscope-API-to-Bedrock-Edition-for-mobile-add-ons)
- Bedrock Script API Docs: https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/
- GitHub Discussion: This repository

## Next Steps

- [ ] Gather community feedback and use case examples
- [ ] Request official response from Mojang/Microsoft
- [ ] Discuss technical feasibility with Bedrock team
- [ ] Define final API design and compatibility layer
- [ ] Prototype with experimental API (if approved)
- [ ] Rollout in stable Script API version

## Acknowledgments

This is a community-driven feature request. Discussion and feedback are welcome in this repository's Issues or Discussions tabs.

---

**Want to contribute?** Add your use cases, technical notes, or support in the Issues section or pull requests.
