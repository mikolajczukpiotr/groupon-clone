const site = [
  {
    type: "title",
    value: "Dzień dobry, już dziś podaruj sobie wspaniałe doświadczenie",
  },
  { type: "deals", value: { id: 1 } },
  { type: "promos", value: { id: 2 } },
];

export default function handler(req, res) {
  res.status(200).json(site);
}
