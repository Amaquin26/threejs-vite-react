import { proxy } from 'valtio';

// You can think of this as React context
// Whatever defined here will be utilized within in the entire application
const state = proxy({
    intro: true,                        // flag to tell are we currently in the homepage or not
    color: '#EFBD48',                   // default color
    isLogoTexture: true,                // are we currently displaying the logo on our shirt
    isFullTexture: false,               // is full texture or no
    logoDecal: '/kiara-booch.png',      // initial logo decal
    fullDecal: '/threejs.png',          // initial full texture shirt decal
});

export default state;
