"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2, Sparkles, Send } from "lucide-react";
import { SALON_DATA } from "@/config/salon";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      // Find matching service
      const match = SALON_DATA.services.find(
        (s) =>
          s.title.toLowerCase().includes(preselectedService.toLowerCase()) ||
          s.id.toLowerCase() === preselectedService.toLowerCase() ||
          s.category.toLowerCase().includes(preselectedService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.title }));
      } else {
        setFormData((prev) => ({ ...prev, service: preselectedService }));
      }
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid international phone number";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.service) errs.service = "Please select a service";
    if (!formData.date) errs.date = "Please select your preferred date";
    if (!formData.time) errs.time = "Please select your preferred time slot";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `Hello LUXE Hair Studio! I would like to request an appointment enquiry:%0A%0A*Name:* ${encodeURIComponent(formData.fullName)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Date:* ${encodeURIComponent(formData.date)}%0A*Time:* ${encodeURIComponent(formData.time)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email)}${formData.notes ? `%0A*Notes:* ${encodeURIComponent(formData.notes)}` : ""}`;
    return `https://wa.me/${SALON_DATA.phoneClean.replace(/[^0-9]/g, "")}?text=${text}`;
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  const timeSlots = [
    "09:30 AM", "10:30 AM", "11:30 AM", "12:30 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:30 PM", "06:30 PM"
  ];

  return (
    <div className="relative w-full glass-ultra rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-[#D4AF63]/40 shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
      {/* Glow border corner highlight */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4AF63]/18 blur-3xl pointer-events-none" />

      {isSuccess ? (
        <div className="py-8 text-center flex flex-col items-center animate-fadeIn relative z-20">
          <div className="w-16 h-16 rounded-full bg-[#D4AF63]/25 border-2 border-[#FFF0CA] flex items-center justify-center text-[#FFF0CA] mb-5 shadow-[0_0_35px_rgba(243,217,155,0.6)]">
            <CheckCircle2 className="w-8 h-8 text-[#FFF0CA]" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest text-[#FFF0CA] bg-black/70 border border-[#D4AF63]/50 mb-3">
            <Sparkles className="w-3 h-3 text-[#D4AF63]" />
            Enquiry Received
          </span>

          <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium mb-3">
            Thank You, {formData.fullName.split(" ")[0]}
          </h3>

          <p className="text-sm text-zinc-200 max-w-md leading-relaxed font-light mb-6">
            We have received your appointment enquiry for <strong className="text-[#FFF0CA] font-medium">{formData.service}</strong> on <strong className="text-white font-medium">{formData.date}</strong> at <strong className="text-white font-medium">{formData.time}</strong>.
          </p>

          {/* Transparent status notice */}
          <div className="w-full max-w-md p-4 rounded-2xl glass-ultra border border-white/10 text-xs text-zinc-300 space-y-2 mb-8 text-left">
            <div className="flex items-center gap-2 text-[#FFF0CA] font-medium">
              <Clock className="w-4 h-4 text-[#D4AF63]" />
              <span>Next Steps: Salon Concierge Confirmation</span>
            </div>
            <p className="leading-relaxed">
              Our salon concierge team will contact you at <span className="text-white font-mono">{formData.phone}</span> within 2 hours to confirm your chair and stylist assignment.
            </p>
          </div>

          {/* Quick WhatsApp Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <a
              href={getWhatsAppEnquiryUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:flex-1 py-3 px-5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_25px_rgba(212,175,99,0.5)] hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Fast-Track on WhatsApp</span>
            </a>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white bg-black/60 border border-white/15 hover:border-[#D4AF63]/50 transition-colors"
            >
              New Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 relative z-20" noValidate>
          <div className="border-b border-white/10 pb-4 mb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium drop-shadow">
              Book an Appointment
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1">
              Select your service, preferred timing and leave the rest to our salon concierge.
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#F3D99B] font-medium mb-1.5">
              Full Name <span className="text-[#FFF0CA]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Victoria Harrison"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full bg-black/55 border ${
                  errors.fullName ? "border-red-500/80" : "border-white/15 focus:border-[#FFF0CA]"
                } rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors backdrop-blur-md`}
              />
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            </div>
            {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#F3D99B] font-medium mb-1.5">
                Phone Number <span className="text-[#FFF0CA]">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="+44 7123 456789"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full bg-black/55 border ${
                    errors.phone ? "border-red-500/80" : "border-white/15 focus:border-[#FFF0CA]"
                  } rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors backdrop-blur-md`}
                />
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              </div>
              {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#F3D99B] font-medium mb-1.5">
                Email Address <span className="text-[#FFF0CA]">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@luxury.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full bg-black/55 border ${
                    errors.email ? "border-red-500/80" : "border-white/15 focus:border-[#FFF0CA]"
                  } rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors backdrop-blur-md`}
                />
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              </div>
              {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Select Service */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#F3D99B] font-medium mb-1.5">
              Select Service <span className="text-[#FFF0CA]">*</span>
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`w-full bg-black/70 border ${
                errors.service ? "border-red-500/80" : "border-white/15 focus:border-[#FFF0CA]"
              } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors backdrop-blur-md`}
            >
              <option value="" disabled className="bg-[#121212] text-zinc-400">
                Choose a Bespoke Service...
              </option>
              {SALON_DATA.services.map((s) => (
                <option key={s.id} value={s.title} className="bg-[#121212] text-white py-1.5">
                  {s.title} — From {s.price} ({s.duration})
                </option>
              ))}
            </select>
            {errors.service && <p className="text-[11px] text-red-400 mt-1">{errors.service}</p>}
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Preferred Date */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#F3D99B] font-medium mb-1.5">
                Preferred Date <span className="text-[#FFF0CA]">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  min={todayStr}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`w-full bg-black/55 border ${
                    errors.date ? "border-red-500/80" : "border-white/15 focus:border-[#FFF0CA]"
                  } rounded-xl px-4 py-3 pl-11 text-sm text-white focus:outline-none transition-colors backdrop-blur-md`}
                />
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              {errors.date && <p className="text-[11px] text-red-400 mt-1">{errors.date}</p>}
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#F3D99B] font-medium mb-1.5">
                Preferred Time <span className="text-[#FFF0CA]">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className={`w-full bg-black/70 border ${
                    errors.time ? "border-red-500/80" : "border-white/15 focus:border-[#FFF0CA]"
                  } rounded-xl px-4 py-3 pl-11 text-sm text-white focus:outline-none transition-colors backdrop-blur-md`}
                >
                  <option value="" disabled className="bg-[#121212] text-zinc-400">
                    Select Time...
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#121212] text-white">
                      {slot}
                    </option>
                  ))}
                </select>
                <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
              </div>
              {errors.time && <p className="text-[11px] text-red-400 mt-1">{errors.time}</p>}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#F3D99B] font-medium mb-1.5">
              Additional Notes (Optional)
            </label>
            <div className="relative">
              <textarea
                rows={3}
                placeholder="Mention any specific stylist preference, hair length, or inspiration..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-black/55 border border-white/15 focus:border-[#FFF0CA] rounded-xl px-4 py-3 pl-11 text-sm text-white placeholder-zinc-500 focus:outline-none transition-colors backdrop-blur-md"
              />
              <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-400" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-full text-xs font-semibold uppercase tracking-widest text-black bg-gradient-to-r from-[#FFF0CA] via-[#E2C37E] to-[#C99E4B] shadow-[0_0_30px_rgba(212,175,99,0.5)] hover:shadow-[0_0_45px_rgba(243,217,155,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>Processing Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Confirm Booking</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>

          {/* Privacy & Concierge Guarantee */}
          <p className="text-[11px] text-zinc-400 text-center font-light pt-2">
            By submitting, you request an appointment slot. No upfront payment required. Your information remains completely confidential.
          </p>
        </form>
      )}
    </div>
  );
}
