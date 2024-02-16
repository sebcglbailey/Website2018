import status from './status';

const pieces = {
    attakai_uzu: {
        status: status.FOR_SALE,
        name: "Attakai Uzu",
        imgSmall: ["attakai_uzu_sm.jpg", "attakai_uzu_mock_sm.png", "attakai_uzu_detail_sm.png"],
        imgLarge: ["attakai_uzu.jpg", "attakai_uzu_mock.png", "attakai_uzu_detail.png"],
        size: "72x36cm",
        price: "£320",
        medium: "Acrylic & mixed media on deep edge canvas",
        year: "2024",
        frame: "White redwood floating frame",
        details: [
            "With warming colours, and deep inks, Attakai Uzu is the perfect piece to brighten up your home coming into the Spring months.",
            "As with all pieces, Attakai Uzu is carefully varnished with a UV resistant varnish to preserve the painting, and protect it from diminishing over time.",
            "Framed by hand by the artist."
        ]
    },
    in_agria: {
        status: status.COMMISSION,
        name: "in agria viridi casia",
        imgSmall: ["in_agria_sm.jpg", "in_agria_full_sm.jpg", "in_agria_frame_sm.jpg"],
        imgLarge: ["in_agria.jpg", "in_agria_full.jpg", "in_agria_frame.jpg"],
        imgHero: "in_agria_hero.jpg",
        size: "100x100cm",
        price: "Commissioned piece",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        frame: "Black redwood floating frame",
        details: [
            "Last commission of 2023, bringing together the techniques and contrasting colours found throughout many of the pieces of the year, but introducing a different pallette.",
            "I absolutely love it when a commission is well received, and this one certainly delivered!",
            "Framed by hand by the artist."
        ]
    },
    etheldreda: {
        status: status.COMMISSION,
        name: "Etheldreda",
        imgSmall: ["etheldreda_sm.jpg", "etheldreda_mock_sm.png", "etheldreda_full_sm.png", "etheldreda_detail_1_sm.jpg", "etheldreda_detail_2_sm.jpg"],
        imgLarge: ["etheldreda.jpg", "etheldreda_mock.png", "etheldreda_full.png", "etheldreda_detail_1.jpg", "etheldreda_detail_2.jpg"],
        imgHero: "etheldreda_hero.jpg",
        size: "122x91cm",
        price: "Commissioned piece",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        frame: "Stained redwood floating frame",
        details: [
            "Based on the beautiful view of Ely cathedral, over the Cambridgeshire countryside.",
            "Framed by hand by the artist."
        ]
    },
    imperfection: {
        status: status.FOR_SALE,
        name: "Imperfection",
        imgSmall: ["imperfection_sm.png", "imperfection_mock_sm.png"],
        imgLarge: ["imperfection.png", "imperfection_mock.png"],
        imgHero: "imperfection_hero.jpg",
        size: "40x30cm",
        price: "£120",
        medium: "Acrylic on canvas",
        year: "2023",
        details: [
            "Every artist, whether that be a painter, musician or digital creator, feels frustration towards their work at some point. This piece symbolises this for me; the inability to get that 'perfect' mark, or the constant imposter syndrome that is chasing me through every piece.",
            "I chose to embrace that, and find the beauty within the imperfection that this piece holds."
        ]
    },
    procursus: {
        status: status.FOR_SALE,
        name: "PROCURSUS",
        imgSmall: ["procursus_sm.png", "procursus_mock_sm.png", "procursus_detail_1_sm.jpg", "procursus_detail_2_sm.jpg", "procursus_detail_3_sm.jpg"],
        imgLarge: ["procursus.png", "procursus_mock.png", "procursus_detail_1.jpg", "procursus_detail_2.jpg", "procursus_detail_3.jpg"],
        imgHero: "procursus_hero.jpg",
        size: "60x60cm (20x60cm x3)",
        price: "£380",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        frame: "Currently unframed with fluorescent red edges",
        details: [
            "Inspired by the sky, stars and galaxies, this triptych takes you on a journey and deliberately juxtaposes the chaotic foreground and present, with the peaceful and serene background of the larger picture.",
            "Serving as a metaphor for the world and universe we live in, the chaotic present, and the neverending tranquility of space that the chaos lives within, PROCURSUS will serve as a talking point and center piece of any home.",
            "PROCURSUS will be supplied framed in a black floating redwood frame.",
        ],
    },
    sarasa_iv: {
        status: status.UNAVAILABLE,
        name: "SARASA IV",
        imgSmall: ["sarasa_iv_sm.png", "sarasa_iv_mock_sm.png"],
        imgLarge: ["sarasa_iv.png", "sarasa_iv_mock.png"],
        size: "20x20cm",
        price: "£75",
        medium: "Acrylic on canvas",
        year: "2023",
        frame: "Currently unframed",
        details: [
            "Playing on the edges of expressionism, the SARASA series finds a peaceful and tranquil calm within the chaos of the Koi Karp portrayed.",
            "The series aims to provoke a sense of excitement through it's flow and composition, yet using a simplified palette brings a sense of tranquility found often within the movement of water.",
        ],
        pair: ["sarasa_v", "sarasa_ii", "sarasa"],
    },
    sarasa_v: {
        status: status.UNAVAILABLE,
        name: "SARASA V",
        imgSmall: ["sarasa_v_sm.jpg", "sarasa_v_mock_sm.png", "sarasa_v_full_sm.jpg",],
        imgLarge: ["sarasa_v.jpg", "sarasa_v_mock.png",  "sarasa_v_full.jpg"],
        size: "30x30cm",
        price: "£150",
        medium: "Acrylic on canvas",
        year: "2023",
        frame: "Currently unframed",
        details: [
            "Playing on the edges of expressionism, the SARASA series finds a peaceful and tranquil calm within the chaos of the Koi Karp portrayed.",
            "The series aims to provoke a sense of excitement through it's flow and composition, yet using a simplified palette brings a sense of tranquility found often within the movement of water.",
        ],
        pair: ["sarasa_ii", "sarasa_iv", "sarasa"],
    },
    sarasa_ii: {
        status: status.FOR_SALE,
        name: "SARASA II",
        imgSmall: ["sarasa_ii_sm.jpg", "sarasa_ii_mock_sm.png", "sarasa_ii_full_sm.jpg"],
        imgLarge: ["sarasa_ii.jpg", "sarasa_ii_mock.png", "sarasa_ii_full.jpg"],
        imgHero: "sarasa_ii_hero.jpg",
        size: "76x76cm",
        price: "£750",
        medium: "Acrylic on canvas",
        year: "2023",
        frame: "Unframed – black deep edge canvas",
        details: [
            "Playing on the edges of expressionism, the SARASA series finds a peaceful and tranquil calm within the chaos of the Koi Karp portrayed.",
            "The series aims to provoke a sense of excitement through it's flow and composition, yet using a simplified palette brings a sense of tranquility found often within the movement of water.",
        ],
        pair: ["sarasa_v", "sarasa_iv", "sarasa"],
    },
    contra: {
        status: status.FOR_SALE,
        name: "CONTRA",
        size: "140x56cm",
        imgSmall: ["contra_sm.jpg", "contra_mock_sm.png", "contra_full_sm.jpg", "contra_detail_1_sm.jpg", "contra_detail_2_sm.jpg", "contra_detail_3_sm.jpg"],
        imgLarge: ["contra.jpg", "contra_mock.png", "contra_full.jpg", "contra_detail_1.jpg", "contra_detail_2.jpg", "contra_detail_3.jpg"],
        imgHero: "contra_hero.jpg",
        price: "£800",
        medium: "Acryic & mixed media on recycled canvas",
        year: "2023",
        frame: "15mm black redwood floating frame – Size with frame: 57x24in.",
        details: [
            "Step into a world of playfulness, excitement and joy with a touch of contradiction with CONTRA. This piece very much led itslef, with a simple base splitting the canvas in two, with layer upon layer taking on it's own life and letting the paint and the mediums lead the shape and composition.",
            "Framed by hand by the artist.",
        ],
    },
    perdita: {
        status: status.COMMISSION,
        name: "Perdita",
        imgSmall: ["perdita_sm.jpg", "perdita_mock_sm.jpg", "perdita_detail_1_sm.jpg", "perdita_detail_2_sm.jpg", "perdita_detail_3_sm.jpg"],
        imgLarge: ["perdita.jpg", "perdita_mock.jpg", "perdita_detail_1.jpg", "perdita_detail_2.jpg", "perdita_detail_3.jpg"],
        imgHero: "perdita_hero.jpg",
        size: "100x100cm",
        price: "Commissioned piece",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        frame: "8mm two-tone redwood floating frame",
        details: [
            "Framed by hand by the artist.",
        ]
    },
    connexa_ii: {
        status: status.FOR_SALE,
        name: "CONNEXA II",
        imgSmall: ["connexa_ii_sm.png"],
        imgLarge: ["connexa_ii.pngg"],
        size: "40x60cm",
        price: "£330",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        details: [
            "Inspired by the playfulness of nature, CONNEXA II evokes a relationship and a dance between two beings that can never quite touch. A reminder of the randomness, sparkle, yet roughness that comes with everything in nature, the hues, tones and texture of this piece aim to bring a sense of excitment and intrigue that can only be appreciated in person.",
        ],
    },
    infectus_i: {
        status: status.FOR_SALE,
        name: "INFECTUS I",
        imgSmall: ["infectus_i_sm.jpg"],
        imgLarge: ["infectus_i.jpg"],
        size: "30x40cm",
        price: "£170",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        details: [
            "The circle is the most pure form in nature, and one that appears again and again. There's a reason why so many successful products revolve around a circle (iPod, Nest, Braun radio). But what happens when you break that circle? When the complete becomes incomplete?",
            "This piece aims to answer that question and more with the exploration of what it means to be deliberately incomplete, through colour, texture, and of course the shape. This intimate, yet striking artwork provokes a true sense of confusion and peace at the same time.",
        ],
    },
    infectus_ii: {
        status: status.FOR_SALE,
        name: "INFECTUS II",
        imgSmall: ["infectus_ii_sm.png", "infectus_ii_mock.jpg"],
        imgLarge: ["infectus_ii.png", "infectus_ii_mock.jpg"],
        size: "50cm diam.",
        price: "£250",
        medium: "Acrylic, spray paint & mixed media on canvas",
        year: "2023",
        details: [
            "The circle is the most pure form in nature, and one that appears again and again. There's a reason why so many successful products revolve around a circle (iPod, Nest, Braun radio). But what happens when you break that circle? When the complete becomes incomplete?",
            "A continuation of INFECTUS I, the second piece of the series flips the narrative inside out, but raising the same questions and thoughts as it's predecessor. While the circle itself may be complete, there's a clear and deliberate divide which symbolises the many divides we see in human and global nature today.",
        ],
    },
    astra_ii: {
        status: status.FOR_SALE,
        name: "ASTRA II",
        imgSmall: ["astra_ii_sm.jpg", "astra_mock.jpg"],
        imgLarge: ["astra_ii.jpg", "astra_mock.jpg"],
        size: "40x30cm",
        price: "£170",
        medium: "Acrylic, spray paint & mixed media on canvas",
        year: "2023",
        details: [
            "Living in London, I don't get to see the stars or much of the night sky very often, so when I do it's always a sight to behold. The second of these dark, colourful pieces, ASTRA II is simply an exploration of how texture and medium can interact in simple ways to create a beautiful and magical landscape.",
            "Framed by hand by the artist.",
        ],
        pair: ['astra_i'],
        frame: "8mm black redwood floating frame",
    },
    connexa_i: {
        status: status.UNAVAILABLE,
        name: "CONNEXA I",
        imgSmall: ["connexa_i_sm.jpg", "connexa_i_mock.png", "connexa_i_full_sm.jpg", "connexa_i_detail_1_sm.jpg", "connexa_i_detail_2_sm.jpg", "connexa_i_detail_3_sm.jpg", "connexa_i_detail_4_sm.jpg", "connexa_i_detail_5_sm.jpg"],
        imgLarge: ["connexa_i.jpg", "connexa_i_mock.png", "connexa_i_full.jpg", "connexa_i_detail_1.jpg", "connexa_i_detail_2.jpg", "connexa_i_detail_3.jpg", "connexa_i_detail_4.jpg", "connexa_i_detail_5.jpg"],
        imgHero: "connexa_i_hero.jpg",
        size: "100x100cm",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        frame: "8mm black redwood frame",
        details: [
            "Framed by hand by the artist.",
        ]
    },
    sarasa: {
        status: status.UNAVAILABLE,
        name: "SARASA",
        imgSmall: ["sarasa_sm.jpg", "sarasa_mock.jpg"],
        imgLarge: ["sarasa.jpg", "sarasa_mock.jpg"],
        imgHero: "sarasa_hero.jpg",
        size: "61x61cm",
        medium: "Acrylic on canvas",
        year: "2023",
        pair: ["sarasa_ii", "sarasa_iv", "sarasa_v"],
        details: [
            "Playing on the edges of expressionism, the SARASA series finds a peaceful and tranquil calm within the chaos of the Koi Karp portrayed.",
            "The series aims to provoke a sense of excitement through it's flow and composition, yet using a simplified palette brings a sense of tranquility found often within the movement of water.",
        ],
    },
    aequor: {
        status: status.FOR_SALE,
        name: "AEQUOR",
        imgSmall: ["aequor_sm.jpg", "aequor_mock.png"],
        imgLarge: ["aequor.jpg", "aequor_mock.png"],
        imgHero: "aequor_hero.jpg",
        size: "30x30cm",
        price: "£150",
        medium: "Acryclic & mixed media on canvas",
        year: "2023",
    },
    astra_i: {
        status: status.UNAVAILABLE,
        name: "ASTRA I",
        imgSmall: ["astra_i_sm.jpg", "astra_mock.jpg"],
        imgLarge: ["astra_i.jpg", "astra_mock.jpg"],
        size: "40x30cm",
        price: "£170",
        medium: "Acryclic & mixed media on canvas",
        year: "2023",
        pair: ['astra_ii'],
        frame: "8mm black redwood floating frame",
        details: [
            "Framed by hand by the artist.",
        ]
    },
    double_take: {
        status: status.UNAVAILABLE,
        name: "Double Take",
        imgSmall: ["double_take_sm.jpg", "double_take_mock.png"],
        imgLarge: ["double_take.jpg", "double_take_mock.png"],
        imgHero: 'double_take_hero.jpg',
        size: "30x30cm",
        medium: "Acrylic on canvas",
        year: "2023",
    }
}

export default pieces;