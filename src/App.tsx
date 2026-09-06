// import { useCountdown } from "./hooks/useCountdown";
// import portraitUrl from "./images/portrait.jpg";
// import churchUrl from "./images/church.jpg";
// import candlesUrl from "./images/candles.jpg";
// import raysUrl from "./images/rays.jpg";
// import sleevaUrl from "./images/sleeva.svg";

// const PORTRAIT_URL = portraitUrl;
// const CHURCH_URL = churchUrl;
// const CANDLES_URL = candlesUrl;
// const RAYS_URL = raysUrl;
// const NEW_EMBLEM_URL = sleevaUrl;
// const ORDINATION_DATE = "2026-12-30T14:00:00";

// // const PORTRAIT_URL = '/images/portrait.jpg';
// // const CHURCH_URL = '/images/church.jpg';
// // const CANDLES_URL = '/images/candles.jpg';
// // const RAYS_URL = '/images/rays.jpg';

// const MAPS_URL =
//   "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyBggAEEUYOTINCAEQLhivARjHARiABDIHCAIQABiABDIICAMQABgWGB4yCggEEAAYChgWGB4yCAgFEAAYFhgeMgoIBhAAGAoYFhgeMgoIBxAAGAoYFhgeMggICBAAGBYYHtIBCTEzNTE3ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ae&sa=X&geocode=KQmk07lEnQg7MZEVx8x0rkgN&daddr=St+.+Joseph+Church,+Punnakunnam,+Kuttanad+Taluk,+Kerala+688504,+India";

// function DoveOrnament() {
//   return (
//     //   <div className="flex items-center justify-center gap-4 py-6">
//     //     <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />

//     //     {/* Golden Sleeba (St. Thomas Cross) SVG */}

//     //     <svg
//     //       width="36"
//     //       height="44"
//     //       viewBox="0 0 100 120"
//     //       fill="currentColor"
//     //       className="text-gold-500 animate-float drop-shadow-[0_2px_8px_rgba(234,179,8,0.3)]"
//     //       aria-label="Sleeba Cross"
//     //     >

//     //       {/* Descending Holy Spirit Dove */}
//     //       <path d="M50 2 c-3 0 -5 2 -5 5 c0 3 2 5 5 5 c3 0 5 -2 5 -5 c0 -3 -2 -5 -5 -5 z M46 6 c-3 -3 -8 -2 -10 1 c3 1 5 2 7 4 z M54 6 c3 -3 8 -2 10 1 c-3 1 -5 2 -7 4 z" />

//     //       {/* Vertical & Horizontal Cross Shafts */}
//     //       <rect x="46" y="22" width="8" height="50" rx="1" />
//     //       <rect x="25" y="38" width="50" height="8" rx="1" />

//     //       {/* Budded / Floral Ends (3 Buds per arm) */}
//     //       {/* Top Arm */}
//     //       <circle cx="50" cy="19" r="3" />
//     //       <circle cx="45" cy="21" r="2.5" />
//     //       <circle cx="55" cy="21" r="2.5" />

//     //       {/* Left Arm */}
//     //       <circle cx="22" cy="42" r="3" />
//     //       <circle cx="24" cy="37" r="2.5" />
//     //       <circle cx="24" cy="47" r="2.5" />

//     //       {/* Right Arm */}
//     //       <circle cx="78" cy="42" r="3" />
//     //       <circle cx="76" cy="37" r="2.5" />
//     //       <circle cx="76" cy="47" r="2.5" />

//     //       {/* Lotus Base */}
//     //       <path d="M28 80 C 38 68, 44 74, 50 74 C 56 74, 62 68, 72 80 C 64 86, 57 82, 50 82 C 43 82, 36 86, 28 80 Z" />
//     //       <path d="M20 86 C 32 76, 41 85, 50 85 C 59 85, 68 76, 80 86 C 70 95, 59 93, 50 93 C 41 93, 30 95, 20 86 Z" />
//     //     </svg>

//     //     <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
//     //   </div>
//     <div className="relative flex justify-center items-center py-4 animate-float">
//       <img
//         src={NEW_EMBLEM_URL} // Replace with the path to the newly generated image
//         alt="Syro-Malabar Sleeva Cross"
//         className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
//       />
//     </div>
//   );
// }

// function SectionLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <p className="text-xs font-sans uppercase tracking-[0.35em] text-gold-600 mb-3">
//       {children}
//     </p>
//   );
// }

// function App() {
//   const { days, hours, minutes, seconds } = useCountdown(ORDINATION_DATE);

//   return (
//     <div className="min-h-screen bg-cream-100 font-sans text-ink-800 overflow-x-hidden">
//       {/* ───────────── HERO ───────────── */}
//       <header className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
//         {/* Background rays image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${RAYS_URL})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-cream-100/60 via-cream-100/70 to-cream-100" />

//         {/* Soft divine glow */}
//         <div className="pointer-events-none absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl animate-glow-pulse" />

//         <div className="relative z-10 px-6 text-center animate-fade-in-up">
//           <div className="mb-6 flex justify-center">
//             {/* <svg
//               width="52"
//               height="36"
//               viewBox="0 0 32 22"
//               fill="none"
//               className="text-gold-500 animate-float"
//             >
//               <path
//                 d="M16 3c-1.2 0-2.2.6-2.8 1.6C12.5 4 11.5 3.6 10.3 3.6c-2.4 0-4.4 1.8-4.4 4.4 0 1 .3 1.9.9 2.6L3.8 12c-.5.3-.2 1.1.3 1 .2 0 .4-.1.6-.2l3-1.8c.6 1.6 2.3 2.8 4.6 2.8 2.8 0 5-2 5-4.8l1.4-2.3c.6.4 1.3.6 2.1.6 1.8 0 3.4-1.2 3.4-3 0-1.2-.6-2.2-1.6-2.8l1.2-2c.3-.5-.3-1-.8-.6-.2.1-.3.2-.4.4l-1.2 2c-.4-.1-.8-.2-1.2-.2-1.8 0-3.4 1.2-3.4 3 0 .2 0 .4.1.6l-1.6 2.4c-.2-.1-.5-.1-.7-.1z"
//                 fill="currentColor"
//               />
//             </svg> */}
//             <div className="relative flex justify-center items-center py-4 animate-float">
//               <img
//                 src={NEW_EMBLEM_URL} // Replace with the path to the newly generated image
//                 alt="Syro-Malabar Sleeva Cross"
//                 className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
//               />
//             </div>
//           </div>
//           <p className="text-sm font-sans uppercase tracking-[0.4em] text-gold-700 mb-6">
//             With Great Joy
//           </p>
//           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-ink-900 leading-tight">
//             You Are Cordially
//             <br />
//             <span className="italic text-gold-700">Invited</span>
//           </h1>
//           <p className="mt-6 max-w-md mx-auto text-base font-sans text-ink-700 leading-relaxed">
//             To celebrate the sacred priestly ordination of a beloved deacon, as
//             he answers God's call to a lifetime of service.
//           </p>
//           <div className="mt-10 animate-float">
//             <svg
//               width="20"
//               height="28"
//               viewBox="0 0 20 28"
//               fill="none"
//               className="mx-auto text-gold-500"
//             >
//               <path
//                 d="M10 0v24M4 18l6 6 6-6"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </header>

//       {/* ───────────── INVITATION CARD ───────────── */}
//       <section className="relative px-5 py-20">
//         <div className="mx-auto max-w-md">
//           {/* Card */}
//           <div className="relative rounded-2xl bg-ivory-50 shadow-2xl shadow-amber-900/10 overflow-hidden animate-fade-in-up">
//             {/* Top decorative border */}
//             <div className="h-2 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-400" />

//             {/* Portrait */}
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory-50 z-10" />
//               <div className="w-full max-w-xs mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-gold-400 shadow-lg">
//                 <img
//                   src={PORTRAIT_URL}
//                   alt="Portrait"
//                   className="w-full h-full object-cover object-top"
//                 />
//               </div>
//               {/* Halo glow behind portrait */}
//               <div className="absolute top-4 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-amber-200/40 blur-2xl" />
//             </div>

//             {/* Card content */}
//             <div className="px-7 pb-9 -mt-12 relative z-20">
//               <div className="text-center">
//                 <SectionLabel>The Ordination Of</SectionLabel>
//                 <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink-900">
//                   Rev. Dn. Noyal B Varghese
//                 </h2>
//                 <DoveOrnament />

//                 {/* Scripture quote */}
//                 <blockquote className="font-serif italic text-lg text-ink-700 leading-relaxed">
//                   &ldquo;You are a priest forever,
//                   <br />
//                   according to the order of Melchizedek.&rdquo;
//                 </blockquote>
//                 <cite className="block mt-2 text-sm font-sans text-gold-600 not-italic">
//                   — Psalm 110:4
//                 </cite>

//                 <DoveOrnament />

//                 {/* Invitation message */}
//                 <p className="font-sans text-sm text-ink-700 leading-relaxed">
//                   With hearts full of gratitude to the Almighty, the family of
//                   Mr. &amp; Mrs. Baby Varghese joyfully invites you to share in
//                   the sacred celebration as their son is ordained into the holy
//                   priesthood.
//                 </p>
//               </div>

//               {/* Date & Time tiles */}
//               <div className="mt-8 grid grid-cols-2 gap-3">
//                 <div className="rounded-xl bg-cream-200/70 border border-gold-400/30 px-4 py-5 text-center">
//                   <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-700 mb-1">
//                     Date
//                   </p>
//                   <p className="font-serif text-lg font-semibold text-ink-900">
//                     December 30
//                   </p>
//                   <p className="text-xs font-sans text-ink-700">
//                     2026 · Wednesday
//                   </p>
//                 </div>
//                 <div className="rounded-xl bg-cream-200/70 border border-gold-400/30 px-4 py-5 text-center">
//                   <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-700 mb-1">
//                     Time
//                   </p>
//                   <p className="font-serif text-lg font-semibold text-ink-900">
//                     9:00 AM
//                   </p>
//                   <p className="text-xs font-sans text-ink-700">Holy Qurbana</p>
//                 </div>
//               </div>

//               {/* Church name & address */}
//               <div className="mt-5 rounded-xl bg-gradient-to-br from-amber-50 to-cream-100 border border-gold-400/20 px-5 py-5 text-center">
//                 <p className="font-serif text-lg font-semibold text-ink-900">
//                   St. Joseph 
//                   <br />
//                   Syro Malabar Church
//                 </p>
//                 <p className="mt-1 text-xs font-sans text-ink-700 leading-relaxed">
//                   Punnakunnam, Alappuzha
//                   <br />
//                   Kerala 688504, India
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ───────────── ORDER OF THE DAY ───────────── */}
//       <section className="relative px-5 py-16 bg-ivory-100">
//         <div className="mx-auto max-w-md text-center">
//           <SectionLabel>Order of the Day</SectionLabel>
//           <h3 className="font-serif text-3xl font-semibold text-ink-900 mb-2">
//             The Celebration
//           </h3>
//           <DoveOrnament />

//           {/* Timeline items */}
//           <div className="space-y-6 text-left">
//             {[
//               {
//                 time: "2:00 PM",
//                 title: "Assembly & Prayer",
//                 desc: "Guests gather in the church as the choir sings preparatory hymns.",
//               },
//               {
//                 time: "3:00 PM",
//                 title: "Holy Qurbana & Ordination",
//                 desc: "The Most Rev. Archbishop celebrates the Holy Qurbana with the Rite of Ordination.",
//               },
//               {
//                 time: "5:30 PM",
//                 title: "First Blessing",
//                 desc: "The newly ordained priest offers his first priestly blessing to the congregation.",
//               },
//               {
//                 time: "6:00 PM",
//                 title: "Reception",
//                 desc: "Join us for a celebratory reception in the parish hall with light refreshments.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex gap-4 items-start rounded-xl bg-ivory-50 border border-gold-400/20 px-5 py-4 shadow-sm"
//               >
//                 <div className="flex-shrink-0 text-center min-w-[60px]">
//                   <p className="font-serif text-sm font-semibold text-gold-700">
//                     {item.time}
//                   </p>
//                 </div>
//                 <div className="border-l border-gold-400/30 pl-4">
//                   <p className="font-serif text-base font-semibold text-ink-900">
//                     {item.title}
//                   </p>
//                   <p className="mt-1 text-xs font-sans text-ink-700 leading-relaxed">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ───────────── COUNTDOWN ───────────── */}
//       <section className="relative px-5 py-20 overflow-hidden">
//         {/* Candles background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${CANDLES_URL})` }}
//         />
//         <div className="absolute inset-0 bg-ink-900/80" />
//         <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/70 to-ink-900/90" />

//         <div className="relative z-10 mx-auto max-w-md text-center">
//           <SectionLabel>
//             <span className="text-gold-400">Counting Down</span>
//           </SectionLabel>
//           <h3 className="font-serif text-3xl font-semibold text-cream-100 mb-2">
//             The Sacred Day
//           </h3>
//           <p className="font-sans text-sm text-cream-300/80 mb-8">
//             Every moment brings us closer to the celebration
//           </p>

//           {/* Timer grid */}
//           <div className="grid grid-cols-4 gap-3">
//             {[
//               { label: "Days", value: days },
//               { label: "Hours", value: hours },
//               { label: "Minutes", value: minutes },
//               { label: "Seconds", value: seconds },
//             ].map((unit) => (
//               <div
//                 key={unit.label}
//                 className="rounded-xl bg-cream-50/10 backdrop-blur-sm border border-gold-400/30 px-2 py-5"
//               >
//                 <p className="font-serif text-3xl sm:text-4xl font-semibold text-gold-400 tabular-nums">
//                   {String(unit.value).padStart(2, "0")}
//                 </p>
//                 <p className="mt-1 text-[10px] font-sans uppercase tracking-[0.15em] text-cream-300/70">
//                   {unit.label}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <p className="mt-8 font-serif italic text-lg text-cream-200">
//             December 30, 2026
//           </p>
//         </div>
//       </section>

//       {/* ───────────── THE CHURCH ───────────── */}
//       <section className="relative px-5 py-16 bg-cream-100">
//         <div className="mx-auto max-w-md text-center">
//           <SectionLabel>The Church</SectionLabel>
//           <h3 className="font-serif text-3xl font-semibold text-ink-900 mb-2">
//             St. Joseph Syro Malabar Church
//           </h3>
//           <DoveOrnament />

//           {/* Church photo */}
//           <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-amber-900/10 mb-6">
//             <div className="w-full max-w-xs mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-gold-400 shadow-lg">
//               <img
//                 src={CHURCH_URL}
//                 alt="St. Joseph Syro Malabar Church"
//                 className="w-full h-56 object-cover"
//               />
//             </div>

//             <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
//             <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
//               <p className="font-serif text-lg font-semibold text-cream-100">
//                 St. Joseph Syro Malabar Church
//               </p>
//               <p className="text-xs font-sans text-cream-300/90 mt-1">
//                 Punnakunnam, Alappuzha · Kerala 688504
//               </p>
//             </div>
//           </div>

//           {/* Maps button */}
//           <a
//             href={MAPS_URL}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 px-7 py-3.5 font-sans text-sm font-medium text-ink-900 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
//           >
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 24 24"
//               fill="none"
//               className="text-ink-900"
//             >
//               <path
//                 d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
//                 fill="currentColor"
//               />
//             </svg>
//             Open in Google Maps
//           </a>
//         </div>
//       </section>

//       {/* ───────────── CLOSING BLESSING ───────────── */}
//       <footer className="relative px-5 py-20 bg-gradient-to-b from-cream-100 to-ivory-200">
//         <div className="mx-auto max-w-md text-center">
//           <div className="flex justify-center mb-6">
//             {/* <svg
//               width="48"
//               height="33"
//               viewBox="0 0 32 22"
//               fill="none"
//               className="text-gold-500 animate-float"
//             >
//               <path
//                 d="M16 3c-1.2 0-2.2.6-2.8 1.6C12.5 4 11.5 3.6 10.3 3.6c-2.4 0-4.4 1.8-4.4 4.4 0 1 .3 1.9.9 2.6L3.8 12c-.5.3-.2 1.1.3 1 .2 0 .4-.1.6-.2l3-1.8c.6 1.6 2.3 2.8 4.6 2.8 2.8 0 5-2 5-4.8l1.4-2.3c.6.4 1.3.6 2.1.6 1.8 0 3.4-1.2 3.4-3 0-1.2-.6-2.2-1.6-2.8l1.2-2c.3-.5-.3-1-.8-.6-.2.1-.3.2-.4.4l-1.2 2c-.4-.1-.8-.2-1.2-.2-1.8 0-3.4 1.2-3.4 3 0 .2 0 .4.1.6l-1.6 2.4c-.2-.1-.5-.1-.7-.1z"
//                 fill="currentColor"
//                 opacity="0.85"
//               />
//             </svg> */}
//             <div className="relative flex justify-center items-center py-4 animate-float">
//               <img
//                 src={NEW_EMBLEM_URL} // Replace with the path to the newly generated image
//                 alt="Syro-Malabar Sleeva Cross"
//                 className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
//               />
//             </div>
//           </div>

//           <SectionLabel>A Blessing</SectionLabel>
//           <blockquote className="font-serif italic text-xl text-ink-800 leading-relaxed">
//             &ldquo;The Lord bless you and keep you;
//             <br />
//             the Lord make His face shine upon you,
//             <br />
//             and be gracious to you;
//             <br />
//             the Lord lift up His countenance upon you,
//             <br />
//             and give you peace.&rdquo;
//           </blockquote>
//           <cite className="block mt-3 text-sm font-sans text-gold-600 not-italic">
//             — Numbers 6:24–26
//           </cite>

//           <DoveOrnament />

//           <p className="font-sans text-sm text-ink-700 leading-relaxed">
//             With love and prayers,
//           </p>
//           <p className="mt-3 font-serif text-xl font-semibold text-ink-900">
//             The Thanniyath Family
//           </p>
//           <p className="mt-1 font-sans text-sm text-ink-700">
//             &amp; the Parish of St. Jospeh's
//           </p>

//           <div className="mt-12">
//             <div className="mx-auto h-px w-24 bg-gold-400/40" />
//             <p className="mt-6 text-[11px] font-sans uppercase tracking-[0.3em] text-ink-700/60">
//               Soli Deo Gloria
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { useCountdown } from "./hooks/useCountdown";
import { translations, type Language } from "./translations";
import portraitUrl from "./images/portrait.jpg";
import churchUrl from "./images/church.jpg";
import candlesUrl from "./images/candles.jpg";
import raysUrl from "./images/rays.jpg";
import sleevaUrl from "./images/sleeva.svg";

const PORTRAIT_URL = portraitUrl;
const CHURCH_URL = churchUrl;
const CANDLES_URL = candlesUrl;
const RAYS_URL = raysUrl;
const NEW_EMBLEM_URL = sleevaUrl;
const ORDINATION_DATE = "2026-12-30T14:00:00";

const MAPS_URL =
  "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyBggAEEUYOTINCAEQLhivARjHARiABDIHCAIQABiABDIICAMQABgWGB4yCggEEAAYChgWGB4yCAgFEAAYFhgeMgoIBhAAGAoYFhgeMgoIBxAAGAoYFhgeMggICBAAGBYYHtIBCTEzNTE3ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=ae&sa=X&geocode=KQmk07lEnQg7MZEVx8x0rkgN&daddr=St+.+Joseph+Church,+Punnakunnam,+Kuttanad+Taluk,+Kerala+688504,+India";

function DoveOrnament() {
  return (
    <div className="relative flex justify-center items-center py-4 animate-float">
      <img
        src={NEW_EMBLEM_URL}
        alt="Syro-Malabar Sleeva Cross"
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
      />
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-sans uppercase tracking-[0.35em] text-gold-600 mb-3">
      {children}
    </p>
  );
}

function App() {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];
  const { days, hours, minutes, seconds } = useCountdown(ORDINATION_DATE);

  return (
    <div className="min-h-screen bg-cream-100 font-sans text-ink-800 overflow-x-hidden">
      {/* Language Switcher Bar */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-ivory-50/90 backdrop-blur-md p-1.5 rounded-full border border-gold-400/30 shadow-md">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            lang === "en"
              ? "bg-gold-500 text-ink-900 shadow-sm"
              : "text-ink-700 hover:text-ink-900"
          }`}
        >
          {t.toggle.en}
        </button>
        <button
          onClick={() => setLang("ml")}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            lang === "ml"
              ? "bg-gold-500 text-ink-900 shadow-sm"
              : "text-ink-700 hover:text-ink-900"
          }`}
        >
          {t.toggle.ml}
        </button>
      </div>

      {/* ───────────── HERO ───────────── */}
      <header className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RAYS_URL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-100/60 via-cream-100/70 to-cream-100" />

        <div className="pointer-events-none absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl animate-glow-pulse" />

        <div className="relative z-10 px-6 text-center animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="relative flex justify-center items-center py-4 animate-float">
              <img
                src={NEW_EMBLEM_URL}
                alt="Syro-Malabar Sleeva Cross"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
              />
            </div>
          </div>
          <p className="text-sm font-sans uppercase tracking-[0.4em] text-gold-700 mb-6">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-ink-900 leading-tight">
            {t.hero.titleTop} {t.hero.titleBottom}
          </h1>
          <p className="mt-6 max-w-md mx-auto text-base font-sans text-ink-700 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 animate-float">
            <svg
              width="20"
              height="28"
              viewBox="0 0 20 28"
              fill="none"
              className="mx-auto text-gold-500"
            >
              <path
                d="M10 0v24M4 18l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-xs text-gold-600 mt-2">{t.hero.scrollHint}</p>
          </div>
        </div>
      </header>

      {/* ───────────── INVITATION CARD ───────────── */}
      <section className="relative px-5 py-20">
        <div className="mx-auto max-w-md">
          <div className="relative rounded-2xl bg-ivory-50 shadow-2xl shadow-amber-900/10 overflow-hidden animate-fade-in-up">
            <div className="h-2 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-400" />

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory-50 z-10" />
              <div className="w-full max-w-xs mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-gold-400 shadow-lg">
                <img
                  src={PORTRAIT_URL}
                  alt="Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-amber-200/40 blur-2xl" />
            </div>

            <div className="px-7 pb-9 -mt-12 relative z-20">
              <div className="text-center">
                <SectionLabel>{t.card.label}</SectionLabel>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-ink-900">
                  {t.card.name}
                </h2>
                <DoveOrnament />

                <blockquote className="font-serif italic text-lg text-ink-700 leading-relaxed">
                  {t.card.scripture}
                </blockquote>
                <cite className="block mt-2 text-sm font-sans text-gold-600 not-italic">
                  {t.card.scriptureRef}
                </cite>

                <DoveOrnament />

                <p className="font-sans text-sm text-ink-700 leading-relaxed">
                  {t.card.message}
                </p>
              </div>

              {/* Date & Time tiles */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-cream-200/70 border border-gold-400/30 px-4 py-5 text-center">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-700 mb-1">
                    {t.card.dateLabel}
                  </p>
                  <p className="font-serif text-lg font-semibold text-ink-900">
                    {t.card.dateValue}
                  </p>
                  <p className="text-xs font-sans text-ink-700">
                    {t.card.dateSub}
                  </p>
                </div>
                <div className="rounded-xl bg-cream-200/70 border border-gold-400/30 px-4 py-5 text-center">
                  <p className="text-xs font-sans uppercase tracking-[0.2em] text-gold-700 mb-1">
                    {t.card.timeLabel}
                  </p>
                  <p className="font-serif text-lg font-semibold text-ink-900">
                    {t.card.timeValue}
                  </p>
                  <p className="text-xs font-sans text-ink-700">
                    {t.card.timeSub}
                  </p>
                </div>
              </div>

              {/* Church name & address */}
              <div className="mt-5 rounded-xl bg-gradient-to-br from-amber-50 to-cream-100 border border-gold-400/20 px-5 py-5 text-center">
                <p className="font-serif text-lg font-semibold text-ink-900">
                  {t.card.churchName}
                </p>
                <p className="mt-1 text-xs font-sans text-ink-700 leading-relaxed">
                  {t.card.churchAddr1}
                  <br />
                  {t.card.churchAddr2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── ORDER OF THE DAY ───────────── */}
      <section className="relative px-5 py-16 bg-ivory-100">
        <div className="mx-auto max-w-md text-center">
          <SectionLabel>{t.order.label}</SectionLabel>
          <h3 className="font-serif text-3xl font-semibold text-ink-900 mb-2">
            {t.order.title}
          </h3>
          <DoveOrnament />

          <div className="space-y-6 text-left">
            {t.order.items.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start rounded-xl bg-ivory-50 border border-gold-400/20 px-5 py-4 shadow-sm"
              >
                <div className="flex-shrink-0 text-center min-w-[60px]">
                  <p className="font-serif text-sm font-semibold text-gold-700">
                    {item.time}
                  </p>
                </div>
                <div className="border-l border-gold-400/30 pl-4">
                  <p className="font-serif text-base font-semibold text-ink-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs font-sans text-ink-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── COUNTDOWN ───────────── */}
      <section className="relative px-5 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CANDLES_URL})` }}
        />
        <div className="absolute inset-0 bg-ink-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/70 to-ink-900/90" />

        <div className="relative z-10 mx-auto max-w-md text-center">
          <SectionLabel>
            <span className="text-gold-400">{t.countdown.label}</span>
          </SectionLabel>
          <h3 className="font-serif text-3xl font-semibold text-cream-100 mb-2">
            {t.countdown.title}
          </h3>
          <p className="font-sans text-sm text-cream-300/80 mb-8">
            {t.countdown.subtitle}
          </p>

          <div className="grid grid-cols-4 gap-3">
            {[
              { label: t.countdown.days, value: days },
              { label: t.countdown.hours, value: hours },
              { label: t.countdown.minutes, value: minutes },
              { label: t.countdown.seconds, value: seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="rounded-xl bg-cream-50/10 backdrop-blur-sm border border-gold-400/30 px-2 py-5"
              >
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-gold-400 tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </p>
                <p className="mt-1 text-[10px] font-sans uppercase tracking-[0.15em] text-cream-300/70">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif italic text-lg text-cream-200">
            {t.countdown.dateText}
          </p>
        </div>
      </section>

      {/* ───────────── THE CHURCH ───────────── */}
      <section className="relative px-5 py-16 bg-cream-100">
        <div className="mx-auto max-w-md text-center">
          <SectionLabel>{t.church.label}</SectionLabel>
          <h3 className="font-serif text-3xl font-semibold text-ink-900 mb-2">
            {t.church.title}
          </h3>
          <DoveOrnament />

          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-amber-900/10 mb-6">
            <div className="w-full max-w-xs mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-gold-400 shadow-lg">
              <img
                src={CHURCH_URL}
                alt={t.church.photoLabel}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
              <p className="font-serif text-lg font-semibold text-cream-100">
                {t.church.photoLabel}
              </p>
              <p className="text-xs font-sans text-cream-300/90 mt-1">
                {t.church.photoAddr}
              </p>
            </div>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 px-7 py-3.5 font-sans text-sm font-medium text-ink-900 shadow-lg shadow-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-ink-900"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                fill="currentColor"
              />
            </svg>
            {t.church.mapsBtn}
          </a>
        </div>
      </section>

      {/* ───────────── CLOSING BLESSING ───────────── */}
      <footer className="relative px-5 py-20 bg-gradient-to-b from-cream-100 to-ivory-200">
        <div className="mx-auto max-w-md text-center">
          <div className="flex justify-center mb-6">
            <div className="relative flex justify-center items-center py-4 animate-float">
              <img
                src={NEW_EMBLEM_URL}
                alt="Syro-Malabar Sleeva Cross"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
              />
            </div>
          </div>

          <SectionLabel>{t.blessing.label}</SectionLabel>
          <blockquote className="font-serif italic text-xl text-ink-800 leading-relaxed">
            {t.blessing.text}
          </blockquote>
          <cite className="block mt-3 text-sm font-sans text-gold-600 not-italic">
            {t.blessing.ref}
          </cite>

          <DoveOrnament />

          <p className="font-sans text-sm text-ink-700 leading-relaxed">
            {t.blessing.closing}
          </p>
          <p className="mt-3 font-serif text-xl font-semibold text-ink-900">
            {t.blessing.family}
          </p>
          <p className="mt-1 font-sans text-sm text-ink-700">
            {t.blessing.parish}
          </p>

          <div className="mt-12">
            <div className="mx-auto h-px w-24 bg-gold-400/40" />
            <p className="mt-6 text-[11px] font-sans uppercase tracking-[0.3em] text-ink-700/60">
              {t.blessing.soliDeo}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;