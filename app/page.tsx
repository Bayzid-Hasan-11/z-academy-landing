"use client";

import React, { useState, useEffect, ReactNode, FormEvent } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = ({ title, children, isOpen, onClick }: AccordionProps) => (
  <div className="border border-gray-200 rounded-xl mb-4 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
    <button
      onClick={onClick}
      className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
    >
      <span className="font-bold text-gray-800 text-lg">{title}</span>
      <svg
        className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    <div
      className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
    >
      <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
        {children}
      </div>
    </div>
  </div>
);

// --- Cute Robot Chatbot Component (ZAR) ---
const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string }[]
  >([
    {
      sender: "bot",
      text: "হ্যালো! 👋 আমি ZAR (জার), Z Academy-এর ছোট্ট রোবট। তোমাকে কীভাবে সাহায্য করতে পারি?",
    },
  ]);

  // Updated and expanded FAQs
  const faqOptions = [
    {
      q: "কোর্সের ফি কত?",
      a: "আমাদের কোর্সের রেগুলার ফি ২৯৯৯ টাকা, কিন্তু এখন স্পেশাল অফারে মাত্র ৯৯৯ টাকা!",
    },
    {
      q: "ক্লাস কিভাবে হবে?",
      a: "ক্লাসগুলো সরাসরি লাইভে (Zoom/Google Meet) হবে এবং প্রতিটি ক্লাসের HD রেকর্ডিং দেওয়া হবে।",
    },
    {
      q: "লাইভ ক্লাস মিস করলে কী হবে?",
      a: "কোনো সমস্যা নেই! প্রতিটি লাইভ ক্লাসের HD রেকর্ডিং আপনার ড্যাশবোর্ডে বা প্রাইভেট গ্রুপে দেওয়া থাকবে।",
    },
    {
      q: "ভর্তি হব কিভাবে?",
      a: "ওয়েবসাইটের নিচের ফর্মে পেমেন্ট সম্পন্ন করে ডিটেইলস সাবমিট করলেই আমাদের টিম আপনাকে WhatsApp গ্রুপে যুক্ত করে নিবে।",
    },
    {
      q: "লেকচার শিট বা নোটস পাবো?",
      a: "অবশ্যই! প্রতিটি ক্লাসের পর প্রিমিয়াম কালারফুল লেকচার শিট এবং প্র্যাকটিস ম্যাটেরিয়াল দেওয়া হবে।",
    },
    {
      q: "প্রবলেম সলভিং সাপোর্ট আছে?",
      a: "হ্যাঁ, আমাদের ডেডিকেটেড সাপোর্ট গ্রুপ আছে, যেখানে আপনি যেকোনো সময় প্রশ্ন করে শিক্ষকের সাহায্য নিতে পারবেন।",
    },
    {
      q: "সরাসরি কথা বলতে চাই",
      a: "আপনি যেকোনো প্রয়োজনে আমাদের 01815-931153 নম্বরে সরাসরি কল বা WhatsApp করতে পারেন।",
    },
  ];

  const handleOptionClick = (faq: { q: string; a: string }) => {
    setMessages((prev) => [...prev, { sender: "user", text: faq.q }]);

    // Slight delay to make it feel natural and cute
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: faq.a }]);
    }, 500);
  };

  return (
    // Positioned Middle-Left
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Floating Cute Robot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-16 h-16 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition-all duration-300 z-10"
      >
        <span className="text-3xl animate-pulse">🤖</span>
        {/* Cute notification dot */}
        {!isOpen && (
          <span className="absolute top-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 border-2 border-white"></span>
          </span>
        )}
      </button>

      {/* Chat Window (Appears to the right of the robot) */}
      {isOpen && (
        <div className="absolute left-20 bg-white/95 backdrop-blur-xl w-[350px] h-[500px] rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden flex flex-col transition-all transform origin-left animate-in fade-in zoom-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-2xl border border-white/30 shadow-inner">
                🤖
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight">ZAR</h3>
                <p className="text-[10px] text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>{" "}
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#F8FAFC] flex flex-col gap-3 scroll-smooth">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.sender === "bot"
                    ? "bg-white border border-indigo-50 text-gray-800 self-start rounded-tl-sm"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white self-end rounded-tr-sm"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Options / FAQ Buttons Area */}
          <div className="p-4 bg-white border-t border-indigo-50 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
            <p className="text-xs text-gray-400 font-medium mb-3 flex items-center gap-2">
              <span className="w-full h-px bg-gray-100 flex-1"></span>
              তোমার প্রশ্ন বেছে নাও
              <span className="w-full h-px bg-gray-100 flex-1"></span>
            </p>
            <div className="flex flex-wrap gap-2 justify-center max-h-32 overflow-y-auto custom-scrollbar">
              {faqOptions.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(faq)}
                  className="bg-indigo-50 hover:bg-indigo-500 hover:text-white text-indigo-700 text-xs font-semibold px-3 py-2 rounded-xl transition-all duration-200 text-left border border-indigo-100 shadow-sm"
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function LandingPage() {
  const [lang, setLang] = useState<"bn" | "en">("bn");
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openSyllabus, setOpenSyllabus] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "bn" ? "en" : "bn");

  const copyNumber = () => {
    navigator.clipboard.writeText("01815931153");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const paymentNumber = formData.get("paymentNumber") as string;

    if (!paymentNumber.trim()) {
      setErrorMessage(
        lang === "bn"
          ? "অনুগ্রহ করে পেমেন্ট নম্বর প্রদান করুন।"
          : "Please provide a payment number.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        lang === "bn"
          ? "সার্ভার ত্রুটি। আবার চেষ্টা করুন।"
          : "Server error. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const content = {
    bn: {
      navEnroll: "ভর্তি হোন",
      heroBadge: "HSC 27 & 28-এর জন্য সেরা কোর্স",
      heroTitle: "ICT প্রস্তুতি হোক একদম বেসিক থেকে প্রো",
      heroSubtitle:
        "বোর্ড পরীক্ষার জন্য Number System, Logic Gate, HTML, C Programming এবং Database-এর ১০০% কমপ্লিট সল্যুশন।",
      regularPrice: "২৯৯৯ ৳",
      offerPrice: "৯৯৯ ৳",
      ctaMain: "আজই সিট কনফার্ম করো",
      syllabusTitle: "কোর্সে যা যা শিখবো",
      syllabus: [
        {
          title: "Number System & Logic Gate",
          desc: "সংখ্যা পদ্ধতি রূপান্তর, পরিপূরক, বুলিয়ান অ্যালজেবরা এবং লজিক গেটের বিস্তারিত।",
        },
        {
          title: "Web Design & HTML",
          desc: "ওয়েবসাইটের কাঠামো তৈরি, ট্যাগ, টেবিল, ফর্ম এবং প্র্যাকটিক্যাল কোডিং।",
        },
        {
          title: "C Programming",
          desc: "অ্যালগরিদম, ফ্লোচার্ট, লুপ, কন্ডিশনাল স্টেটমেন্ট এবং বেসিক প্রোগ্রামিং লজিক।",
        },
        {
          title: "Database Management",
          desc: "ডেটাবেস রিলেশন, SQL কোয়েরি এবং ডেটা সিকিউরিটি।",
        },
      ],
      featuresTitle: "কেন এই কোর্সটি আলাদা?",
      features: [
        {
          title: "Interactive LIVE Classes",
          desc: "সরাসরি ক্লাসে শিক্ষকের সাথে কথা বলে প্রশ্ন সমাধানের সুযোগ।",
        },
        {
          title: "Weekly Support Classes",
          desc: "সপ্তাহের কঠিন টপিকগুলো নিয়ে বিশেষ প্রবলেম-সলভিং ক্লাস।",
        },
        {
          title: "Recordings & Notes",
          desc: "প্রতিটি ক্লাসের রেকর্ডিং এবং প্রিমিয়াম ক্লাস নোটস।",
        },
        {
          title: "Exam Focused Practice",
          desc: "বোর্ড স্ট্যান্ডার্ড MCQ এবং CQ প্র্যাকটিস।",
        },
      ],
      promiseTitle: "আমাদের প্রতিশ্রুতি 🛡️",
      promiseText:
        "আমরা চাই আপনি নিশ্চিন্তে শুরু করুন। প্রথম ২টি ক্লাস করার পর যদি মনে হয় কোর্সটি আপনার জন্য উপযুক্ত নয়, আমাদের জানান। আমরা আপনার সমস্যার সমাধান করব।",
      faqTitle: "সাধারণ জিজ্ঞাসা (FAQ)",
      faqs: [
        {
          q: "আমি লাইভ ক্লাস মিস করলে কী হবে?",
          a: "প্রতিটি ক্লাসের HD রেকর্ডিং আপনার ড্যাশবোর্ডে/গ্রুপে দেওয়া হবে, যা আপনি যেকোনো সময় দেখতে পারবেন।",
        },
        {
          q: "ক্লাসে প্রশ্ন করার সুযোগ থাকবে কি?",
          a: "হ্যাঁ! আমাদের ক্লাসগুলো অত্যন্ত ইন্টারেক্টিভ। আপনি সরাসরি আনমিউট করে প্রশ্ন করতে পারবেন।",
        },
        {
          q: "ভর্তি হওয়ার প্রক্রিয়া কী?",
          a: "নিচের ফর্মে পেমেন্ট ডিটেইলস দিয়ে সাবমিট করলেই আমাদের টিম আপনাকে WhatsApp গ্রুপে যুক্ত করে নিবে।",
        },
      ],
      formTitle: "ভর্তি ফর্ম",
      paymentStep: "ধাপ ১: পেমেন্ট সম্পন্ন করুন",
      paymentInstruction: "নিচের নম্বরে ৯৯৯ টাকা (Send Money) করুন:",
      methods: "Bkash / Nagad / Rocket",
      copyBtn: "কপি করুন",
      copiedBtn: "কপি হয়েছে!",
      nameLabel: "আপনার সম্পূর্ণ নাম",
      phoneLabel: "WhatsApp নম্বর",
      proofTitle: "পেমেন্ট প্রুফ",
      senderNumberLabel: "যে নম্বর থেকে টাকা পাঠিয়েছেন",
      submitBtn: "রেজিস্ট্রেশন সম্পন্ন করুন",
      submittingBtn: "প্রসেসিং হচ্ছে...",
      whatsappHelp: "যেকোনো প্রয়োজনে নিচের হোয়াটসঅ্যাপ আইকনে যোগাযোগ করুন।",
      successMsg: "আপনার রেজিস্ট্রেশন সফল হয়েছে! আমরা খুব শীঘ্রই যোগাযোগ করবো।",
    },
    en: {
      navEnroll: "Enroll Now",
      heroBadge: "Premium Course for HSC 27 & 28",
      heroTitle: "Master ICT from Basics to Advanced",
      heroSubtitle:
        "A 100% complete solution for your board exams covering Number Systems, Logic Gates, HTML, C Programming, and Databases.",
      regularPrice: "2999 TK",
      offerPrice: "999 TK",
      ctaMain: "Secure Your Seat Now",
      syllabusTitle: "Course Syllabus",
      syllabus: [
        {
          title: "Number System & Logic Gates",
          desc: "Number conversions, complements, boolean algebra, and detailed logic gate design.",
        },
        {
          title: "Web Design & HTML",
          desc: "Website structuring, tags, tables, forms, and practical coding sessions.",
        },
        {
          title: "C Programming",
          desc: "Algorithms, flowcharts, loops, conditional statements, and core programming logic.",
        },
        {
          title: "Database Management",
          desc: "Database relationships, SQL queries, and data security fundamentals.",
        },
      ],
      featuresTitle: "Why Choose This Course?",
      features: [
        {
          title: "Interactive LIVE Classes",
          desc: "Direct Q&A opportunities with the instructor during sessions.",
        },
        {
          title: "Weekly Support Classes",
          desc: "Dedicated problem-solving sessions for challenging topics.",
        },
        {
          title: "Recordings & Notes",
          desc: "Lifetime access to class recordings and premium study notes.",
        },
        {
          title: "Exam Focused Practice",
          desc: "Intensive board-standard MCQ and CQ practice tests.",
        },
      ],
      promiseTitle: "Our Promise 🛡️",
      promiseText:
        "We want you to start with confidence. If you feel the course isn't the right fit after the first 2 classes, let us know. We will resolve your issue immediately.",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "What if I miss a live class?",
          a: "HD recordings of every class will be provided so you can catch up anytime.",
        },
        {
          q: "Can I ask questions during the class?",
          a: "Yes! Our classes are highly interactive. You can unmute and ask questions directly.",
        },
        {
          q: "How do I enroll?",
          a: "Make the payment, fill out the form below with your details, and our team will add you to the WhatsApp group.",
        },
      ],
      formTitle: "Admission Form",
      paymentStep: "Step 1: Make Your Payment",
      paymentInstruction: "Send 999 Taka to the number below:",
      methods: "Bkash / Nagad / Rocket",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      nameLabel: "Full Name",
      phoneLabel: "WhatsApp Number",
      proofTitle: "Payment Proof",
      senderNumberLabel: "Sender Account Number",
      submitBtn: "Complete Registration",
      submittingBtn: "Processing...",
      whatsappHelp:
        "For any further questions, contact us via the WhatsApp icon below.",
      successMsg: "Registration successful! We will contact you shortly.",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 scroll-smooth relative">
      <a
        href="https://wa.me/8801516501537"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
      {/* --- ADD THE CHATBOT HERE --- */}
      <SimpleChatbot />
      <nav
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div
            className={`bg-white rounded-xl flex items-center justify-center transition-all ${scrolled ? "px-0 py-0" : "px-4 py-2 shadow-lg shadow-white/5"}`}
          >
            <img
              src="/LOGO.png"
              alt="Z Academy"
              className="h-10 md:h-12 object-contain"
            />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={toggleLang}
              className={`px-4 py-1.5 text-sm font-bold rounded-full transition ${scrolled ? "bg-gray-100 text-gray-800 hover:bg-gray-200" : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"}`}
            >
              {lang === "bn" ? "EN" : "বাংলা"}
            </button>
            <a
              href="#register"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition hidden md:block"
            >
              {t.navEnroll}
            </a>
          </div>
        </div>
      </nav>

      <header className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#0B1120]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-[20%] w-[300px] h-[300px] bg-teal-400/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold px-4 py-1.5 rounded-full text-sm mb-6 backdrop-blur-sm">
              ✨ {t.heroBadge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="bg-white/5 text-gray-400 px-5 py-2.5 rounded-lg font-bold text-xl line-through decoration-red-500 decoration-[3px] border border-white/10 backdrop-blur-sm">
                {t.regularPrice}
              </div>
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-2.5 rounded-lg font-extrabold text-3xl shadow-lg shadow-green-500/25">
                {t.offerPrice}
              </div>
            </div>
            <a
              href="#register"
              className="inline-block text-center w-full md:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 border border-blue-400/20"
            >
              {t.ctaMain}
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 transform md:rotate-2 hover:rotate-0 transition-all duration-500 bg-gray-900 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img
              src="/COVER.png"
              alt="Course Cover"
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-[40px] md:h-[60px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.93,121,208.5,110.51C247.46,104.74,285.8,87.75,321.39,56.44Z"
              fill="#F8FAFC"
            ></path>
          </svg>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative z-30">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900 flex items-center">
              <span className="bg-blue-600 w-2 h-8 rounded-full mr-3"></span>
              {t.syllabusTitle}
            </h2>
            <div className="space-y-1">
              {t.syllabus.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  isOpen={openSyllabus === index}
                  onClick={() =>
                    setOpenSyllabus(openSyllabus === index ? null : index)
                  }
                >
                  {item.desc}
                </Accordion>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900 flex items-center">
              <span className="bg-green-500 w-2 h-8 rounded-full mr-3"></span>
              {t.featuresTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-2xl border border-blue-100">
                    {index === 0
                      ? "🎙️"
                      : index === 1
                        ? "👨‍🏫"
                        : index === 2
                          ? "📚"
                          : "🎯"}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">
                🛡️
              </div>
              <h3 className="text-xl font-bold text-indigo-900 mb-3">
                {t.promiseTitle}
              </h3>
              <p className="text-indigo-800/80 leading-relaxed font-medium relative z-10">
                {t.promiseText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">
            {t.faqTitle}
          </h2>
          <div className="space-y-2">
            {t.faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.q}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                {faq.a}
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="py-24 bg-[#0B1120] text-white relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
              {t.formTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100/50 rounded-2xl p-8 h-full flex flex-col justify-center text-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg shadow-blue-500/30">
                    1
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    {t.paymentStep}
                  </h3>
                  <p className="text-gray-600 mb-6 font-medium">
                    {t.paymentInstruction}
                  </p>

                  <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between mb-6">
                    <span className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-wider font-mono pl-4">
                      01815-931153
                    </span>
                    <button
                      onClick={copyNumber}
                      className={`flex items-center gap-2 px-4 py-3 rounded-lg font-bold transition-all ${copied ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                    >
                      {copied ? (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="hidden sm:inline">
                            {t.copiedBtn}
                          </span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="hidden sm:inline">{t.copyBtn}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex justify-center gap-3 mt-auto">
                    <span className="px-4 py-1.5 bg-pink-50 text-pink-700 border border-pink-200 text-sm font-bold rounded-full">
                      bKash
                    </span>
                    <span className="px-4 py-1.5 bg-orange-50 text-orange-700 border border-orange-200 text-sm font-bold rounded-full">
                      Nagad
                    </span>
                    <span className="px-4 py-1.5 bg-purple-50 text-purple-700 border border-purple-200 text-sm font-bold rounded-full">
                      Rocket
                    </span>
                  </div>
                </div>
              </div>

              <div>
                {submitStatus === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-green-50 rounded-2xl border border-green-200">
                    <svg
                      className="w-16 h-16 text-green-500 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      {t.successMsg}
                    </h3>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        {t.nameLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-slate-50"
                        placeholder="e.g. Samiul Hasan"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        {t.phoneLabel} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition bg-slate-50"
                        placeholder="01XXX-XXXXXX"
                        required
                      />
                    </div>

                    <div className="pt-4 mt-2 border-t border-gray-100">
                      <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {t.proofTitle}
                      </h4>

                      <div className="space-y-2">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-1">
                            {t.senderNumberLabel}{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="paymentNumber"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition bg-white text-sm"
                            placeholder="e.g. 017XX-XXXXXX"
                          />
                        </div>
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-red-500 text-sm font-semibold text-center">
                        {errorMessage}
                      </p>
                    )}

                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className={`w-full text-white font-bold py-4 mt-4 rounded-xl text-lg shadow-lg transition-all transform hover:-translate-y-1 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:from-green-600 hover:to-emerald-700"}`}
                    >
                      {isSubmitting ? t.submittingBtn : t.submitBtn}
                    </button>

                    <p className="text-center text-sm font-medium text-gray-500 mt-4 flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      {t.whatsappHelp}
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050810] border-t border-white/5 py-12 text-gray-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-white inline-block px-4 py-2 rounded-2xl mb-6 opacity-90 hover:opacity-100 transition-opacity">
            <img
              src="/LOGO.png"
              alt="Z Academy"
              className="h-10 mx-auto object-contain"
            />
          </div>
          <p className="mb-6 max-w-md mx-auto text-sm">
            Empowering HSC students with modern, interactive, and comprehensive
            ICT education.
          </p>
          <div className="flex items-center justify-center space-x-2 text-xs">
            <span>
              © {new Date().getFullYear()} Z Academy. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
