export const ICONS_LIST = {
  TRENDING: "TRENDING",
  BITCOIN: "BITCOIN",
  SOLANA: "SOLANA",
  ETHEREUM: "ETHEREUM",
  SHIBA: "SHIBA",
  BINANCE: "BINANCE",
};

export const ASSET_LIST = [
  {
    id: 1,
    title: "Bitcoin (BTC)",
    icon: ICONS_LIST.BITCOIN,
    top_background:
      "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
    icon_background: "#EAB300",
    price: {
      title: "Price",
      value: "$31,812.80",
      change: "+10%",
      type: "up",
    },
    market_cap: {
      title: "TVL",
      value: "$60,000",
    },
    popularity_pairs: {
      title: "Popularity Pairs",
      width: 122,
      list: [
        { icon: ICONS_LIST.SOLANA, background: "#000000" },
        { icon: ICONS_LIST.ETHEREUM, background: "#ffffff" },
        { icon: ICONS_LIST.BINANCE, background: "#EAB300" },
      ],
    },
  },
  {
    id: 2,
    title: "Solana (SOL)",
    icon: ICONS_LIST.SOLANA,
    top_background:
      "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)",
    icon_background: "#000000",
    price: {
      title: "Price",
      value: "$32.83",
      change: "-12.32%",
      type: "down",
    },
    market_cap: {
      title: "TVL",
      value: "$60,000",
    },
    popularity_pairs: {
      title: "Popularity Pairs",
      width: 122,
      list: [
        {
          icon: ICONS_LIST.BITCOIN,
          background: "#EAB300",
        },
        { icon: ICONS_LIST.ETHEREUM, background: "#ffffff" },
        { icon: ICONS_LIST.BINANCE, background: "#EAB300" },
      ],
    },
  },
  {
    id: 3,
    title: "Ethereum (ETH)",
    icon: ICONS_LIST.ETHEREUM,
    top_background:
      "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%);",
    icon_background: "#ffffff",
    price: {
      title: "Price",
      value: "$1,466.45",
      change: "-11.93%",
      type: "down",
    },
    market_cap: {
      title: "TVL",
      value: "$60,000",
    },
    popularity_pairs: {
      title: "Popularity Pairs",
      width: 122,
      list: [
        { icon: ICONS_LIST.SOLANA, background: "#000000" },
        { icon: ICONS_LIST.BITCOIN, background: "#EAB300" },
        { icon: ICONS_LIST.BINANCE, background: "#EAB300" },
      ],
    },
  },
  {
    id: 4,
    title: "Binance USD (BUSD)",
    icon: ICONS_LIST.BINANCE,
    top_background:
      "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)",
    icon_background: "#F3BA2F",
    price: {
      title: "Price",
      value: "$1.00",
      change: "+0.26%",
      type: "up",
    },
    market_cap: {
      title: "TVL",
      value: "$60,000",
    },
    popularity_pairs: {
      title: "Popularity Pairs",
      width: 122,
      list: [
        { icon: ICONS_LIST.SOLANA, background: "#000000" },
        { icon: ICONS_LIST.ETHEREUM, background: "#ffffff" },
        { icon: ICONS_LIST.BINANCE, background: "#EAB300" },
      ],
    },
  },
  {
    id: 5,
    title: "Shiba Inu (SHIB)",
    icon: ICONS_LIST.SHIBA,
    top_background:
      "linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(228, 45, 4, 0.1) 100%)",
    icon_background: "#E42D04",
    price: {
      title: "Price",
      value: "$0.00000001948",
      change: "-8.1%",
      type: "down",
    },
    market_cap: {
      title: "TVL",
      value: "$60,000",
    },
    popularity_pairs: {
      title: "Popularity Pairs",
      width: 122,
      list: [
        { icon: ICONS_LIST.SOLANA, background: "#000000" },
        { icon: ICONS_LIST.ETHEREUM, background: "#ffffff" },
        { icon: ICONS_LIST.BINANCE, background: "#EAB300" },
      ],
    },
  },
];
