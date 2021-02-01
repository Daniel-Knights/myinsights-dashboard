const bars = document.querySelectorAll('.chart-bar')
const refreshBtn = document.getElementById('refresh')
const dummyData = {
    adherence: null,
    combinationTherapy: null,
    dosing: null,
    guidelines: null,
    safety: null,
    other: null
}

function populateBars(bar) {
    const barWidth = bar.offsetWidth

    Object.keys(dummyData).forEach(key => {
        const div = document.createElement('div')
        const percentTooltip = document.createElement('div')
        const randomPercentage = Math.floor(Math.random() * 100)

        if (!randomPercentage) return

        div.className = key === 'combinationTherapy' ? 'combination-therapy' : key
        div.style.width = randomPercentage + '%'
        percentTooltip.className = 'percent-tooltip'

        bar.appendChild(div)

        setTimeout(() => {
            const divWidth = div.offsetWidth

            percentTooltip.textContent = Math.round((divWidth / barWidth) * 100) + '%'

            div.appendChild(percentTooltip)
        })
    })
}

function refreshBars() {
    bars.forEach(bar => {
        const barWidth = bar.offsetWidth
        const barChildren = [...bar.children]
        const tooltips = bar.querySelectorAll('.percent-tooltip')

        barChildren.forEach((child, i) => {
            const randomPercentage = Math.floor(Math.random() * 100)

            if (!randomPercentage) return

            child.style.width = randomPercentage + '%'

            setTimeout(() => {
                tooltips[i].textContent =
                    Math.round((child.offsetWidth / barWidth) * 100) + '%'
            }, 250)
        })
    })
}

bars.forEach(populateBars)
refreshBtn.addEventListener('click', refreshBars)
