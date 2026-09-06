export type Language = 'en' | 'ml';

export type TimelineItem = {
  time: string;
  title: string;
  desc: string;
};

export type TranslationSet = {
  hero: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    scrollHint: string;
  };
  card: {
    label: string;
    name: string;
    scripture: string;
    scriptureRef: string;
    message: string;
    dateLabel: string;
    dateValue: string;
    dateSub: string;
    timeLabel: string;
    timeValue: string;
    timeSub: string;
    churchName: string;
    churchAddr1: string;
    churchAddr2: string;
  };
  order: {
    label: string;
    title: string;
    items: TimelineItem[];
  };
  countdown: {
    label: string;
    title: string;
    subtitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    dateText: string;
  };
  church: {
    label: string;
    title: string;
    photoLabel: string;
    photoAddr: string;
    mapsBtn: string;
  };
  blessing: {
    label: string;
    text: string;
    ref: string;
    closing: string;
    family: string;
    parish: string;
    soliDeo: string;
  };
  toggle: {
    en: string;
    ml: string;
  };
};

export const translations: Record<Language, TranslationSet> = {
  en: {
    hero: {
      eyebrow: 'With Great Joy',
      titleTop: 'You Are Cordially',
      titleBottom: 'Invited',
      subtitle:
        "To celebrate the sacred priestly ordination of a beloved deacon, as he answers God's call to a lifetime of service.",
      scrollHint: 'Scroll to explore',
    },
    card: {
      label: 'The Ordination Of',
      name: 'Rev. Dn. Noyal B Varghese',
      scripture: '"You are a priest forever, according to the order of Melchizedek."',
      scriptureRef: '— Psalm 110:4',
      message:
        'With hearts full of gratitude to the Almighty, the family of Mr. & Mrs. Baby Varghese joyfully invites you to share in the sacred celebration as their son is ordained into the holy priesthood.',
      dateLabel: 'Date',
      dateValue: 'December 30',
      dateSub: '2026 · Wednesday',
      timeLabel: 'Time',
      timeValue: '9:00 AM',
      timeSub: 'Holy Qurbana',
      churchName: 'St. Joseph Syro Malabar Church',
      churchAddr1: 'Punnakunnam, Alappuzha',
      churchAddr2: 'Kerala 688504, India',
    },
    order: {
      label: 'Order of the Day',
      title: 'The Celebration',
      items: [
        {
          time: '2:00 PM',
          title: 'Assembly & Prayer',
          desc: 'Guests gather in the church as the choir sings preparatory hymns.',
        },
        {
          time: '3:00 PM',
          title: 'Holy Qurbana & Ordination',
          desc: 'The Most Rev. Archbishop celebrates the Holy Qurbana with the Rite of Ordination.',
        },
        {
          time: '5:30 PM',
          title: 'First Blessing',
          desc: 'The newly ordained priest offers his first priestly blessing to the congregation.',
        },
        {
          time: '6:00 PM',
          title: 'Reception',
          desc: 'Join us for a celebratory reception in the parish hall with light refreshments.',
        },
      ],
    },
    countdown: {
      label: 'Counting Down',
      title: 'The Sacred Day',
      subtitle: 'Every moment brings us closer to the celebration',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      dateText: 'December 30, 2026',
    },
    church: {
      label: 'The Church',
      title: 'St. Joseph Syro Malabar Church',
      photoLabel: 'St. Joseph Syro Malabar Church',
      photoAddr: 'Punnakunnam, Alappuzha · Kerala 688504',
      mapsBtn: 'Open in Google Maps',
    },
    blessing: {
      label: 'A Blessing',
      text: '"The Lord bless you and keep you; the Lord make His face shine upon you, and be gracious to you; the Lord lift up His countenance upon you, and give you peace."',
      ref: '— Numbers 6:24–26',
      closing: 'With love and prayers,',
      family: 'The Thanniyath Family',
      parish: "& the Parish of St. Joseph's",
      soliDeo: 'Soli Deo Gloria',
    },
    toggle: {
      en: 'EN',
      ml: 'ML',
    },
  },
  ml: {
    hero: {
      eyebrow: 'അത്യുന്നതമായ ആനന്ദത്തോടെ',
      titleTop: 'നിങ്ങളെ സ്നേഹപൂർവ്വം',
      titleBottom: 'ക്ഷണിക്കുന്നു',
      subtitle:
        'ദൈവിക വിളിക്കുത്തരം നൽകി ജീവിതകാലം മുഴുവൻ ശുശ്രൂഷയ്ക്കായി സമർപ്പിക്കുന്ന പ്രിയപ്പെട്ട ശെമ്മാശന്റെ പൗരോഹിത്യ സ്വീകരണ ശുശ്രൂഷയിലേക്ക് ക്ഷണിക്കുന്നു.',
      scrollHint: 'താഴേക്ക് സ്ക്രോൾ ചെയ്യുക',
    },
    card: {
      label: 'പൗരോഹിത്യ സ്വീകരണം',
      name: 'റവ. ഡീക്കൻ നോയൽ ബി വർഗീസ്',
      scripture: '"നീ എന്നേക്കും പുരോഹിതനാകുന്നു, മെൽക്കീസെദെക്കിന്റെ ക്രമപ്രകാരം."',
      scriptureRef: '— സങ്കീർത്തനങ്ങൾ 110:4',
      message:
        'സർവ്വശക്തനായ ദൈവത്തിന് കൃതജ്ഞത അർപ്പിച്ചുകൊണ്ട്, തങ്ങളുടെ മകൻ വിശുദ്ധ പൗരോഹിത്യത്തിലേക്ക് പ്രവേശിക്കുന്ന വിശുദ്ധ ആഘോഷത്തിൽ പങ്കുചേരാൻ ശ്രീ. ബേബി വർഗീസിന്റെയും കുടുംബത്തിന്റെയും നാമത്തിൽ നിങ്ങളെ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു.',
      dateLabel: 'തീയതി',
      dateValue: 'ഡിസംബർ 30',
      dateSub: '2026 · ബുധനാഴ്ച',
      timeLabel: 'സമയം',
      timeValue: '9:00 AM',
      timeSub: 'വിശുദ്ധ കുർബാന',
      churchName: 'സെന്റ് ജോസഫ് സിറോ മലബാർ ചർച്ച്',
      churchAddr1: 'പുന്നക്കുന്നം, ആലപ്പുഴ',
      churchAddr2: 'കേരളം 688504, ഇന്ത്യ',
    },
    order: {
      label: 'പരിപാടിക്രമം',
      title: 'ആഘോഷം',
      items: [
        {
          time: '2:00 PM',
          title: 'സമാഗമവും പ്രാർത്ഥനയും',
          desc: 'വിശ്വാസികൾ പള്ളിയിൽ ഒരുമിച്ചുകൂടുന്നു; ഗായകസംഘം ഒരുക്കൽ ഗാനങ്ങൾ പാടുന്നു.',
        },
        {
          time: '3:00 PM',
          title: 'വിശുദ്ധ കുർബാനയും അഭിഷേകവും',
          desc: 'പിതാവിന്റെ മുഖ്യകാർമ്മികത്വത്തിൽ വിശുദ്ധ കുർബാനയർപ്പിച്ച് അഭിഷേക ചടങ്ങ് നിർവഹിക്കുന്നു.',
        },
        {
          time: '5:30 PM',
          title: 'ആദ്യത്തെ അനുഗ്രഹം',
          desc: 'പുതുതായി അഭിഷിക്തനായ വൈദികൻ പ്രഥമ ആശീർവാദം നൽകുന്നു.',
        },
        {
          time: '6:00 PM',
          title: 'സ്വീകരണം',
          desc: 'പള്ളി ഹാളിൽ നടക്കുന്ന സ്നേഹവിരുന്നിലേക്ക് എല്ലാവരെയും ക്ഷണിക്കുന്നു.',
        },
      ],
    },
    countdown: {
      label: 'എണ്ണിക്കൊണ്ടിരിക്കുന്നു',
      title: 'വിശുദ്ധ ദിനം',
      subtitle: 'ഓരോ നിമിഷവും ആഘോഷത്തിലേക്ക് നമ്മെ അടുപ്പിക്കുന്നു',
      days: 'ദിവസം',
      hours: 'മണിക്കൂർ',
      minutes: 'മിനിറ്റ്',
      seconds: 'സെക്കൻഡ്',
      dateText: 'ഡിസംബർ 30, 2026',
    },
    church: {
      label: 'ദേവാലയം',
      title: 'സെന്റ് ജോസഫ് സിറോ മലബാർ ചർച്ച്',
      photoLabel: 'സെന്റ് ജോസഫ് സിറോ മലബാർ ചർച്ച്',
      photoAddr: 'പുന്നക്കുന്നം, ആലപ്പുഴ · കേരളം 688504',
      mapsBtn: 'ഗൂഗിൾ മാപ്പിൽ തുറക്കുക',
    },
    blessing: {
      label: 'ആശീർവാദം',
      text: '"കർത്താവ് നിന്നെ അനുഗ്രഹിക്കട്ടെ, നിന്നെ കാത്തുസൂക്ഷിക്കട്ടെ; കർത്താവ് തന്റെ മുഖം നിന്നിൽ പ്രകാശിപ്പിക്കട്ടെ, നിന്നോട് കൃപ കാണിക്കട്ടെ; കർത്താവ് തന്റെ മുഖം നിന്നിലേക്ക് തിരിക്കട്ടെ, നിനക്ക് സമാധാനം നൽകട്ടെ."',
      ref: '— സംഖ്യാപുസ്തകം 6:24–26',
      closing: 'സ്നേഹത്തോടും പ്രാർത്ഥനയോടും കൂടെ,',
      family: 'തന്നിയത്ത് കുടുംബം',
      parish: 'സെന്റ് ജോസഫ് ഇടവക സമൂഹവും',
      soliDeo: 'ദൈവത്തിന് മാത്രം മഹത്വം',
    },
    toggle: {
      en: 'EN',
      ml: 'ML',
    },
  },
};