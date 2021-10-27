// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const deals = [
  {
    title: "wSPAniały Tydzień!",
    subTitle: "Najlepsze Masae i SPA",
    cta: "Zobacz oferty",
    link: "https:www.dummy.com",
    color: "#db76c7",
  },
  {
    title: "Kosmetyczne Hity!",
    subTitle: "Te oferty powinny być na Twojej liście",
    cta: "Zobacz oferty",
    link: "https:www.dummy.com",
    color: "#fba8e4",
  },
  {
    title: "Bilety do Multikina od 14,30zł !",
    subTitle: "Premiery kinowe w 44 lokalizacjach",
    cta: "Zobacz oferty",
    link: "https:www.dummy.com",
    color: "#e4017b",
  },
  {
    title: "A moe w Góry?",
    subTitle: "Hotele w Górach",
    cta: "Zobacz oferty",
    link: "https:www.dummy.com",
    color: "#a0b4ea",
  },
];

export default function handler(req, res) {
  res.status(200).json(deals);
}
