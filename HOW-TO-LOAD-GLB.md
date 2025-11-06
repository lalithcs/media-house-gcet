# How to Load .glb 3D Models into Your Website

## Quick Start Guide

Your website now supports loading `.glb` 3D models! Here's how to use it:

## Step 1: Place Your .glb File

1. The `models` folder has been created for you at:
   ```
   c:\Users\pc\OneDrive\Desktop\mediahousewebsite\media-house\models\
   ```

2. **COPY your `.glb` file INTO this `models` folder**
   - Example: Copy `my-logo.glb` → `media-house/models/my-logo.glb`
   - ⚠️ **IMPORTANT**: The file MUST be in this folder to work on GitHub/Vercel!

3. Your project structure should look like:
   ```
   media-house/
   ├── index.html
   ├── models/               ← Folder created
   │   └── your-model.glb    ← YOUR FILE HERE
   ├── README.md
   └── .gitignore
   ```

## Step 2: Load the Model

In `index.html`, find this line (around line 3330):

```javascript
// Load your .glb 3D model - UNCOMMENT AND CUSTOMIZE THIS LINE
// loadGLBModel('path/to/your-model.glb', x-position, y-position, z-position, scale);
```

**Uncomment and customize it like this:**

```javascript
// Example: Load a 3D model at position (0, 0, -5) with scale 2
loadGLBModel('models/your-model.glb', 0, 0, -5, 2);
```

## Parameters Explained

```javascript
loadGLBModel(modelPath, x, y, z, scale)
```

- **modelPath**: Path to your .glb file (e.g., `'models/my-3d-object.glb'`)
- **x**: Left/Right position (-12 = far left, 0 = center, 12 = far right)
- **y**: Up/Down position (-6 = low, 0 = middle, 6 = high)
- **z**: Near/Far position (-10 = far, 0 = normal, 5 = close)
- **scale**: Size multiplier (1 = normal, 2 = double size, 0.5 = half size)

## Examples

### Load one model in the center
```javascript
loadGLBModel('models/logo.glb', 0, 0, -5, 3);
```

### Load multiple models
```javascript
// Left side - small
loadGLBModel('models/camera.glb', -10, 2, -5, 1.5);

// Center - large
loadGLBModel('models/trophy.glb', 0, -3, -4, 4);

// Right side - medium
loadGLBModel('models/badge.glb', 10, 1, -6, 2);
```

### Replace existing 3D objects
If you want to **remove the camera/mic/clapperboard** and use only your .glb model:

1. Comment out these lines (around line 3316-3326):
```javascript
// LEFT - Professional Camera with Tripod
// mediaObjects.push(createCamera(-12, 0, -5));
// const cam3D = mediaObjects[mediaObjects.length - 1];
// cam3D.scale.set(2, 2, 2);

// CENTER - Clapperboard
// mediaObjects.push(createClapperboard(0, -6, -3));
// const clapper = mediaObjects[mediaObjects.length - 1];
// clapper.scale.set(2, 2, 2);

// RIGHT - Professional Microphone
// mediaObjects.push(createMicrophone(12, 2, -5));
// const mic = mediaObjects[mediaObjects.length - 1];
// mic.scale.set(2, 2, 2);

// mediaObjects.forEach(obj => scene.add(obj));
```

2. Then load your model:
```javascript
loadGLBModel('models/media-house-logo.glb', 0, 0, -5, 5);
```

## Positioning Tips

- **Current objects positions:**
  - Camera: `(-12, 0, -5)`
  - Clapperboard: `(0, -6, -3)`
  - Microphone: `(12, 2, -5)`

- **Recommended positions for new models:**
  - Top left: `(-10, 5, -5)`
  - Top center: `(0, 5, -5)`
  - Top right: `(10, 5, -5)`
  - Bottom left: `(-10, -5, -5)`
  - Bottom right: `(10, -5, -5)`

## Troubleshooting

### Model not showing?
1. Check the file path is correct
2. Try increasing the scale (make it bigger)
3. Check browser console (F12) for error messages
4. Make sure the .glb file is in the correct folder

### Model too big/small?
- Adjust the `scale` parameter (5th parameter)
- Try values like: `0.5`, `1`, `2`, `5`, `10`

### Model in wrong position?
- Adjust x, y, z values
- Start with `(0, 0, -5)` and adjust from there

### Model not rotating?
- The model will automatically rotate with the other objects!
- You can change rotation speed in the animate() function

## Deploy to GitHub

After adding your .glb file to the `models` folder:

```bash
# Add the models folder and your .glb file
git add models/

# Add the updated index.html
git add index.html

# Commit everything
git commit -m "Add 3D model to website"

# Push to GitHub
git push origin main
```

**What gets uploaded to GitHub:**
- ✅ `models/` folder
- ✅ `your-model.glb` file inside it
- ✅ Updated `index.html` with the loadGLBModel() code

**Then on Vercel/GitHub Pages:**
- The path `models/your-model.glb` will work automatically!
- No need to change any paths - it's all relative!

## Why Relative Paths Work

When you use:
```javascript
loadGLBModel('models/logo.glb', 0, 0, -5, 2);
```

This path works:
- ✅ On your local computer
- ✅ On GitHub
- ✅ On Vercel
- ✅ On any web host

Because it's **relative** to the `index.html` file location!

## Need Help?

- Check the browser console (F12) for error messages
- Make sure your .glb file is valid (test it in a 3D viewer first)
- Experiment with different positions and scales

---

**Pro Tip:** You can load as many .glb models as you want - just call `loadGLBModel()` multiple times with different files and positions!
