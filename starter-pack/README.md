# Starter Bedrock Pack: Gyroscope Experiment

This folder contains a minimal Bedrock behavior pack structure for experimenting with gyroscope-style motion input ideas.

Important:
- Minecraft Bedrock does not currently expose a standard gyroscope API directly inside add-ons.
- This pack is meant as a starter template for research, prototyping, and custom external-input experiments.
- A real implementation would likely require a custom app or bridge that sends motion data to the Bedrock environment.

## Folder structure

- `behavior_pack/manifest.json` — pack metadata
- `behavior_pack/scripts/main.js` — starter script

## Quick start

1. Copy the `behavior_pack` folder into a Bedrock behavior pack project
2. Zip the folder contents as a `.mcpack` or `.mcaddon` package
3. Import the pack into Minecraft Bedrock
4. Use the script as a base for future motion-driven experiments

## Notes

This script intentionally uses placeholder motion-state values and comments to show where sensor data could be integrated. It is not a native hardware sensor API.
