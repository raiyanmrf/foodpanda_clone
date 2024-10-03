import {
  discountIcon,
  discountIllustrationIcon,
  proCardIcon,
  proIllustrationIcon,
  stampcardIcon,
  stampIllustrationIcon,
} from "../svg";

export const cardData = [
  {
    title: "15% OFF",
    offer: "Min. order Tk 50. and special savings for pandapro members",

    type: "pro",
    icon: proCardIcon,
    bigicon: proIllustrationIcon,
  },
  {
    title: "25% OFF (YumPanda)",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    tips: "Use in cart",
    type: "cutout",
    icon: discountIcon,
  },
  {
    title: "12% off",
    offer: "Min. order Tk 199. Discount capped at Tk 100",
    tips: "Auto Applied",
    type: "discount",
    icon: discountIcon,
    bigicon: discountIllustrationIcon,
  },

  {
    title: "Stamp Cards",
    tips: "Earn Rewards",
    type: "stamp",
    icon: stampcardIcon,
    bigicon: stampIllustrationIcon,
  },
];

export const proTermsLists = [
  "Valid for a minimum order of Tk50",
  "This deal is only available for pro members.",
  "Applicable for Delivery.",
  "Additional T&C can apply",
];

export const cardOfferDetails = {
  pro: {
    title: "15% off ৳50",
    type: "pro",
    offer: [
      "15% off on minimum order value of ৳50 for all pandapro users",
      "Valid for all items.",
      " Valid from May 19, 2024 - Dec 31, 2024",
      "Min. order Tk 50.",
    ],

    terms: [
      "Valid for a minimum order of Tk50",
      "This deal is only available for pro members.",
      "Applicable for Delivery.",
      "Additional T&C can apply",
    ],

    icon: proCardIcon,
  },
  cutout: {
    title: "25% OFF",
    type: "cutout",
    offer: [
      "New customers",
      "Valid for all items.",
      " Valid from May 19, 2024 - Dec 31, 2024",
      "Min. order Tk 199. Discount capped at Tk 100 Use voucher in cart.",
    ],
    terms: [
      "Valid for a minimum order of Tk199",
      "Discount capped at Tk100",
      "Applicable for Delivery.",
      "Limited to 1 redemption per user.",
      "For selected users only.",
      "foodpanda may at any time in its sole and absolute discretion withdraw, amend and/or alter any applicable terms and conditions of the voucher, deals, or promotions without prior notice.",
      "foodpanda may at any time in its sole and absolute discretion exclude, void, discontinue or disqualify you from any voucher, deal, or promotion without prior notice.",
    ],

    icon: discountIcon,
  },
  discount: {
    title: "10% off Tk. 50",
    type: "discount",
    offer: [
      "10% off min ৳50",
      "Valid for all items.",
      " Valid from May 19, 2024 - Dec 31, 2024",
      "Min. order Tk 50.",
      " Automatically applied to cart",
    ],

    terms: [
      "Valid for a minimum order of Tk50",
      "Applicable for Delivery.",
      "Additional T&C can apply",
    ],
    icon: discountIcon,
  },
  stamp: {
    title: "10% off Tk. 50",
    type: "stamp",
    offer: [
      "10% off min ৳50",
      "Valid for all items.",
      " Valid from May 19, 2024 - Dec 31, 2024",
      "Min. order Tk 50.",
      " Automatically applied to cart",
    ],

    terms: [
      "Valid for a minimum order of Tk50",
      "Applicable for Delivery.",
      "Additional T&C can apply",
    ],
    icon: discountIcon,
  },
};
