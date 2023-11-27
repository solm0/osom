document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth / 1000 - e.pageX * speed * 0.01)
        const y = (window.innerHeight / 1000 - e.pageY * speed * 0.01)

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
        
    })
}