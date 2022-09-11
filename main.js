const textarea = document.querySelector('textarea')

textarea.addEventListener('keyup', (e) => {
    textarea.style.height = 'auto'

    // scroll for textarea
    let scroll = e.target.scrollHeight
    textarea.style.height = `${scroll}px`
})
