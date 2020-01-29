async function register({ registerSetting, peertubeHelpers }) {
  registerSetting({
    name: "watermark-image-url",
    label: "Watermark image URL (.png, .jpg)",
    type: "input",
    private: false,
  })

  registerSetting({
    name: "watermark-target-url",
    label: "Watermark target URL",
    type: "input",
    private: false
  })
}

async function unregister() {
  return
}

module.exports = {
  register,
  unregister
}
