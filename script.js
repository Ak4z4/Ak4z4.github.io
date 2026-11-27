// Relógio da barra de tarefas
(function () {
  var el = document.getElementById("clock");
  if (!el) return;
  function tick() {
    el.textContent = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  }
  tick();
  setInterval(tick, 30000);
})();

// Easter egg para quem abre o console
console.log("%cOlá, curioso(a)! Se você abriu o console, já tem cara de quem vai se dar bem em segurança.", "font-size:14px");
