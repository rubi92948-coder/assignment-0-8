"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function WhyChooseUs() {
  return (
    <div style={{ padding: "40px", background: "#faf5ff" }}>
      
      {/* TITLE */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "32px",
          fontWeight: "900",
          color: "#5b21b6",
          letterSpacing: "1px",
        }}
      >
        Why Choose Us?
      </h2>

      {/* SWIPER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
  <div style={cardStyle}>🌍 Access Books Anytime, Anywhere</div>
</SwiperSlide>

<SwiperSlide>
  <div style={cardStyle}>🎯 Personalized Reading Experience</div>
</SwiperSlide>

<SwiperSlide>
  <div style={cardStyle}>🔔 Instant Borrow Confirmation System</div>
</SwiperSlide>

<SwiperSlide>
  <div style={cardStyle}>📊 Smart Book Tracking Dashboard</div>
</SwiperSlide>

<SwiperSlide>
  <div style={cardStyle}>💡 Modern UI with Smooth Animations</div>
</SwiperSlide>

<SwiperSlide>
  <div style={cardStyle}>🤝 Trusted by Book Lovers Community</div>
</SwiperSlide>

        <SwiperSlide>
          <div style={cardStyle}>🔒 Secure Authentication (BetterAuth)</div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={cardStyle}>📱 Fully Mobile Responsive Design</div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={cardStyle}>⭐ Top Rated Books Collection</div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={cardStyle}>🔍 Easy Search & Filter System</div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={cardStyle}>📦 Hassle-Free Borrow System</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

/* CARD STYLE */
const cardStyle = {
  padding: "45px",
  textAlign: "center",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #ffffff, #f3e8ff)",
  fontSize: "20px",
  fontWeight: "700",
  color: "#4c1d95",
  boxShadow: "0 8px 20px rgba(91, 33, 182, 0.15)",
  border: "1px solid #e9d5ff",
};