// Configuration loader for dynamic content
class ConfigLoader {
  constructor() {
    this.config = null
    this.init()
  }

  async init() {
    try {
      const response = await fetch("html_configs.json")
      this.config = await response.json()
      this.updateContent()
    } catch (error) {
      console.error("Failed to load configuration:", error)
    }
  }

  updateContent() {
    if (!this.config) return

    // Update site info
    this.updateSiteInfo()

    // Update navigation
    this.updateNavigation()

    // Update products
    this.updateProducts()

    // Update contact info
    this.updateContactInfo()

    // Update theme colors
    this.updateTheme()
  }

  updateSiteInfo() {
    const { siteInfo, sections } = this.config

    // Update title
    document.title = siteInfo.title

    // Update home section
    const homeTitle = document.querySelector(".home-text h5")
    if (homeTitle) homeTitle.textContent = siteInfo.title

    const homeSubtitle = document.querySelector(".home-text h6")
    if (homeSubtitle) {
      homeSubtitle.innerHTML = `${siteInfo.subtitle} ${siteInfo.description}`
    }

    // Update home image
    const homeImg = document.querySelector(".home-img img")
    if (homeImg && siteInfo.homeImage) {
      homeImg.src = siteInfo.homeImage
    }

    // Update CTA button
    const ctaBtn = document.querySelector(".home-text .btn")
    if (ctaBtn) {
      ctaBtn.textContent = siteInfo.ctaText || "Contact Us"
      ctaBtn.href = siteInfo.ctaLink || "#contact"
    }

    // Update section titles
    if (sections) {
      if (sections.products && sections.products.showSection) {
        const productsTitle = document.querySelector(".products .center h3")
        if (productsTitle) productsTitle.textContent = sections.products.title
      }

      if (sections.contact && sections.contact.showSection) {
        const contactTitle = document.querySelector(".contact .center h3")
        if (contactTitle) contactTitle.textContent = sections.contact.title
      }
    }
  }

  updateNavigation() {
    const navbar = document.querySelector(".navbar")
    if (!navbar || !this.config.navigation) return

    navbar.innerHTML = ""
    this.config.navigation.forEach((item) => {
      const li = document.createElement("li")
      const a = document.createElement("a")
      a.href = item.href
      a.textContent = item.name
      if (item.target) a.target = item.target
      li.appendChild(a)
      navbar.appendChild(li)
    })
  }

  updateProducts() {
    const productContent = document.querySelector(".product-content")
    if (!productContent || !this.config.products) return

    productContent.innerHTML = ""
    this.config.products.forEach((product) => {
      const productDiv = document.createElement("div")
      productDiv.className = "product-item"
      productDiv.innerHTML = `
        <div class="app-background">
          <img src="${product.background}" alt="App Background" class="bg-image">
        </div>
        <div class="app-info">
          <div class="app-icon">
            <img src="${product.icon}" alt="App Icon">
          </div>
          <div class="app-details">
            <h3 class="app-name">${product.name}</h3>
            <p class="app-description">${product.description}</p>
          </div>
        </div>
      `
      productContent.appendChild(productDiv)
    })
  }

  updateContactInfo() {
    const { contact } = this.config

    if (!contact) return

    // Update contact section title and subtitle
    const contactTitle = document.querySelector(".contact .center h3")
    if (contactTitle) contactTitle.textContent = contact.title

    const contactSubtitle = document.querySelector(".contact .center p")
    if (contactSubtitle) contactSubtitle.textContent = contact.subtitle

    // Update contact information
    const emailElement = document.querySelector(
      ".contact .contact-info .contact-item:nth-child(1) p"
    )
    if (emailElement) emailElement.textContent = contact.email

    const phoneElement = document.querySelector(
      ".contact .contact-info .contact-item:nth-child(2) p"
    )
    if (phoneElement) phoneElement.textContent = contact.phone

    const locationElement = document.querySelector(
      ".contact .contact-info .contact-item:nth-child(3) p"
    )
    if (locationElement) locationElement.textContent = contact.location

    // Update social links if they exist
    if (contact.socialLinks && contact.socialLinks.length > 0) {
      const socialContainer = document.querySelector(".contact .social-links")
      if (socialContainer) {
        socialContainer.innerHTML = ""
        contact.socialLinks.forEach((link) => {
          const socialLink = document.createElement("a")
          socialLink.href = link.url
          socialLink.target = "_blank"
          socialLink.innerHTML = `<i class="${link.icon}"></i>`
          socialLink.title = link.name
          socialContainer.appendChild(socialLink)
        })
      }
    }
  }

  updateTheme() {
    const { theme } = this.config
    const root = document.documentElement

    root.style.setProperty("--main-color", theme.primaryColor)
    root.style.setProperty("--bg--color", theme.backgroundColor)
    root.style.setProperty("--text-color", theme.textColor)
    root.style.setProperty("--2nd-main-color", theme.secondaryTextColor)
  }
}

// Initialize configuration loader when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ConfigLoader()
})
