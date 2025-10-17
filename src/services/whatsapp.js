// WhatsApp Business API Integration - تكامل واتساب
// استبدل هذا الرقم برقم واتساب الخاص بك
const WHATSAPP_NUMBER = '+201557609572' // الصيغة: +20 ثم رقم الموبايل (11 رقم)

/**
 * Send product order via WhatsApp
 * @param {Object} product - Product object containing name, price, image, etc.
 */
export function sendWhatsAppOrder(product) {
  // Format the message
  const message = formatOrderMessage(product)
  
  // Create WhatsApp URL
  const whatsappURL = createWhatsAppURL(message)
  
  // Open WhatsApp in new tab
  window.open(whatsappURL, '_blank')
}

/**
 * Format product information into WhatsApp message
 * @param {Object} product - Product object
 * @returns {string} Formatted message
 */
function formatOrderMessage(product) {
  const lines = [
    '🛍️ *طلب جديد من سمارت شوب*',
    '',
    `📦 *المنتج:* ${product.name}`,
    `💰 *السعر:* ${product.price} ج.م`,
    `📁 *القسم:* ${product.category}`,
    ''
  ]
  
  if (product.originalPrice) {
    lines.push(`~~${product.originalPrice} ج.م~~ 🔥 *خصم ${product.discount}%*`)
    lines.push('')
  }
  
  lines.push(`⭐ *التقييم:* ${'⭐'.repeat(product.rating)} (${product.reviews} مراجعة)`)
  lines.push('')
  lines.push(`🔗 *رابط المنتج:* ${window.location.origin}/#/product/${product.id}`)
  lines.push('')
  lines.push('✅ أرغب في طلب هذا المنتج!')
  
  return lines.join('\n')
}

/**
 * Create WhatsApp Click-to-Chat URL
 * @param {string} message - Pre-filled message
 * @returns {string} WhatsApp URL
 */
function createWhatsAppURL(message) {
  const encodedMessage = encodeURIComponent(message)
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
  
  // Use wa.me API for better compatibility
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`
}

/**
 * Send custom message via WhatsApp
 * @param {string} message - Custom message text
 */
export function sendWhatsAppMessage(message) {
  const encodedMessage = encodeURIComponent(message)
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '')
  const whatsappURL = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  
  window.open(whatsappURL, '_blank')
}

/**
 * Get WhatsApp number
 * @returns {string} WhatsApp number
 */
export function getWhatsAppNumber() {
  return WHATSAPP_NUMBER
}
