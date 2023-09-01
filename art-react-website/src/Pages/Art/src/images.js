import status from './status';

const pieces = {
    perdita: {
        status: status.COMMISSION,
        name: "Perdita",
        imgSmall: ["perdita_sm.jpg", "perdita_mock_sm.jpg", "perdita_detail_1_sm.jpg", "perdita_detail_2_sm.jpg", "perdita_detail_3_sm.jpg"],
        imgLarge: ["perdita.jpg", "perdita_mock.jpg", "perdita_detail_1.jpg", "perdita_detail_2.jpg", "perdita_detail_3.jpg"],
        size: "100x100cm",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
    },
    connexa_ii: {
        status: status.FOR_SALE,
        name: "CONNEXA II",
        imgSmall: ["connexa_ii_sm.jpg"],
        imgLarge: ["connexa_ii.jpg"],
        size: "40x60cm",
        price: "£395",
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
        price: "£195",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        details: [
            "The circle is the most pure form in nature, and one that appears again and again. There's a reason why so many successful products revolve around a circle (iPod, Nest, Braun radio). But what happens when you break that circle? When the complete becomes incomplete?",
            "This piece aims to answer that question and more with the exploration of what it means to be deliberately incomplete, through colour, texture, and of course the shape. This intimate, yet striking artwork provokes a true sense of confusion and peace at the same time."
        ]
    },
    infectus_ii: {
        status: status.FOR_SALE,
        name: "INFECTUS II",
        imgSmall: ["infectus_ii_sm.png", "infectus_ii_mock.jpg"],
        imgLarge: ["infectus_ii.png", "infectus_ii_mock.jpg"],
        size: "50cm diam.",
        price: "£350",
        medium: "Acrylic, spray paint & mixed media on canvas",
        year: "2023",
        details: [
            "The circle is the most pure form in nature, and one that appears again and again. There's a reason why so many successful products revolve around a circle (iPod, Nest, Braun radio). But what happens when you break that circle? When the complete becomes incomplete?",
            "A continuation of INFECTUS I, the second piece of the series flips the narrative inside out, but raising the same questions and thoughts as it's predecessor. While the circle itself may be complete, there's a clear and deliberate divide which symbolises the many divides we see in human and global nature today."
        ]
    },
    astra_ii: {
        status: status.FOR_SALE,
        name: "ASTRA II",
        imgSmall: ["astra_ii_sm.jpg", "astra_mock.jpg"],
        imgLarge: ["astra_ii.jpg", "astra_mock.jpg"],
        size: "40x30cm",
        price: "£195",
        medium: "Acrylic, spray paint & mixed media on canvas",
        year: "2023",
        details: [
            "Living in London, I don't get to see the stars or much of the night sky very often, so when I do it's always a sight to behold. The second of these dark, colourful pieces, ASTRA II is simply an exploration of how texture and medium can interact in simple ways to create a beautiful and magical landscape."
        ],
        pair: 'astra_i',
    },
    connexa_i: {
        status: status.UNAVAILABLE,
        name: "CONNEXA I",
        imgSmall: ["connexa_i_sm.jpg", "connexa_i_mock.png", "connexa_i_full_sm.jpg", "connexa_i_detail_1_sm.jpg", "connexa_i_detail_2_sm.jpg", "connexa_i_detail_3_sm.jpg", "connexa_i_detail_4_sm.jpg", "connexa_i_detail_5_sm.jpg"],
        imgLarge: ["connexa_i.jpg", "connexa_i_mock.png", "connexa_i_full.jpg", "connexa_i_detail_1.jpg", "connexa_i_detail_2.jpg", "connexa_i_detail_3.jpg", "connexa_i_detail_4.jpg", "connexa_i_detail_5.jpg"],
        size: "100x100cm",
        medium: "Acrylic & mixed media on canvas",
        year: "2023",
        frame: "Black softwood frame",
    },
    sarasa: {
        status: status.UNAVAILABLE,
        name: "SARASA",
        imgSmall: ["sarasa_sm.jpg", "sarasa_mock.jpg"],
        imgLarge: ["sarasa.jpg", "sarasa_mock.jpg"],
        size: "24x24in.",
        medium: "Acrylic on canvas",
        year: "2023",
    },
    aequor: {
        status: status.UNAVAILABLE,
        name: "AEQUOR",
        imgSmall: ["aequor_sm.jpg", "aequor_mock.png"],
        imgLarge: ["aequor.jpg", "aequor_mock.png"],
        size: "12x12in.",
        medium: "Acryclic & mixed media on canvas",
        year: "2023",
    },
    astra_i: {
        status: status.UNAVAILABLE,
        name: "ASTRA I",
        imgSmall: ["astra_i_sm.jpg", "astra_mock.jpg"],
        imgLarge: ["astra_i.jpg", "astra_mock.jpg"],
        size: "40x30cm",
        medium: "Acryclic & mixed media on canvas",
        year: "2023",
        pair: 'astra_ii',
    },
    double_take: {
        status: status.UNAVAILABLE,
        name: "Double Take",
        imgSmall: ["double_take_sm.jpg", "double_take_mock.png"],
        imgLarge: ["double_take.jpg", "double_take_mock.png"],
        size: "12x12in",
        medium: "Acrylic on canvas",
        year: "2023",
    }
}

export default pieces;