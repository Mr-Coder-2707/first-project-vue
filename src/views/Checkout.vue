<template>
  <div class="checkout-page">
    <div class="container py-5">
      <!-- Page Header -->
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="display-5 fw-bold text-center mb-2">
            <i class="fas fa-credit-card text-warning ms-2"></i>
            إتمام الطلب
          </h1>
          <p class="text-center text-muted">
            املأ بياناتك لإتمام عملية الشراء
          </p>
        </div>
      </div>

      <div class="row">
        <!-- Checkout Form -->
        <div class="col-lg-8 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-header bg-dark text-white">
              <h5 class="mb-0">
                <i class="fas fa-user-edit ms-2"></i>
                بيانات المشتري
              </h5>
            </div>
            <div class="card-body p-4">
              <form @submit.prevent="submitOrder">
                <!-- Personal Information -->
                <div class="section-header mb-3">
                  <h6 class="text-warning fw-bold">
                    <i class="fas fa-user-circle ms-2"></i>
                    المعلومات الشخصية
                  </h6>
                  <hr>
                </div>

                <div class="row g-3 mb-4">
                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fas fa-user ms-1"></i>
                      الاسم بالكامل <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="formData.fullName"
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fas fa-phone ms-1"></i>
                      رقم الهاتف <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="tel" 
                      class="form-control" 
                      v-model="formData.phone"
                      placeholder="مثال: 01012345678"
                      pattern="[0-9]{11}"
                      required
                    />
                    <small class="text-muted">يرجى إدخال 11 رقم</small>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fab fa-whatsapp ms-1"></i>
                      رقم واتساب (إن كان مختلف)
                    </label>
                    <input 
                      type="tel" 
                      class="form-control" 
                      v-model="formData.whatsapp"
                      placeholder="01012345678"
                      pattern="[0-9]{11}"
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fas fa-envelope ms-1"></i>
                      البريد الإلكتروني (اختياري)
                    </label>
                    <input 
                      type="email" 
                      class="form-control" 
                      v-model="formData.email"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <!-- Shipping Address -->
                <div class="section-header mb-3 mt-4">
                  <h6 class="text-warning fw-bold">
                    <i class="fas fa-map-marker-alt ms-2"></i>
                    عنوان الشحن
                  </h6>
                  <hr>
                </div>

                <div class="row g-3 mb-4">
                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fas fa-city ms-1"></i>
                      المحافظة <span class="text-danger">*</span>
                    </label>
                    <select 
                      class="form-select" 
                      v-model="formData.governorate"
                      required
                    >
                      <option value="">اختر المحافظة</option>
                      <option v-for="gov in governorates" :key="gov" :value="gov">
                        {{ gov }}
                      </option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fas fa-city ms-1"></i>
                      المدينة <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="formData.city"
                      placeholder="أدخل المدينة"
                      required
                    />
                  </div>

                  <div class="col-12">
                    <label class="form-label">
                      <i class="fas fa-home ms-1"></i>
                      العنوان بالتفصيل <span class="text-danger">*</span>
                    </label>
                    <textarea 
                      class="form-control" 
                      v-model="formData.address"
                      rows="3"
                      placeholder="مثال: شارع النيل، بجوار مسجد السلام، الطابق الثالث، شقة 5"
                      required
                    ></textarea>
                    <small class="text-muted">
                      يرجى كتابة العنوان بالتفصيل لضمان وصول الطلب
                    </small>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fas fa-building ms-1"></i>
                      رقم العمارة/الفيلا
                    </label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="formData.building"
                      placeholder="رقم العمارة"
                    />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label">
                      <i class="fas fa-door-open ms-1"></i>
                      رقم الشقة
                    </label>
                    <input 
                      type="text" 
                      class="form-control" 
                      v-model="formData.apartment"
                      placeholder="رقم الشقة"
                    />
                  </div>
                </div>

                <!-- Additional Notes -->
                <div class="section-header mb-3 mt-4">
                  <h6 class="text-warning fw-bold">
                    <i class="fas fa-comment ms-2"></i>
                    ملاحظات إضافية
                  </h6>
                  <hr>
                </div>

                <div class="mb-4">
                  <label class="form-label">
                    <i class="fas fa-sticky-note ms-1"></i>
                    ملاحظات على الطلب (اختياري)
                  </label>
                  <textarea 
                    class="form-control" 
                    v-model="formData.notes"
                    rows="3"
                    placeholder="أي ملاحظات أو طلبات خاصة..."
                  ></textarea>
                </div>

                <!-- Payment Method -->
                <div class="section-header mb-3 mt-4">
                  <h6 class="text-warning fw-bold">
                    <i class="fas fa-money-bill-wave ms-2"></i>
                    طريقة الدفع
                  </h6>
                  <hr>
                </div>

                <div class="mb-4">
                  <div class="form-check p-3 border rounded mb-2">
                    <input 
                      class="form-check-input" 
                      type="radio" 
                      name="payment" 
                      id="cash"
                      value="cash"
                      v-model="formData.paymentMethod"
                      checked
                    />
                    <label class="form-check-label w-100" for="cash">
                      <i class="fas fa-money-bill-alt text-success ms-2"></i>
                      <strong>الدفع عند الاستلام</strong>
                      <p class="text-muted small mb-0 mt-1">ادفع نقداً عند استلام الطلب</p>
                    </label>
                  </div>
                </div>

                <!-- Terms & Conditions -->
                <div class="form-check mb-4">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="terms"
                    v-model="formData.acceptTerms"
                    required
                  />
                  <label class="form-check-label" for="terms">
                    أوافق على 
                    <a href="#" class="text-decoration-none">الشروط والأحكام</a>
                    <span class="text-danger">*</span>
                  </label>
                </div>

                <!-- Submit Buttons -->
                <div class="d-grid gap-2">
                  <button 
                    type="submit" 
                    class="btn btn-success btn-lg"
                    :disabled="!formData.acceptTerms"
                  >
                    <i class="fab fa-whatsapp fs-5 ms-2"></i>
                    إرسال الطلب عبر واتساب
                  </button>
                  <router-link to="/cart" class="btn btn-outline-secondary">
                    <i class="fas fa-arrow-right ms-2"></i>
                    العودة للعربة
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Order Summary Sidebar -->
        <div class="col-lg-4">
          <div class="card shadow-sm border-0 sticky-top" style="top: 100px;">
            <div class="card-header bg-warning text-dark">
              <h5 class="mb-0 fw-bold">
                <i class="fas fa-clipboard-list ms-2"></i>
                ملخص الطلب
              </h5>
            </div>
            <div class="card-body">
              <!-- Cart Items Summary -->
              <div class="order-items mb-3">
                <div 
                  v-for="item in cartItems" 
                  :key="item.id"
                  class="d-flex align-items-center mb-2 pb-2 border-bottom"
                >
                  <img 
                    :src="item.image" 
                    :alt="item.name" 
                    class="rounded"
                    style="width: 50px; height: 50px; object-fit: cover;"
                  />
                  <div class="me-2 flex-grow-1">
                    <small class="d-block">{{ item.name }}</small>
                    <small class="text-muted">الكمية: {{ item.quantity }}</small>
                  </div>
                  <strong class="text-success">
                    {{ (item.price * item.quantity).toFixed(2) }} ج.م
                  </strong>
                </div>
              </div>

              <!-- Pricing Details -->
              <div class="border-top pt-3">
                <div class="d-flex justify-content-between mb-2">
                  <span>المجموع الفرعي:</span>
                  <strong>{{ cartTotal.toFixed(2) }} ج.م</strong>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>الشحن:</span>
                  <strong class="text-success">مجاني</strong>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span>الضريبة:</span>
                  <strong>متضمنة</strong>
                </div>
                <hr>
                <div class="d-flex justify-content-between mb-0">
                  <span class="fs-5 fw-bold">الإجمالي:</span>
                  <span class="fs-4 fw-bold text-success">
                    {{ cartTotal.toFixed(2) }} ج.م
                  </span>
                </div>
              </div>
            </div>

            <!-- Trust Badges -->
            <div class="card-footer bg-light">
              <div class="text-center">
                <small class="text-muted d-block mb-2">
                  <i class="fas fa-shield-alt text-success ms-1"></i>
                  معاملات آمنة ومضمونة
                </small>
                <small class="text-muted d-block">
                  <i class="fas fa-truck text-primary ms-1"></i>
                  شحن سريع لجميع أنحاء مصر
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getCartItems, getCartTotal, clearCart } from '../store/cartStore'

export default {
  name: 'CheckoutPage',
  setup() {
    const router = useRouter()
    const cartItems = getCartItems
    const cartTotal = getCartTotal

    // Egyptian Governorates
    const governorates = [
      'القاهرة', 'الجيزة', 'الإسكندرية', 'الدقهلية', 'الشرقية',
      'المنوفية', 'القليوبية', 'البحيرة', 'الغربية', 'بورسعيد',
      'السويس', 'الإسماعيلية', 'كفر الشيخ', 'دمياط', 'الفيوم',
      'بني سويف', 'المنيا', 'أسيوط', 'سوهاج', 'قنا',
      'أسوان', 'الأقصر', 'البحر الأحمر', 'الوادي الجديد', 'مطروح',
      'شمال سيناء', 'جنوب سيناء'
    ]

    const formData = reactive({
      fullName: '',
      phone: '',
      whatsapp: '',
      email: '',
      governorate: '',
      city: '',
      address: '',
      building: '',
      apartment: '',
      notes: '',
      paymentMethod: 'cash',
      acceptTerms: false
    })

    const submitOrder = () => {
      // Format order message
      const message = formatWhatsAppMessage()
      
      // Send via WhatsApp
      const phoneNumber = '+201557609572' // رقم الواتساب الخاص بك
      const whatsappURL = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`
      
      // Open WhatsApp
      window.open(whatsappURL, '_blank')
      
      // Clear cart and redirect
      setTimeout(() => {
        clearCart()
        router.push('/order-success')
      }, 1000)
    }

    const formatWhatsAppMessage = () => {
      let message = '🛍️ *طلب جديد من سمارت شوب*\n\n'
      
      // Customer Info
      message += '👤 *بيانات العميل:*\n'
      message += `الاسم: ${formData.fullName}\n`
      message += `الهاتف: ${formData.phone}\n`
      if (formData.whatsapp) message += `واتساب: ${formData.whatsapp}\n`
      if (formData.email) message += `البريد: ${formData.email}\n`
      message += '\n'
      
      // Shipping Address
      message += '📍 *عنوان الشحن:*\n'
      message += `المحافظة: ${formData.governorate}\n`
      message += `المدينة: ${formData.city}\n`
      message += `العنوان: ${formData.address}\n`
      if (formData.building) message += `رقم العمارة: ${formData.building}\n`
      if (formData.apartment) message += `رقم الشقة: ${formData.apartment}\n`
      message += '\n'
      
      // Order Items
      message += '📦 *المنتجات المطلوبة:*\n'
      cartItems.value.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`
        message += `   الكمية: ${item.quantity}\n`
        message += `   السعر: ${(item.price * item.quantity).toFixed(2)} ج.م\n`
      })
      message += '\n'
      
      // Total
      message += `💰 *الإجمالي: ${cartTotal.value.toFixed(2)} ج.م*\n`
      message += `💵 طريقة الدفع: ${formData.paymentMethod === 'cash' ? 'الدفع عند الاستلام' : 'أخرى'}\n`
      
      // Notes
      if (formData.notes) {
        message += '\n📝 *ملاحظات:*\n'
        message += formData.notes + '\n'
      }
      
      message += '\n✅ يرجى تأكيد الطلب'
      
      return message
    }

    // Redirect if cart is empty
    if (cartItems.value.length === 0) {
      router.push('/cart')
    }

    return {
      formData,
      cartItems,
      cartTotal,
      governorates,
      submitOrder
    }
  }
}
</script>

<style scoped>
.checkout-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.card {
  border-radius: 15px;
  overflow: hidden;
}

.card-header {
  border: none;
  padding: 1rem 1.5rem;
}

.section-header h6 {
  margin-bottom: 0.5rem;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-control, .form-select {
  border-radius: 8px;
  padding: 0.75rem;
  border: 2px solid #dee2e6;
  transition: all 0.3s ease;
}

.form-control:focus, .form-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.2rem rgba(255, 153, 0, 0.25);
}

.form-check-input:checked {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-success {
  background: var(--success-color);
  border: none;
  font-weight: 700;
  padding: 1rem;
  transition: all 0.3s ease;
}

.btn-success:hover:not(:disabled) {
  background: #1faa52;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
}

.btn-success:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.order-items {
  max-height: 300px;
  overflow-y: auto;
}

@media (max-width: 991px) {
  .sticky-top {
    position: relative !important;
    top: 0 !important;
  }
}
</style>
