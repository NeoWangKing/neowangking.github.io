// 3d.js
;(function () {
  const app = document.getElementById('3d')
  if (!app) return
  app.width = 800
  app.height = 600
  const ctx = app.getContext('2d')

  function make_environment(...envs) {
    return new Proxy(envs, {
      get(target, prop) {
        for (let env of envs) {
          if (env && env.hasOwnProperty(prop)) return env[prop]
        }
        return (...args) => console.error('NOT IMPLEMENTED: ' + prop, args)
      },
    })
  }

  WebAssembly.instantiateStreaming(fetch('/posts/programming/NeoVinC/3d.wasm'), {
    env: make_environment({}),
  })
    .then((w0) => {
      const w = w0.instance // 关键：取出 instance
      let prev = null

      function first(ts) {
        prev = ts
        requestAnimationFrame(loop)
      }
      function loop(ts) {
        const dt = ts - prev
        prev = ts

        // 你的导出函数名是 _render
        const pixelsPtr = w.exports.render(dt * 0.0005)
        const buffer = w.exports.memory.buffer
        const image = new ImageData(
          new Uint8ClampedArray(buffer, pixelsPtr, app.width * app.height * 4),
          app.width,
        )
        ctx.putImageData(image, 0, 0)
        requestAnimationFrame(loop)
      }
      requestAnimationFrame(first)
    })
    .catch((err) => {
      console.error('3d.wasm 加载失败:', err)
      ctx.fillStyle = '#f00'
      ctx.font = '16px monospace'
      ctx.fillText('3d.wasm 加载失败', 10, 30)
    })
})()
