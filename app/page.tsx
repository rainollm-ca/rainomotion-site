'use client';

import { useState } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Digital Solutions for Medical Services',
      subtitle: 'Transforming healthcare through innovative software, automation, and digital solutions',
      cta: 'Get Started',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive digital solutions for modern healthcare',
      items: [
        {
          title: 'Medical Software',
          description: 'Custom software solutions designed specifically for medical practices, clinics, and hospitals',
        },
        {
          title: 'Process Automation',
          description: 'Streamline operations and reduce manual work with intelligent automation systems',
        },
        {
          title: 'Digital Transformation',
          description: 'Complete digital transformation services to modernize your healthcare facility',
        },
      ],
    },
    about: {
      title: 'About Rainomotion',
      content: 'We are a specialized digital solutions provider focused on the healthcare sector. Our mission is to help medical facilities embrace modern technology to improve patient care and operational efficiency.',
    },
    contact: {
      title: 'Contact Us',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      cta: 'Send Message',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'تواصل معنا',
    },
    hero: {
      title: 'حلول رقمية للخدمات الطبية',
      subtitle: 'تحويل الرعاية الصحية من خلال البرمجيات المبتكرة والأتمتة والحلول الرقمية',
      cta: 'ابدأ الآن',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول رقمية شاملة للرعاية الصحية الحديثة',
      items: [
        {
          title: 'البرمجيات الطبية',
          description: 'حلول برمجية مخصصة مصممة خصيصاً للعيادات والمستشفيات',
        },
        {
          title: 'أتمتة العمليات',
          description: 'تبسيط العمليات وتقليل العمل اليدوي من خلال أنظمة الأتمتة الذكية',
        },
        {
          title: 'التحول الرقمي',
          description: 'خدمات التحول الرقمي الكاملة لتحديث منشأتك الطبية',
        },
      ],
    },
    about: {
      title: 'عن رينوموشن',
      content: 'نحن مزود حلول رقمية متخصص يركز على قطاع الرعاية الصحية. مهمتنا هي مساعدة المرافق الطبية على تبني التكنولوجيا الحديثة لتحسين رعاية المرضى والكفاءة التشغيلية.',
    },
    contact: {
      title: 'تواصل معنا',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      cta: 'إرسال رسالة',
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = translations[lang];

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Rainomotion 🌊
              </span>
            </div>
            <div className="hidden md:flex space-x-8" dir="ltr">
              <a href="#hero" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.home}
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.services}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.about}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
                {t.nav.contact}
              </a>
            </div>
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{t.services.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-12">{t.services.subtitle}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{t.about.title}</h2>
          <p className="text-xl text-gray-600 text-center leading-relaxed">
            {t.about.content}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">{t.contact.title}</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-blue-600 font-semibold mb-2">{t.contact.email}</div>
                <div className="text-gray-600">info@rainomotion.com</div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-semibold mb-2">{t.contact.phone}</div>
                <div className="text-gray-600">+1 (xxx) xxx-xxxx</div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-semibold mb-2">{t.contact.location}</div>
                <div className="text-gray-600">Canada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2024 Rainomotion. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
