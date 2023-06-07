
export const NavigationBarData = [
    { id: '1', page: 'หน้าหลัก', link: "/", type: "link", language: 'TH' },
    { id: '13', page: 'ข่าว', link: "/news", type: "link", language: 'TH' },
    {
        id: '2', page: 'เกี่ยวกับมูลนิธิฯ', link: "/about", type: "dropdown", language: 'TH',
        list: [
            { page: 'ความเป็นมาของมูลนิธิฯ', link: "/", },
            { page: 'ประกาศจัดตั้ง', link: "/origin", },
            { page: 'คณะกรรมการของมูลนิธิ', link: "/committee", },
        ]
    },
    { id: '3', page: 'การบริจาค', link: "/supportus", type: "link", language: 'TH' },
    { id: '4', page: 'การอุปถัมภ์สุนัข', link: "/patronage", type: "link", language: 'TH' },
    { id: '5', page: 'การรับอุปการะสุนัข', link: "/adoption", type: "link", language: 'TH' },
    { id: '6', page: 'ติดต่อเรา', link: "/contact", type: "link", language: 'TH' },
    { id: '7', page: 'Home', link: "/", type: "link", language: 'EN' },
    { id: '14', page: 'news', link: "/news", type: "link", language: 'EN' },
    {
        id: '8', page: 'About', link: "/about", type: "dropdown", language: 'EN',
        list: [
            { page: 'Derivation', link: "", },
            { page: 'Establish', link: "/origin", },
            { page: 'Committee', link: "/committee", },
        ]
    },
    { id: '9', page: 'Supportus', link: "/supportus", type: "link", language: 'EN' },
    { id: '10', page: 'Patronage', link: "/patronage", type: "link", language: 'EN' },
    { id: '11', page: 'Adoption', link: "/adoption", type: "link", language: 'EN' },
    { id: '12', page: 'Contact', link: "/contact", type: "link", language: 'EN' },

];

