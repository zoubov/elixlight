// ================================================================
//  TRANSLATIONS
//  All content lives here. Design lives in CSS.
//  Add a new language by adding a key to this object.
// ================================================================
const i18n = {
  en: {
    meta: { title: "ELIXLIGHT — Designing Light for Your True Nature", lang: "en" },
    nav: {
      tagline: "designing light for your true nature",
      science: "the science →",
      back: "← back"
    },
    room: {
      states: [
        {t:"06:00", s:"dawn — cortisol rising",       b:"#1a1008", d:"#e8822a", g:"0 0 22px 9px rgba(220,110,30,0.55)"},
        {t:"09:00", s:"morning — full activation",    b:"#221a0e", d:"#f5c060", g:"0 0 26px 11px rgba(240,180,60,0.45)"},
        {t:"13:00", s:"afternoon — sustained focus",  b:"#1e1810", d:"#f0d090", g:"0 0 30px 13px rgba(240,210,130,0.35)"},
        {t:"19:00", s:"evening — melatonin begins",   b:"#180e06", d:"#d05820", g:"0 0 18px 7px rgba(200,80,20,0.5)"},
        {t:"22:00", s:"pre-sleep — deep restoration",b:"#100804", d:"#a03010", g:"0 0 12px 4px rgba(160,40,10,0.4)"},
        {t:"00:00", s:"sleep — complete darkness",    b:"#080604", d:"#1a0e06", g:"none"},
      ]
    },
    hero: {
      cat1Label: "FOR HOMES AND HOTELS →",
      cat2Label: "FOR ARCHITECTURE →",
      services: [
        {
          name: "reset your sleep in 48 hours",
          price: "€297",
          desc: "Send photos of your guest rooms or bedroom. Get exact bulb and positioning recommendations for evening and morning — implemented by your team in an afternoon. No renovation required.",
          contact: "hello@elixlight.com →"
        },
        {
          name: "understand what your space is doing to you",
          price: "from €3,500",
          desc: "Remote assessment of your current lighting. What's working biologically, what's undermining your experience, and a ranked list of improvements by impact — before you invest in changes.",
          contact: "hello@elixlight.com →"
        },
        {
          name: "give your design a biological intent",
          price: "from €8,000",
          desc: "Before your lighting designer starts specifying, we define what each zone should do hormonally — which state, at which hour, for which user. Your designer receives a biological target instead of guessing.",
          contact: "hello@elixlight.com →"
        },
        {
          name: "validate your specs before you build",
          price: "from €4,000",
          desc: "Your lighting designer has drafted specs. We review them against biological targets before you order fixtures. The last checkpoint before it's built into the walls.",
          contact: "hello@elixlight.com →"
        }
      ]
    },
    qa: {
      label: "TRUE OR FALSE?",
      revealBtn: "Is this true? →",
      nextBtn: "Try another →",
      sciBtn: "Why does this happen? The science →",
      questions: [
        {b:'"Dimming the lights is enough to wind down before sleep."', a:"Dimming reduces intensity, not biology. A dimmed 4000K light still floods your retina with blue wavelengths — the exact signal that suppresses melatonin. You're turning down the volume, but the wrong song is still playing."},
        {b:'"Your phone is the main reason you can\'t sleep."', a:"Your ceiling light exposes you to more melatonin-suppressing light than your screen. Screens get the blame because they're visible and easy to target. The overhead fixture that's been running for four hours does far more biological damage — and nobody talks about it."},
        {b:'"Warm light is always relaxing."', a:"Not if it's above you. An amber ceiling light at 10 PM still sends a midday signal because of its position, not just its color. Direction is as legible to your biology as spectrum. The same bulb, moved below eye level, tells a completely different story."},
        {b:'"You can catch up on sleep over the weekend."', a:"Sleeping in on Sunday shifts your circadian clock later — which is why Monday morning feels like jet lag. The problem isn't just how much you sleep. It's when. And when is governed by light."},
        {b:'"Bright morning light is harsh and uncomfortable."', a:"That discomfort is your cortisol responding exactly as designed. Bright cool light in the morning is the strongest signal your body has to lock your clock, sharpen focus, and start the 16-hour cascade that ends in quality sleep. Softening your morning light softens your entire day."},
        {b:'"A dark bedroom just means turning the lights off."', a:"Even 5 lux of light through closed eyelids — a hallway light under the door, a standby LED, thin curtains — measurably suppresses melatonin. The sleeping body is not less sensitive to light. In some ways, it's more."},
        {b:'"Your body adapts to artificial light over time."', a:"It doesn't. Your circadian clock responds to light input the same way it did before electricity existed. There is no adaptation — only constant biological response to whatever light you give it. The question is whether that response is working for you or against you."},
        {b:'"Blue light blocking glasses solve the evening light problem."', a:"They filter one variable while the others run unchecked. Intensity, direction, and duration of evening light each suppress melatonin independently of spectrum. Blue light glasses under a bright overhead fixture still leave most of the biological problem intact."},
      ]
    },
    science: {
      title: "THE SCIENCE",
      paragraphs: [
        "You spend roughly 90% of your waking hours indoors. This is a recent development, in evolutionary terms. Your biology hasn't noticed.",
        "Your body still expects the same light it evolved under: a full-spectrum sun that rises, peaks, and sets. Bright and cool at noon. Warm and low at dusk. Absent at night. Instead, it receives ceiling lights running at the same intensity from 8 AM to 11 PM. Bathrooms built for morning, used at midnight. Screens held six inches from the face.",
        "Your body responds to all of it. Not metaphorically — biologically. There's a third type of photoreceptor in your retina, distinct from the ones that handle vision. It doesn't help you see. It reads light intensity and wavelength, then sends that signal directly to the clock in your brain that governs every hormone in your body.",
        "It doesn't ask for permission. It doesn't wait for you to believe in it.",
      ],
      pullQuote: "You have been communicating with your biology through light your entire life. You just didn't know what you were saying.",
      postPull: [
        "Think of it like meowing at a cat without knowing what the sounds mean. You're definitely communicating. The cat is definitely responding. Whether what you said was what you meant — that's a different question.",
        "Most indoor lighting is unintentional this way. Not bad. Not broken. Just not saying what you'd say if you knew the language. The overhead light that's been running since dinner is telling your body it's noon. The bathroom mirror light you flick on at midnight is more melatonin-suppressing than your phone. The dim warm lamp in the corner — the one that just feels nicer — is closer to the right signal than anything designed to be \"functional.\"",
        "Your nervous system has been responding to all of it, every evening, without your input. The question is only what it's been told.",
      ],
      hormonesTitle: "Here's what light actually says to your body.",
      hormones: [
        {name: "Cortisol", desc: "Your primary alertness and stress hormone. Should peak in the morning and decline by evening. Bright overhead light can keep it elevated past midnight — which is why you feel wired but tired."},
        {name: "Melatonin", desc: "Your sleep-preparation hormone. Should begin rising about two hours before sleep. Suppressed by any light above 10 lux that contains blue wavelengths — including most standard home lighting. Thirty minutes of exposure is enough to delay it by 90 minutes."},
        {name: "Dopamine", desc: "Your reward and attention neurotransmitter. Stimulated by contrast — the gap between a bright focal point and a dim ambient. Uniform lighting depletes it. A candle in a dark room activates it more than a well-lit office."},
        {name: "Serotonin", desc: "Your mood stabilizer. Requires full-spectrum daylight for production. Depletes in low-light seasons and windowless environments — which is why winter, and windowless offices, feel heavier than they should."},
      ],
      closing: [
        "When light is designed to say the right thing at the right time, the body receives the signals it was built to receive. Cortisol rises cleanly in the morning and declines by evening. Melatonin arrives on schedule. Sleep comes without negotiation. You wake having actually rested — not just spent time unconscious.",
        "The space doesn't feel different in a way you can name. You just feel like yourself. Which, if you've been living under unintentional light for years, might feel surprisingly unfamiliar.",
      ],
      cta: "Want to understand what your specific space is doing? Write to "
    },
    catHomehotel: {
      title: "FOR HOMES AND HOTELS",
      intro: "Whether you're a hotel owner noticing sleep complaints in reviews, or someone who hasn't felt truly rested in years — the problem is often the same. Light is giving your body the wrong signals at the wrong time. These two tools address it directly.",
      services: [
        {
          name: "Reset your sleep in 48 hours",
          price: "€297",
          body: "You send five to ten photos of your bedroom or guest rooms — the ceiling fixtures, bedside lamps, bathroom mirror light. We send back a specific document: exact bulb replacements, repositioning notes, and which lights to stop using after which hour. Your team implements it in an afternoon. No renovation. No electrician. No waiting.",
          meta: "<strong>For:</strong> Hotels with sleep complaints in their reviews. Homeowners who sleep for eight hours and wake up tired. Anyone who wants to change something this week.<br><strong>Timeline:</strong> 48 hours. Remote."
        },
        {
          name: "Understand what your space is doing to you",
          price: "from €3,500",
          body: "You send floor plans, photos, and current lighting specs. We send back a Circadian Audit Report: what your lighting is communicating to the biology of every person in that space, what's working, what's working against you, and a ranked list of improvements by impact — before you spend anything on changes.",
          meta: "<strong>For:</strong> Hotels preparing for renovation. Wellness operators who want to optimize without full redesign. Anyone who wants to understand their space before investing in it.<br><strong>Timeline:</strong> 1–2 weeks. Remote."
        }
      ],
      footer: "To discuss a project, write to <a href='mailto:hello@elixlight.com'>hello@elixlight.com</a> — share what stage you're at and a brief description of the project. We'll respond within 48 hours."
    },
    catProject: {
      title: "FOR ARCHITECTURE",
      intro: "Architecture and lighting design studios, developers, and project teams working on new builds or renovations. Biological strategy sits upstream of your process. Your lighting designer makes the technical decisions. We define what those decisions should achieve biologically. The two don't compete — one informs the other.",
      services: [
        {
          name: "Give your design a biological intent",
          price: "from €8,000",
          body: "Before your lighting designer begins specifying, we define the biological goals for every zone in your project. Which hormonal state each space should support, at which hours, for which user. What the light needs to do to people — not just how it should look. Your designer receives a Hormonal Lighting Brief alongside the architectural brief. Every specification they write now has a biological target to design toward.",
          meta: "<strong>For:</strong> Architecture studios, lighting design studios, hospitality developers, wellness project teams. Any project where the experience of the space matters as much as its appearance.<br><strong>Timeline:</strong> 2–3 weeks. Remote."
        },
        {
          name: "Validate your specs before you build",
          price: "from €4,000",
          body: "Your lighting designer has drafted specifications. Before you order fixtures or lock the design, we review them against biological targets. Is the color temperature right for this zone at this hour? Is the source position supporting or undermining the intended state? Are there misalignments that would be expensive to fix after installation? You receive a Biological Impact Review with specific feedback your designer can implement before the build starts.",
          meta: "<strong>For:</strong> Lighting designers wanting independent biological validation. Architects wanting certainty before committing. Anyone about to spend significant money on fixtures who wants to know they'll work.<br><strong>Timeline:</strong> 1 week per review cycle. Remote."
        }
      ],
      footer: "To discuss a project, write to <a href='mailto:hello@elixlight.com'>hello@elixlight.com</a> — share what stage you're at and a brief description of the project. We'll respond within 48 hours."
    }
  },

  el: {
    meta: { title: "ELIXLIGHT — σχεδίαση φωτισμού για τη φυσική σου κατάσταση", lang: "el" },
    nav: {
      tagline: "σχεδίαση φωτισμού για τη φυσική σου κατάσταση",
      science: "η επιστήμη →",
      back: "← πίσω"
    },
    room: {
      states: [
        {t:"05:47", s:"αυγή — η κορτιζόλη ανεβαίνει", b:"#1a1008", d:"#e8822a", g:"0 0 22px 9px rgba(220,110,30,0.55)"},
        {t:"08:15", s:"πρωί — μέγιστη εγρήγορση", b:"#221a0e", d:"#f5c060", g:"0 0 26px 11px rgba(240,180,60,0.45)"},
        {t:"12:30", s:"μεσημέρι — μέγιστο melanopic lux", b:"#1e1810", d:"#f0d090", g:"0 0 30px 13px rgba(240,210,130,0.35)"},
        {t:"15:45", s:"απόγευμα — διατήρηση απόδοσης", b:"#1e1810", d:"#f0d090", g:"0 0 28px 12px rgba(240,210,130,0.35)"},
        {t:"18:20", s:"δύση — έναρξη μελατονίνης", b:"#180e06", d:"#d05820", g:"0 0 18px 7px rgba(200,80,20,0.5)"},
        {t:"21:00", s:"βράδυ — φάση χαλάρωσης", b:"#100804", d:"#a03010", g:"0 0 12px 4px rgba(160,40,10,0.4)"},
        {t:"23:15", s:"νύχτα — κιρκαδικό ναδίρ", b:"#080604", d:"#1a0e06", g:"none"},
        {t:"02:00", s:"μεσάνυχτα — πλήρες σκοτάδι", b:"#080604", d:"#0a0a0a", g:"none"},
      ]
    },
    hero: {
      cat1Label: "ΓΙΑ ΟΙΚΙΕΣ ΚΑΙ ΞΕΝΟΔΟΧΕΙΑ →",
      cat2Label: "ΓΙΑ ΑΡΧΙΤΕΚΤΟΝΙΚΑ ΕΡΓΑ →",
      services: [
        {
          name: "αναβαθμίστε τον ύπνο σας σε 48 ώρες",
          price: "€297",
          desc: "Θα χρειαστούν φωτογραφίες από το υπνοδωμάτιο ή τα δωμάτιά σας. Θα πάρετε συγκεκριμένες προτάσεις για τις λάμπες που πρέπει να αντικατασταθούν, τη σωστή τοποθέτησή τους και το πότε πρέπει να χρησιμοποιείται κάθε φωτιστικό, ώστε να υποστηρίζει τον βιολογικό σας ρυθμό. Η εφαρμογή γίνεται μέσα σε μια μέρα, χωρίς ανακαίνιση.",
          contact: "hello@elixlight.com →"
        },
        {
          name: "κατανοήστε πώς επιδρά ο χώρος σας στο σώμα σας",
          price: "από €3.500",
          desc: "Εξ αποστάσεως αξιολόγηση του υπάρχοντος φωτισμού σας. Θα μάθετε τι λειτουργεί βιολογικά, τι υπονομεύει την εμπειρία σας, ποιες αλλαγές έχουν τη μεγαλύτερη επίδραση πριν επενδύσετε χρήματα.",
          contact: "hello@elixlight.com →"
        },
        {
          name: "δώστε βιολογική πρόθεση στον σχεδιασμό σας",
          price: "από €8.000",
          desc: "Πριν τον σχεδιασμό φωτισμού, καθορίζουμε τι πρέπει να πετυχαίνει βιολογικά κάθε ζώνη του έργου: ποια ορμονική κατάσταση πρέπει να υποστηρίζει, ποια ώρα, για ποιον χρήστη. Ο σχεδιαστής λαμβάνει έναν βιολογικό στόχο και τον εφαρμόζει στη σχεδίαση.",
          contact: "hello@elixlight.com →"
        },
        {
          name: "αξιολογήστε τις προδιαγραφές βιολογικά πριν κατασκευάσετε",
          price: "από €4.000",
          desc: "Οι προδιαγραφές φωτισμού έχουν ήδη δημιουργηθεί, και τις αξιολογούμε πριν γίνει η παραγγελία των φωτιστικών. Είναι ο τελευταίος έλεγχος πριν ο σχεδιασμός ενσωματωθεί στην κατασκευή.",
          contact: "hello@elixlight.com →"
        }
      ]
    },
    qa: {
      label: "ΣΩΣΤΟ Ή ΛΑΘΟΣ;",
      revealBtn: "Είναι αλήθεια; →",
      nextBtn: "Άλλο →",
      sciBtn: "Γιατί συμβαίνει αυτό; Η επιστήμη →",
      questions: [
        {b:'"Αρκεί να χαμηλώνεις την ένταση του φωτισμού για να χαλαρώσεις πριν τον ύπνο."', a:"Το dimming μειώνει την ένταση, όχι τη βιολογία. Ένας dimmed λαμπτήρας 4000K πλημμυρίζει ακόμα τον αμφιβληστροειδή σου με μπλε μήκη κύματος — το ακριβές σήμα που καταστέλλει τη μελατονίνη. Χαμηλώνεις την ένταση, αλλά το λάθος τραγούδι παίζει ακόμα.Η μείωση της έντασης δεν αλλάζει απαραίτητα το βιολογικό μήνυμα του φωτός. Ένα φωτιστικό 4000K (ψυχρού χρώματος), ακόμη και χαμηλωμένο, συνεχίζει να εκπέμπει μπλε μήκη κύματος που καταστέλλουν τη μελατονίνη. Μειώνεις την ένταση, όχι το μήνυμα."},
        {b:'"Το κινητό είναι ο βασικός λόγος που δεν μπορώ να κοιμηθώ."', a:"Συχνά ο φωτισμός της οροφής εκθέτει τα μάτια σε περισσότερο φως που καταστέλλει τη μελατονίνη από ό,τι η ίδια η οθόνη. Οι οθόνες κατηγορούνται επειδή είναι εμφανείς. Ο φωτισμός του χώρου όμως μπορεί να έχει ακόμη μεγαλύτερη βιολογική επίδραση."},
        {b:'"Το ζεστό φως είναι πάντα χαλαρωτικό."', a:"Όχι απαραίτητα. Ένα θερμό φωτιστικό στην οροφή στις 22:00 μπορεί να συνεχίζει να στέλνει σήμα ότι είναι «μεσημέρι» στον εγκέφαλο, γιατί είναι ψηλά όπως ο μεσημαριανός ήλιος. Η θέση του φωτός είναι εξίσου σημαντική με το χρώμα του."},
        {b:'"Μπορείς να αναπληρώσεις τον χαμένο ύπνο το Σαββατοκύριακο."', a:"Το να κοιμηθείς περισσότερο την Κυριακή μετατοπίζει το κιρκαδικό σου ρολόι, γι' αυτό και τη Δευτέρα νιώθεις σαν να έχεις jet lag. Δεν έχει σημασία μόνο πόσο κοιμάσαι. Έχει σημασία και πότε."},
        {b:'"Το έντονο πρωινό φως είναι κουραστικό."', a:"Η ενόχληση που νιώθεις είναι η φυσιολογική αντίδραση της κορτιζόλης. Το έντονο πρωινό φως είναι το ισχυρότερο σήμα για να συγχρονίσεις το βιολογικό σου ρολόι, να συγκεντρώνεσαι καλύτερα, να κοιμηθείς καλύτερα το βράδυ."},
        {b:'"Σκοτεινό υπνοδωμάτιο σημαίνει μόνο να σβήσεις τα φώτα."', a:"Ακόμη και 5 lux φωτός μέσα από κλειστά βλέφαρα μπορούν να μειώσουν τη μελατονίνη. Ένα φωτάκι αναμονής ή το φως του διαδρόμου μπορεί να επηρεάσει τον ύπνο και να ευθύνεται που ξυπνάς τη νύχτα."},
        {b:'"Το σώμα συνηθίζει το τεχνητό φως."', a:"Δεν συνηθίζει. Το κιρκαδικό ρολόι αντιδρά στο φως σήμερα όπως αντιδρούσε πριν από την ανακάλυψη του ηλεκτρισμού. Το σώμα ανταποκρίνεται συνεχώς στα φωτεινά ερεθίσματα."},
        {b:'"Τα γυαλιά που φιλτράρουν το μπλε φως είναι η λύση."', a:"Τα γυαλιά μειώνουν μόνο έναν παράγοντα. Η ένταση, η κατεύθυνση και η διάρκεια του φωτός συνεχίζουν να επηρεάζουν τη μελατονίνη."},
      ]
    },
    science: {
      title: "Η ΕΠΙΣΤΗΜΗ",
      paragraphs: [
        "Περίπου το 90% του χρόνου που είμαστε ξύπνιοι το περνάμε σε εσωτερικούς χώρους. Αυτό είναι εξαιρετικά πρόσφατο από άποψη εξέλιξης. Η βιολογία μας δεν έχει προσαρμοστεί.",
        "Το σώμα μας εξακολουθεί να περιμένει το φυσικό φως κάτω από το οποίο εξελίχθηκε: τον ήλιο που ανατέλλει, κορυφώνεται το μεσημέρι, δύει το βράδυ. Αντί γι' αυτό, εκτίθεται σε φωτισμό σταθερής έντασης από το πρωί μέχρι αργά τη νύχτα.",
        "Ο οργανισμός αντιδρά σε όλο αυτό βιολογικά. Στον αμφιβληστροειδή υπάρχει ένας τρίτος τύπος φωτοϋποδοχέα που δεν χρησιμοποιείται για την όραση. Ανιχνεύει την ένταση του φωτός, το φάσμα του, και στέλνει αυτές τις πληροφορίες απευθείας στο βιολογικό ρολόι του εγκεφάλου.",
        "Δεν ζητάει άδεια. Δεν περιμένει να το πιστέψεις.",
      ],
      pullQuote: "Επικοινωνείς με τη βιολογία σου μέσω του φωτός για όλη σου τη ζωή. Απλώς μέχρι τώρα δεν γνώριζες τι της έλεγες.",
      postPull: [
        "Σκέψου ότι προσπαθείς να νιαουρίσεις σε μια γάτα χωρίς να γνωρίζεις τη γλώσσα της. Επικοινωνία υπάρχει. Η γάτα ανταποκρίνεται. Το ερώτημα είναι αν της λες αυτό που νομίζεις. Το ίδιο συμβαίνει και με τον φωτισμό.",
        "Τις περισσότερος φορές ο εσωτερικός φωτισμός δεν είναι «κακός». Απλώς δεν έχει σχεδιαστεί συνειδητά. Το φωτιστικό της οροφής μετά το δείπνο επικοινωνεί στο σώμα ότι είναι μεσημέρι. Το φως του καθρέφτη στο μπάνιο τα μεσάνυχτα μπορεί να καταστέλλει περισσότερο τη μελατονίνη από το κινητό. Αντίθετα, ένα μικρό ζεστό φωτιστικό σε χαμηλό ύψος είναι πιο κατάλληλο βιολογικό μήνυμα.",
        "Το νευρικό σου σύστημα ανταποκρίνεται όλη την ημέρα στα σήματα που του δίνει το φως. Το μόνο ερώτημα είναι",
      ],
      hormonesTitle: "τι ακριβώς του λες.",
      hormones: [
        {name: "Κορτιζόλη", desc: "Η βασική ορμόνη εγρήγορσης. Πρέπει να κορυφώνεται το πρωί και να μειώνεται σταδιακά το βράδυ. Ο έντονος φωτισμός μπορεί να την κρατήσει αυξημένη μέχρι αργά τη νύχτα."},
        {name: "Μελατονίνη", desc: "Η ορμόνη που προετοιμάζει τον ύπνο. Κανονικά αρχίζει να αυξάνεται περίπου δύο ώρες πριν τον ύπνο. Καταστέλλεται από φως άνω των 10 lux που περιέχει μπλε μήκη κύματος. Ακόμη και 30 λεπτά έκθεσης σε φως μπορούν να καθυστερήσουν την έκκρισή της περίπου 90 λεπτά."},
        {name: "Ντοπαμίνη", desc: "Νευροδιαβιβαστής ανταμοιβής και προσοχής. Ενεργοποιείται από την αντίθεση ανάμεσα σε ένα φωτεινό σημείο και ένα σκοτεινότερο περιβάλλον. Ο ομοιόμορφος φωτισμός μειώνει αυτή τη διέγερση."},
        {name: "Σεροτονίνη", desc: "Ο νευροδιαβιβαστής της διάθεσης. Χρειάζεται πλήρες φυσικό φως ημέρας για να παραχθεί. Γι' αυτό ο χειμώνας και οι χώροι χωρίς παράθυρα επηρεάζουν τόσο έντονα τη διάθεση."},
      ],
      closing: [
        "Όταν ο φωτισμός στέλνει το σωστό μήνυμα τη σωστή στιγμή: η κορτιζόλη ανεβαίνει το πρωί, η μελατονίνη εμφανίζεται την κατάλληλη ώρα, ο ύπνος έρχεται φυσικά, ξυπνάς πραγματικά ξεκούραστος.",
        "Ο χώρος ίσως να μη φαίνεται διαφορετικός. Αλλά εσύ αισθάνεσαι ξανά ο εαυτός σου.",
      ],
      cta: "Θέλεις να καταλάβεις τι επιδραση έχει στο σώμα σου ο δικός σου χώρος; Γράψε στο "
    },
    catHomehotel: {
      title: "ΓΙΑ ΟΙΚΙΕΣ ΚΑΙ ΞΕΝΟΔΟΧΕΙΑ",
      intro: "Είτε είστε ιδιοκτήτης ξενοδοχείου και βλέπετε παράπονα για τον ύπνο στις αξιολογήσεις, είτε είστε κάποιος που ξυπνά κουρασμένος εδώ και χρόνια, το πρόβλημα είναι συχνά το ίδιο. Ο φωτισμός δίνει στο σώμα λάθος βιολογικά σήματα τη λάθος στιγμή.",
      services: [
        {
          name: "Αποκαταστήστε τον ύπνο σας μέσα σε 48 ώρες",
          price: "€297",
          body: "Χρειάζεται να στείλετε 5–10 φωτογραφίες του χώρου ή τα δωμάτια των επισκεπτών — τα φωτιστικά οροφής, τα κομοδίνα, το φως του καθρέφτη του μπάνιου. Λαμβάνετε ακριβείς αντικαταστάσεις λαμπτήρων, αλλαγές θέσεων, οδηγίες για το ποια φώτα πρέπει να χρησιμοποιούνται σε κάθε ώρα.",
          meta: "<strong>Κατάλληλο για:</strong> Ξενοδοχεία με παράπονα για ύπνο στις κριτικές τους. Ιδιοκτήτες σπιτιού που κοιμούνται οκτώ ώρες και ξυπνάνε κουρασμένοι. Οποιονδήποτε θέλει άμεση βελτίωση.<br><strong>Χρονοδιάγραμμα:</strong> 48 ώρες. Εξ αποστάσεως"
        },
        {
          name: "Κατανοήστε την επίδραση του χώρου σας",
          price: "από €3.500",
          body: "Στέλνετε κατόψεις, φωτογραφίες, υπάρχουσες προδιαγραφές φωτισμού. Λαμβάνετε Έκθεση Κιρκαδικής Αξιολόγησης με: βιολογική αξιολόγηση, τι λειτουργεί, τι χρειάζεται βελτίωση, κατάταξη των παρεμβάσεων ανάλογα με την επίδρασή τους.",
          meta: "<strong>Κατάλληλο για:</strong> Ξενοδοχεία που ετοιμάζονται για ανακαίνιση. Λειτουργούς ευεξίας που θέλουν να βελτιστοποιήσουν το χώρο τους χωρίς πλήρη ανασχεδιασμό. Οποιονδήποτε θέλει να καταλάβει τον χώρο του πριν επενδύσει σε αυτόν.<br><strong>Χρονοδιάγραμμα:</strong> 1–2 εβδομάδες. Εξ αποστάσεως."
        }
      ],
      footer: "Για να συζητήσουμε για κάποιο έργο που σκέφτεσαι, γράψε στο <a href='mailto:hello@elixlight.com'>hello@elixlight.com</a> — μοιράσου σε ποιο στάδιο βρίσκεσαι και μια σύντομη περιγραφή του έργου."
    },
    catProject: {
      title: "ΓΙΑ ΑΡΧΙΤΕΚΤΟΝΙΚΑ ΕΡΓΑ",
      intro: "Απευθύνεται σε αρχιτεκτονικά γραφεία, γραφεία σχεδίασης φωτισμού, κατασκευαστές, ομάδες έργων σε νέες κατασκευές ή ανακαινίσεις. Η ELIXLIGHT καθορίζει τους βιολογικούς στόχους του φωτισμού. Ο υπεύθυνος σχεδίασης φωτισμού αποφασίζει πώς θα τους υλοποιήσει.",
      services: [
        {
          name: "Δώστε βιολογική πρόθεση στον σχεδιασμό",
          price: "από €8.000",
          body: "Καθορίζονται για κάθε χώρο: ποια ορμονική κατάσταση πρέπει να υποστηρίζει, ποιες ώρες, για ποιον χρήστη. Ο σχεδιαστής φωτισμού λαμβάνει ένα Brief Ορμονικού Φωτισμού μαζί με το αρχιτεκτονικό brief.",
          meta: "<strong>Για:</strong> Αρχιτεκτονικά γραφεία, γραφεία σχεδίασης φωτισμού, κατασκευαστές χώρων φιλοξενίας, ομάδες έργων ευεξίας. Οποιοδήποτε έργο όπου η εμπειρία του χώρου έχει ίδια σημασία με την εμφάνισή του.<br><strong>Χρονοδιάγραμμα:</strong> 2–3 εβδομάδες. Εξ αποστάσεως."
        },
        {
          name: "Αξιολόγηση προδιαγραφών πριν το έργο",
          price: "από €4.000",
          body: "Ελέγχουμε: θερμοκρασία χρώματος, θέση φωτιστικών, πιθανές βιολογικές αστοχίες, διορθώσεις πριν την κατασκευή. Παραδίδεται Ανασκόπηση Βιολογικής Επίδρασης. Χρόνος: περίπου μία εβδομάδα ανά κύκλο αξιολόγησης.",
          meta: "<strong>Για:</strong> Φωτιστές που θέλουν ανεξάρτητη βιολογική επικύρωση. Αρχιτέκτονες που θέλουν να βεβαιωθούν πριν δεσμευτούν. Οποιονδήποτε πρόκειται να ξοδέψει σημαντικό ποσό σε φωτιστικά και θέλει να ξέρει ότι θα λειτουργήσουν.<br><strong>Χρονοδιάγραμμα:</strong> 1 εβδομάδα ανά κύκλο αναθεώρησης. Εξ αποστάσεως."
        }
      ],
      footer: "Για να συζητήσουμε για κάποιο έργο που σκέφτεσαι, γράψε στο <a href='mailto:hello@elixlight.com'>hello@elixlight.com</a> — μοιράσου σε ποιο στάδιο βρίσκεσαι και μια σύντομη περιγραφή του έργου. Θα απαντήσουμε εντός 48 ωρών."
    }
  }
};
