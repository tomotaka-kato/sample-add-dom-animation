const addDom = _ => {
    const domAddArea = document.getElementById('dom-add-area')
    const div = document.createElement('div')

    const message = document.getElementById('message-input').value
    div.textContent = message
    div.className = 'message-card message-card--mounted'
    domAddArea.insertBefore(div, domAddArea.firstChild)
    
    updateUI()
}

const lastDom = _ =>  document.getElementsByClassName('message-card')[0]
const calcDomHeight = _ => lastDom().clientHeight


const updateUI = _ => {
    const newDomHeight = calcDomHeight()
    console.log(newDomHeight)
}
