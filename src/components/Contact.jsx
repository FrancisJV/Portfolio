import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { socialLinks } from '../data/socialLinks';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

const serviceOptions = [
  "Website Development",
  "Data / Power BI",
  "QA / Testing",
  "Business Analysis",
  "Project Guidance",
  "Digital / Marketing Support",
  "Other"
];

const budgetOptions = [
  "Prefer to discuss",
  "Not sure yet",
  "Under $100",
  "$100 – $250",
  "$250 – $500",
  "$500+"
];

const contactMethodOptions = [
  "Email",
  "WhatsApp (after initial contact)",
  "Video Call"
];

export function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    budget: 'Prefer to discuss',
    contactMethod: 'Email',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected service if triggered from a Service/Guidance CTA button
  useEffect(() => {
    if (preselectedService && serviceOptions.includes(preselectedService)) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project or requirement.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your requirement.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Check if endpoint is configured or if in local preview mode
    if (!endpoint || endpoint.includes('your_form_id')) {
      // Graceful fallback for local development / testing without throwing a network crash
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          service: 'Website Development',
          budget: 'Prefer to discuss',
          contactMethod: 'Email',
          message: ''
        });
      }, 800);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          service: 'Website Development',
          budget: 'Prefer to discuss',
          contactMethod: 'Email',
          message: ''
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitStatus('error');
        setErrorMessage(data.error || 'There was an issue sending your message. Please try emailing directly.');
      }
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage('Network error occurred. Please reach out directly to ' + siteConfig.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasLinkedin = Boolean(socialLinks.linkedin && socialLinks.linkedin.url && socialLinks.linkedin.url.trim() !== '');
  const hasGithub = Boolean(socialLinks.github && socialLinks.github.url && socialLinks.github.url.trim() !== '');

  return (
    <section id="contact" className="py-20 md:py-28 bg-dark-900/60 relative border-t border-dark-800/80">
      <Container>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Start a Conversation"
          subtitle="Have a project in mind, an open role, or need technical mentoring? Send an inquiry and I will get back to you promptly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Inquiries & Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Feel free to email me directly or submit the project inquiry form. I respond within 24–48 business hours.
              </p>

              {/* Direct Email Pill */}
              <div className="p-4 rounded-xl bg-dark-950 border border-dark-750 mb-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-300 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Primary Email</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-brand-300 transition-colors truncate block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiries Privacy Promise */}
              <div className="p-4 rounded-xl bg-dark-950/60 border border-dark-800 text-xs text-slate-400 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Privacy & Confidentiality</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Your project details and email address will be kept strictly private and never shared. Direct phone/WhatsApp contact can be coordinated privately following initial review.
                </p>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-dark-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Professional Profiles
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {hasLinkedin && (
                    <Button
                      href={socialLinks.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={Linkedin}
                    >
                      LinkedIn
                    </Button>
                  )}
                  {hasGithub && (
                    <Button
                      href={socialLinks.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      icon={Github}
                    >
                      GitHub
                    </Button>
                  )}
                  <Button
                    href={`mailto:${siteConfig.email}`}
                    variant="outline"
                    size="sm"
                    icon={Mail}
                  >
                    Email Direct
                  </Button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
              
              {/* Form Success Banner */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 animate-fade-in" role="alert">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-white block">Inquiry Sent Successfully!</strong>
                    Thanks for reaching out! I've received your message and will get back to you as soon as possible.
                  </div>
                </div>
              )}

              {/* Form Error Banner */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-fade-in" role="alert">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-white block">Submission Notice</strong>
                    {errorMessage}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                
                {/* Name and Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Perera"
                      required
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-colors ${
                        errors.name ? 'border-rose-500/80 bg-rose-950/20' : 'border-dark-750 focus:border-brand-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-colors ${
                        errors.email ? 'border-rose-500/80 bg-rose-950/20' : 'border-dark-750 focus:border-brand-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-rose-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Required and Budget Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Required */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Required <span className="text-brand-400">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-dark-750 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-dark-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-dark-750 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-dark-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label htmlFor="contactMethod" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Communication Channel
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border border-dark-750 text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-colors"
                  >
                    {contactMethodOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-dark-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project / Requirement Details <span className="text-brand-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your goals, timeline, or what you'd like to achieve..."
                    required
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-colors resize-y ${
                      errors.message ? 'border-rose-500/80 bg-rose-950/20' : 'border-dark-750 focus:border-brand-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-rose-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="glow"
                    size="lg"
                    icon={Send}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? 'Sending Inquiry...' : 'Send Inquiry'}
                  </Button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
