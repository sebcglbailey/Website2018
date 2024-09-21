import status from '../../Art/src/status';

const pieces = {
    dancing_in_the_desert_a3: {
        status: status.FOR_SALE,
        name: "Dancing in the Desert",
        imgSmall: ["no1_sm.jpg", "no2_sm.jpg", "no3_sm.jpg", "no4_sm.jpg"],
        imgLarge: ["no1.jpg", "no2.jpg", "no3.jpg", "no4.jpg"],
        imgHero: "no1_hero.jpg",
        size: "A3",
        price: "£65 / £90 framed",
        medium: "Acrylic and ink on paper",
        year: "2024",
        frame: "A2 Black wooden frame with glass front – 1 available",
        pair: ["dancing_in_the_desert_a4"],
    },
    dancing_in_the_desert_a4: {
        status: status.FOR_SALE,
        name: "Dancing in the Desert",
        imgSmall: ["no5_sm.jpg", "no6_sm.jpg", "no7_sm.jpg", "no8_sm.jpg"],
        imgLarge: ["no5.jpg", "no6.jpg", "no7.jpg", "no8.jpg"],
        size: "A4",
        price: "£50 / £70 framed",
        medium: "Acrylic and ink on paper",
        year: "2024",
        frame: "A3 black thin aluminium frame with perspex front",
        pair: ["dancing_in_the_desert_a3"],
    },
}

export default pieces;