function register({ registerHook, peertubeHelpers }) {
  initWatermark(registerHook, peertubeHelpers)
    .catch(err => console.error('Cannot initialize Watermark', err))
}

export { register }

function initWatermark (registerHook, peertubeHelpers) {
  return peertubeHelpers.getSettings()
    .then(s => {
      if (!s || !s['watermark-image-url']) {
        console.error('Watermark image not set for videos.')
        return
      }

      const image = s["watermark-image-url"]
      let url = (typeof s["watermark-target-url"] !== 'undefined') ? s["watermark-target-url"] : null

      registerHook({
        target: "action:video-watch.video.loaded",
        handler: params => {
          const watermark = require("videojs-watermark")
          params.videojs.registerPlugin("watermark", watermark)
        }
      })

      registerHook({
        target: "action:video-watch.player.loaded",
        handler: params => {
          console.log(image, url)
          params.player.watermark({ image, url })
        }
      })
    })
}