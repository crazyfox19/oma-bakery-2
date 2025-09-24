// Show custom popup
function showPopup() {
  document.getElementById('popup').classList.add('active')
}

// Close popup
function closePopup() {
  document.getElementById('popup').classList.remove('active')
}

// Redirect to menu section
function redirectToMenu() {
  closePopup()
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })
}

// Close popup when clicking outside the content
document.getElementById('popup').addEventListener('click', function (e) {
  if (e.target === this) {
    closePopup()
  }
})

// Intersection Observer for fade-in on scroll
const faders = document.querySelectorAll('.fade-in')

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('visible')
    appearOnScroll.unobserve(entry.target)
  })
}, appearOptions)

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})

// Add hover effect to gallery images
document.querySelectorAll('.image-item').forEach((item) => {
  item.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-10px)'
  })

  item.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0)'
  })
})

// Generate random phone number
function generateRandomPhoneNumber() {
  const areaCode = Math.floor(Math.random() * 900) + 100
  const prefix = Math.floor(Math.random() * 900) + 100
  const lineNumber = Math.floor(Math.random() * 9000) + 1000
  return `+1 (${areaCode}) ${prefix}-${lineNumber}`
}

// Set random phone number on page load
document.addEventListener('DOMContentLoaded', function () {
  const phoneElement = document.getElementById('phone-number')
  phoneElement.textContent = generateRandomPhoneNumber()
})

// Add keyboard event listener for ESC key to close popup
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closePopup()
  }
})
