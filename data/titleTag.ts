
export const NavigationBarData = [
    { id: '1', pageTH: 'หน้าหลัก', pageEN: 'Home', link: "/", type: "link" },
    {
        id: '2', pageTH: 'เกี่ยวกับมูลนิธิฯ', pageEN: 'About', type: "dropdown",
        list: [
            { pageTH: 'ความเป็นมาของมูลนิธิฯ', pageEN: 'Derivation', link: "/", },
            { pageTH: 'ประกาศจัดตั้ง', pageEN: 'Establish', link: "/origin", },
            { pageTH: 'คณะกรรมการของมูลนิธิ', pageEN: 'Committee', link: "/committee", },
        ]
    },
    { id: '3', pageTH: 'การบริจาค', pageEN: 'Supportus', link: "/supportus", type: "link" },
    { id: '4', pageTH: 'การอุปถัมภ์สุนัข', pageEN: 'Patronage', link: "/patronage", type: "link" },
    { id: '4', pageTH: 'การรับอุปการะสุนัข', pageEN: 'Adoption', link: "/adoption", type: "link" },
    { id: '4', pageTH: 'ติดต่อเรา', pageEN: 'Contact', link: "/contact", type: "link" }
];